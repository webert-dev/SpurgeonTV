# Plano de Evolução: SPURGEON TV

Analisei os três repositórios (`chspurgeon-sermons`, `ask-spurgeon`, `spurgeon-gems`) e o site oficial `spurgeon.org`. Eles possuem recursos fantásticos que podemos adaptar para elevar o nosso projeto "SPURGEON TV" para um nível de excelência mundial.

Abaixo está o plano de implementação detalhado com as melhorias propostas.

## 1. Melhorias na Experiência do Usuário (Inspirado no spurgeon.org)

O site oficial tem um design focado em descoberta e grandiosidade.
*   **Barra de Pesquisa Global no Topo:** O maior desafio de ter 3.500 sermões é encontrar o que você quer. Vamos criar uma barra de pesquisa responsiva e elegante na página inicial (Hero section) para buscar sermões por título.
*   **Sermão em Destaque / Aleatório:** Como são muitos sermões, vamos criar uma seção na página inicial chamada "Sermão em Destaque" (ou botão "Sermão Aleatório"), para que o usuário sempre tenha uma leitura sugerida ao entrar no site.
*   **Estatísticas do Acervo:** Adicionar contadores visuais elegantes na Home (Ex: "63 Volumes", "3.563 Sermões", "40 Anos de Ministério") para mostrar a magnitude da obra.
*   **Página "Sobre Spurgeon":** Criar uma página dedicada contando a história e a linha do tempo da vida de Charles Spurgeon.

## 2. Extração de Metadados (Inspirado no spurgeon-gems e chspurgeon-sermons)

Atualmente, nosso sistema (`lib/sermons.js`) lê os arquivos Markdown e extrai apenas o Título do sermão (linha 1).
*   **Extração de Referência Bíblica:** Os arquivos Markdown originais possuem a referência bíblica logo no início (ex: *Romanos 8:1*). Vamos alterar o nosso extrator para capturar esse versículo e exibi-lo como um "subtítulo" estilizado tanto na lista de sermões quanto na página de leitura.
*   **Tags/Categorias (Futuro):** Preparar a interface para exibir tags (ex: *Graça*, *Salvação*), algo que o `ask-spurgeon` faz mapeando tópicos.

## 3. Assistente de IA "Ask Spurgeon" (Inspirado no ask-spurgeon) - Opcional

O repositório `ask-spurgeon` é um chatbot RAG (Retrieval-Augmented Generation) que permite "conversar" com os sermões usando Inteligência Artificial.
*   **Proposta:** Podemos criar uma página `/chat` dentro do nosso site. Para isso funcionar de verdade, precisaríamos de uma chave de API (como OpenAI ou Groq). Podemos começar fazendo uma interface de busca inteligente simples, e, se você desejar, evoluir para um chat real no futuro.

---

## Perguntas Abertas para Você (User Review Required)

> [!IMPORTANT]
> Preciso da sua aprovação e opinião sobre as seguintes decisões antes de começarmos a programar:

1.  **Pesquisa:** Você quer que eu implemente a barra de pesquisa na página inicial? (Isso vai exigir carregar um índice de busca, o que é um pouco complexo devido aos 3500 sermões, mas totalmente viável).
2.  **Referência Bíblica:** Posso modificar o leitor de arquivos para buscar as referências bíblicas e colocá-las abaixo do título do sermão?
3.  **Página Sobre:** Deseja que eu crie a página "Sobre Spurgeon" com a linha do tempo da vida dele?
4.  **Integração de IA:** Você tem interesse em colocar um "Chat com Spurgeon" usando IA no site agora, ou prefere deixar isso para uma etapa futura e focar no layout/pesquisa primeiro?

## Alterações Propostas no Código

### Componentes Globais
#### [MODIFY] `app/page.js`
- Adicionar Hero Section com barra de pesquisa.
- Adicionar painel de estatísticas (63 volumes, 3500+ sermões).
- Adicionar seção de "Sermão Sugerido".

### Camada de Dados
#### [MODIFY] `lib/sermons.js`
- Atualizar a função de extração para capturar a Referência Bíblica nas primeiras linhas do Markdown e retorná-la como metadata.
- Criar função de busca (Search) para filtrar sermões.

### Páginas de Leitura
#### [MODIFY] `app/volume/[id]/[sermonId]/page.js`
- Exibir a referência bíblica formatada abaixo do título.
#### [MODIFY] `app/volume/[id]/page.js`
- Exibir a referência bíblica em cada "card" de sermão na lista.

---

## Verification Plan
1. O site deve continuar compilando perfeitamente (`npm run build`).
2. A barra de pesquisa deve filtrar a lista de sermões instantaneamente.
3. Os sermões devem carregar exibindo o versículo bíblico correspondente ao tema da pregação.
