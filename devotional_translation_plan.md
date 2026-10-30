# Plano de Implementação: Tradução Canônica e Progressiva dos Devocionais (*Morning and Evening*)

## Visão Geral e Contexto
O devocional diário de Charles Spurgeon (*Morning and Evening*) conta com **732 meditações** por idioma (366 dias $\times$ 2 meditações: Manhã e Noite). As traduções atuais em Português e Espanhol contêm termos mecânicos, anacronismos (como *"milho velho"* em Josué 5:12 em vez de *"trigo da terra"*), falsos cognatos teológicos (como *"consideração discriminatória"* para *"discriminating regard"*), versículos descolados do padrão NVI / Reina-Valera e cabeçalhos duplicados no corpo do texto.

Este plano estabelece uma metodologia para **traduzir de raiz a partir dos originais em inglês** ([`public/data/morning-and-evening.json`](file:///c:/Users/fcout/SISTEMA_FAMILIA/04_NEGOCIOS_E_CARREIRAS/04.4_Tecnologia_e_Programacao/SPURGEONTV/public/data/morning-and-evening.json)), iniciando cronologicamente **a partir de amanhã, 28/10, até 27/10**, com segurança de backup prévio e substituição modular.

---

## Esclarecimento Técnico: Formato de Armazenamento (JSON vs. MD)
> [!NOTE]
> No ecossistema do SpurgeonTV, enquanto os **Sermões** são arquivos `.md` individuais (`volume-XX/sermon-YY.md`), o **Devocional Diário** é estruturado nativamente em arquivos JSON:
> 1. Arquivos mestre anuais: [`public/data/morning-and-evening-pt.json`](file:///c:/Users/fcout/SISTEMA_FAMILIA/04_NEGOCIOS_E_CARREIRAS/04.4_Tecnologia_e_Programacao/SPURGEONTV/public/data/morning-and-evening-pt.json) e [`morning-and-evening-es.json`](file:///c:/Users/fcout/SISTEMA_FAMILIA/04_NEGOCIOS_E_CARREIRAS/04.4_Tecnologia_e_Programacao/SPURGEONTV/public/data/morning-and-evening-es.json).
> 2. Fragmentos mensais servidos ao Next.js: [`public/data/devotional/{lang}/{01..12}.json`](file:///c:/Users/fcout/SISTEMA_FAMILIA/04_NEGOCIOS_E_CARREIRAS/04.4_Tecnologia_e_Programacao/SPURGEONTV/public/data/devotional/).
> 
> A substituição preservará a integridade do banco JSON consumido pelo frontend e criará um backup completo (`public/data/devotional_backup/`) antes de qualquer alteração.

---

## Mudanças Propostas

### 1. Motor de Tradução Teológica de Devocionais
Criar o script de tradução especializada [`scripts/translate-devotional.js`](file:///c:/Users/fcout/SISTEMA_FAMILIA/04_NEGOCIOS_E_CARREIRAS/04.4_Tecnologia_e_Programacao/SPURGEONTV/scripts/translate-devotional.js):

#### Recursos e Filtros do Motor:
1. **Fonte Única da Verdade:** Lê exclusivamente de `public/data/morning-and-evening.json` (inglês original vitoriano).
2. **Dicionário Teológico & Evitação de Falsos Cognatos:**
   - `discriminating grace / regard` $\rightarrow$ *"graça eletiva / olhar que discerne"* (e não "discriminação pejorativa").
   - `corn / old corn` $\rightarrow$ *"trigo / cereal da terra"* (e não "milho").
   - `sackbut` $\rightarrow$ *"sacabuxa"* (instrumento musical bíblico antigo).
   - `fellowship` $\rightarrow$ *"comunhão"*.
   - `earnest` $\rightarrow$ *"penhor / garantia"*.
3. **Alinhamento Bíblico Canônico:**
   - 🇧🇷 Português: Versículos alinhados ao estilo e texto da **NVI (Nova Versão Internacional)**. Exemplo em João 15:19: *"Vocês não pertencem ao mundo, mas eu os escolhi do mundo"* / *"Eu os escolhi do mundo"* (NVI), com fluidez, clareza contemporânea e exatidão.
   - 🇪🇸 Espanhol: Versículos alinhados à **Reina-Valera 1960 (RVR1960)**. Exemplo: *"Yo os elegí del mundo"*.
4. **Limpeza do Corpo (`body`):**
   - Elimina o cabeçalho cru duplicado (`October 28th — Morning Reading...`) de dentro do `body`.
   - O `body` conterá exclusivamente os parágrafos expositivos de Spurgeon, separados por `\n\n`.
   - O `keyverse` conterá o versículo perfeito entre aspas com a referência padronizada.

---

### 2. Cronograma de Execução: Ciclo Anual a Partir de 28/10

```mermaid
gantt
    title Cronograma de Substituição dos Devocionais (Ciclo 28/10 a 27/10)
    dateFormat  YYYY-MM-DD
    section Lote Imediato
    Lote 1 (28/10 a 03/11 - Próximos 7 dias)     :active, 2026-10-28, 2026-10-28
    section Lote Restante do Mês
    Lote 2 (Novembro: 01/11 a 30/11)             :2026-10-29, 2026-10-31
    section Final do Ano
    Lote 3 (Dezembro: 01/12 a 31/12)             :2026-11-01, 2026-11-05
    section Novo Ano
    Lote 4 (Janeiro a Outubro / Fechamento 27/10):2026-11-06, 2026-11-20
```

#### Passo 1: Backup Integral de Segurança
Criar cópia idêntica de segurança em:
- `public/data/devotional_backup/morning-and-evening-pt.json`
- `public/data/devotional_backup/morning-and-evening-es.json`
- `public/data/devotional_backup/monthly/`

#### Passo 2: Lote Piloto Imediato (28/10 a 03/11)
- Traduzir os **próximos 7 dias (14 meditações: Dia e Noite)** para PT e ES.
- Substituir essas datas nos arquivos mestre e nos arquivos mensais de Outubro (`10.json`) e Novembro (`11.json`).
- Validar imediatamente no navegador em `localhost:3000/pt/devotional/10-28/` e `localhost:3000/es/devotional/10-28/`.

#### Passo 3: Extensão Sequencial
- Seguir traduzindo os blocos subsequentes até fechar o ano em 27/10.

---

## Plano de Verificação

### 1. Testes Automatizados e de Integridade
- Executar script de validação de JSON (`node scripts/generate-devotional-pages.mjs`).
- Testar integridade estrutural: garantir que todas as 732 entradas mantenham `date`, `time`, `month`, `day`, `keyverse` e `body`.
- Conferir ausência de caracteres corrompidos (*mojibake*).

### 2. Validação Visual
- Abrir no navegador local:
  - 🇧🇷 `http://localhost:3000/pt/devotional/10-28/` (Manhã e Noite)
  - 🇪🇸 `http://localhost:3000/es/devotional/10-28/` (Mañana y Noche)
- Conferir a fluidez de leitura, ausência de cabeçalho duplicado e vocabulário teológico refinado.

---

## Perguntas para Confirmação do Usuário
1. Você aprova a execução do **Lote 1 (28/10 a 03/11 - próximas 14 meditações)** como piloto para você avaliar o resultado na prática no site amanhã?
2. Confirma que a substituição deve ocorrer nos arquivos JSON canônicos que alimentam o devocional na plataforma (com backup prévio garantido)?
