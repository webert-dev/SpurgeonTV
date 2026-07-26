# Monetização do SpurgeonTV

Este documento descreve as implementações de monetização ativas no código do site.

## 1. Google AdSense
O Google AdSense foi configurado utilizando a estratégia de injeção global otimizada via Next.js App Router.

- **Arquivo principal:** `components/AdSenseScript.js`
- **Injeção:** O componente é chamado dentro de `app/[lang]/layout.js`, garantindo que o script seja carregado em todas as páginas do site.
- **Estratégia de Carregamento:** Utilizamos o componente `<Script>` do Next.js com a estratégia `afterInteractive` para não bloquear o carregamento principal (First Contentful Paint) das páginas.
- **Variáveis de Ambiente:** O ID do Publisher do AdSense não fica exposto no código-fonte por segurança. Ele é lido através da variável de ambiente `NEXT_PUBLIC_ADSENSE_PUB_ID` configurada diretamente na Vercel (exemplo: `ca-pub-9583030006144403`). Se a variável não estiver presente, o script de anúncios simplesmente não é injetado.
- **Verificação de Propriedade:** O arquivo obrigatório de proteção contra fraudes do Google AdSense foi incluído na raiz pública do projeto: `public/ads.txt`.
- **Privacidade (GDPR/LGPD):** 
  - Para a Europa/Reino Unido (GDPR), o Google AdSense injeta automaticamente o banner oficial de CMP (Consent Management Platform) através das configurações do painel do próprio AdSense.
  - Para o restante do mundo (como o Brasil), o site utiliza o componente nativo `components/CookieBanner.js` que gerencia o aceite dos cookies para atender às regras de LGPD.

## 2. Infolinks
O Infolinks foi adicionado para diversificação de receitas com anúncios contextuais e banners integrados ao conteúdo (como links de texto sublinhados, banners laterais ou de rodapé flutuante).

- **Arquivo principal:** `app/[lang]/layout.js`
- **Injeção:** O script oficial do Infolinks foi adicionado logo antes da tag de fechamento `</body>`, conforme recomendação da plataforma, para garantir que todo o DOM esteja carregado antes do script tentar ler as palavras para os anúncios textuais.
- **Implementação Técnica:**
  - Adicionamos um bloco de script de configuração que injeta os IDs globalmente via Javascript (`infolinks_pid = 3446708` e `infolinks_wsid = 0`).
  - O script principal é carregado usando o componente `<Script>` do Next.js com estratégia `afterInteractive`.
  - **Correção Crítica de Segurança (Mixed Content):** O script fornecido pelo Infolinks utilizava o protocolo `http://`. Como o SpurgeonTV roda na Vercel via SSL (HTTPS), a chamada original resultaria em erro de *Mixed Content* (conteúdo misto) bloqueando o carregamento dos anúncios em navegadores modernos. A URL foi convertida internamente para `https://resources.infolinks.com/js/infolinks_main.js` para garantir o carregamento sem bloqueios de segurança.

## Considerações sobre Perfomance
Como as duas plataformas inserem nós no DOM dinamicamente, utilizamos as otimizações nativas do Next.js para não impactar o Lighthouse nem o Core Web Vitals, retardando a execução para a fase `afterInteractive`. Nenhuma mudança deve ser feita nos arquivos estruturais sem testar o impacto na indexação (SEO).
