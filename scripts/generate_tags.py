import os
import json
import glob
import time

try:
    from google import genai
    from google.genai import types
except ImportError:
    print("ERRO: A biblioteca 'google-genai' não está instalada.")
    print("Execute: pip install google-genai")
    exit(1)

SERMONS_DIR = os.path.join(os.path.dirname(__file__), '..', 'chspurgeon-sermons-main')
OUTPUT_FILE = os.path.join(os.path.dirname(__file__), '..', 'lib', 'sermon_tags_en_full.json')

# O cliente puxa automaticamente a variável de ambiente GEMINI_API_KEY
try:
    client = genai.Client()
except Exception as e:
    print("ERRO: Defina a variável de ambiente GEMINI_API_KEY com a sua chave de API antes de executar.")
    print("Ex: $env:GEMINI_API_KEY=\"sua_chave\"")
    exit(1)

def get_tags_from_llm(sermon_content):
    prompt = f"""
Read the sermon below and extract exactly 20 central tags, themes, or topics discussed in the text.
Return ONLY a valid JSON array containing the 20 strings, and nothing else.
The tags MUST be in English.
Example of expected output: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6", "Tag 7", "Tag 8", "Tag 9", "Tag 10", "Tag 11", "Tag 12", "Tag 13", "Tag 14", "Tag 15", "Tag 16", "Tag 17", "Tag 18", "Tag 19", "Tag 20"]

Sermon text (truncated):
{sermon_content[:30000]}
"""
    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
            config=types.GenerateContentConfig(
                temperature=0.2,
                response_mime_type="application/json",
            ),
        )
        tags = json.loads(response.text)
        if isinstance(tags, list):
            return tags[:20]
        return []
    except Exception as e:
        print(f"Erro na API: {e}")
        return []

def main():
    # Carregar o progresso anterior, se existir
    if os.path.exists(OUTPUT_FILE):
        with open(OUTPUT_FILE, 'r', encoding='utf-8') as f:
            tags_data = json.load(f)
    else:
        tags_data = {}
    
    # Encontrar todos os arquivos .md nos diretórios de volume
    md_files = glob.glob(os.path.join(SERMONS_DIR, 'volume-*', '*.md'))
    
    total = len(md_files)
    print(f"Encontrados {total} sermões. Iniciando processamento...")
    
    for i, file_path in enumerate(md_files):
        # Extrair volume e sermão da estrutura de pastas
        # ex: .../chspurgeon-sermons-main/volume-01/sermon-1.md
        parts = file_path.split(os.sep)
        volume_id = parts[-2]
        sermon_id = parts[-1].replace('.md', '')
        
        # Pular se já tiver sido processado
        if volume_id in tags_data and sermon_id in tags_data[volume_id]:
            print(f"[{i+1}/{total}] {volume_id}/{sermon_id} já processado. Pulando...")
            continue
            
        print(f"[{i+1}/{total}] Processando {volume_id}/{sermon_id}...")
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        tags = get_tags_from_llm(content)
        
        if not tags:
            print("Falha ao gerar tags, continuando mesmo assim...")
            time.sleep(5)
            continue
            
        if volume_id not in tags_data:
            tags_data[volume_id] = {}
            
        tags_data[volume_id][sermon_id] = tags
        
        # Salvar o progresso a cada 5 arquivos
        if (i + 1) % 5 == 0:
            with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
                json.dump(tags_data, f, indent=2)
                print(f"--- Progresso salvo em {OUTPUT_FILE} ---")
                
        # Delay de 4 segundos para evitar Rate Limit (429) no modo gratuito
        time.sleep(4)
                
    # Salvar o resultado final
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(tags_data, f, indent=2)
        
    print(f"Processamento concluído! Tags salvas em {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
