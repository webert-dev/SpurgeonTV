# SPURGEON TV 📖

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?logo=react)

---

## 🇬🇧 English

### Welcome to SPURGEON TV
This project is a modern web application dedicated to preserving and presenting the complete sermon collection of **Charles Haddon Spurgeon** (1834–1892), the "Prince of Preachers." It contains his monumental life's work: **3,563 sermons organized across 63 volumes**.

### Key Features
- **Complete Collection**: Access to all 63 volumes of the *New Park Street Pulpit* and *Metropolitan Tabernacle Pulpit*.
- **Rich Metadata Algorithm**: Automatically calculates the exact publication year and location for each sermon based on its volume number.
- **Fast Full-Text Search**: Client-side search functionality pre-indexed to quickly find sermons by title, volume, or scripture reference.
- **Modern UI/UX**: Built with Next.js, featuring a clean, responsive, and elegant dark-mode design with gold accents tailored for an optimal reading experience.
- **Interactive Sermon Reader**: Seamless navigation between previous and next sermons, including expandable contextual metadata panels.
- **Biography Timeline**: A dedicated "About Spurgeon" page detailing the milestones of his life and ministry.

### Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Vanilla CSS with customized CSS Variables
- **Search Engine**: Pre-built JSON indexing for blazing-fast client-side lookups
- **Deployment**: Configured exclusively for **Cloudflare Workers** via OpenNext (`@opennextjs/cloudflare`)

---

## 🇪🇸 Español

### Bienvenido a SPURGEON TV
Este proyecto es una aplicación web moderna dedicada a preservar y presentar la colección completa de sermones de **Charles Haddon Spurgeon** (1834–1892), el "Príncipe de los Predicadores". Contiene el trabajo monumental de su vida: **3.563 sermones organizados en 63 volúmenes**.

### Características Principales
- **Colección Completa**: Acceso a los 63 volúmenes del *New Park Street Pulpit* y el *Metropolitan Tabernacle Pulpit*.
- **Algoritmo de Metadatos**: Calcula automáticamente el año exacto de publicación y la ubicación de cada sermón en función de su número de volumen.
- **Búsqueda Rápida de Texto Completo**: Funcionalidad de búsqueda del lado del cliente pre-indexada para encontrar rápidamente sermones por título, volumen o referencia bíblica.
- **UI/UX Moderna**: Construido con Next.js, presenta un diseño limpio, responsivo y elegante en modo oscuro con detalles dorados adaptados para una experiencia de lectura óptima.
- **Lector de Sermones Interactivo**: Navegación fluida entre sermones anteriores y siguientes, incluyendo paneles expandibles de metadatos contextuales.
- **Línea de Tiempo Biográfica**: Una página dedicada "Sobre Spurgeon" que detalla los hitos de su vida y ministerio.

### Tecnologías
- **Framework**: Next.js (App Router)
- **Estilos**: CSS puro con variables personalizadas
- **Motor de Búsqueda**: Indexación JSON preconstruida para búsquedas ultra rápidas del lado del cliente
- **Despliegue**: Configurado exclusivamente para **Cloudflare Workers** vía OpenNext (`@opennextjs/cloudflare`)

---

## 🇧🇷 Português

### Bem-vindo à SPURGEON TV
Este projeto é uma aplicação web moderna dedicada a preservar e apresentar a coleção completa de sermões de **Charles Haddon Spurgeon** (1834–1892), o "Príncipe dos Pregadores". Ele contém a obra monumental de sua vida: **3.563 sermones organizados em 63 volumes**.

### Principais Funcionalidades
- **Coleção Completa**: Acesso a todos os 63 volumes do *New Park Street Pulpit* e *Metropolitan Tabernacle Pulpit*.
- **Algoritmo Rico de Metadados**: Calcula automaticamente o ano exato de publicação e o local de cada sermão com base no número do seu volume.
- **Pesquisa Rápida em Todo o Texto**: Funcionalidade de pesquisa no lado do cliente pré-indexada para encontrar sermões rapidamente por título, volume ou referência bíblica.
- **UI/UX Moderna**: Construído com Next.js, apresenta um design dark-mode limpo, responsivo e elegante, com detalhes em dourado, projetado para uma experiência de leitura ideal.
- **Leitor de Sermões Interativo**: Navegação fluida entre os sermões anteriores e os próximos, incluindo painéis expansíveis de metadatos contextuais.
- **Linha do Tempo Biográfica**: Uma página dedicada "Sobre Spurgeon" detalhando os marcos de sua vida e ministério.

### Tecnologias Utilizadas
- **Framework**: Next.js (App Router)
- **Estilização**: CSS puro com variáveis customizadas
- **Motor de Busca**: Indexação em JSON pré-construída para pesquisas extremamente rápidas no lado do cliente
- **Implantação**: Configurado exclusivamente para **Cloudflare Workers** via OpenNext (`@opennextjs/cloudflare`)
- **Infraestrutura**: Requer a configuração de variáveis de ambiente no Cloudflare Dashboard (ex: `NEXT_PUBLIC_SITE_URL`, `DEEPL_API_KEY`, etc.) e a flag de compatibilidade `nodejs_compat`.

---

## 💻 Getting Started / Cómo Empezar / Como Começar

1. Clone the repository / Clona el repositorio / Clone o repositório
2. Install dependencies / Instala las dependencias / Instale as dependências:
   ```bash
   npm install
   ```
3. Run the development server / Ejecuta el servidor de desarrollo / Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) / Abre en tu navegador / Abra no seu navegador.

## 🚀 Deployment (Cloudflare Workers)

This project has been fully migrated from Vercel to **Cloudflare Workers** using [OpenNext](https://opennext.js.org/cloudflare).

To deploy the application to your Cloudflare account, follow these steps:

1. Build the Next.js application for Cloudflare:
   ```bash
   npm run build:cf
   ```
2. Deploy the generated worker using Wrangler:
   ```bash
   npx wrangler deploy
   ```
   
> **Pro Tip:** You can run both commands together in a single line to build and deploy sequentially:
> ```bash
> npm run deploy:cf
> ```

   *(Note: This requires you to be logged into your Cloudflare account via `npx wrangler login` or by setting the `CLOUDFLARE_API_TOKEN` environment variable).*

---
**🇧🇷 Deploy na Cloudflare (Português):**
1. Faça o build da aplicação Next.js para Cloudflare:
   ```bash
   npm run build:cf
   ```
2. Faça o deploy do worker gerado usando o Wrangler:
   ```bash
   npx wrangler deploy
   ```
   
> **Dica:** Você pode rodar os dois comandos juntos em uma única linha para fazer o build e deploy na sequência:
> ```bash
> npm run deploy:cf
> ```

   *(Nota: Isso exige que você esteja logado na sua conta da Cloudflare via `npx wrangler login` ou configurando a variável de ambiente `CLOUDFLARE_API_TOKEN`).*

---
**🇪🇸 Despliegue en Cloudflare (Español):**
1. Construye la aplicación Next.js para Cloudflare:
   ```bash
   npm run build:cf
   ```
2. Despliega el worker generado usando Wrangler:
   ```bash
   npx wrangler deploy
   ```
   
> **Consejo:** Puedes ejecutar ambos comandos juntos en una sola línea para construir y desplegar secuencialmente:
> ```bash
> npm run deploy:cf
> ```

   *(Nota: Esto requiere que inicies sesión en tu cuenta de Cloudflare mediante `npx wrangler login` o configurando la variable de entorno `CLOUDFLARE_API_TOKEN`).*

### Custom Domains
If deploying to a custom domain (e.g. `spurgeon.tv`), ensure you have linked the domain in the **Cloudflare Dashboard**:
1. Go to **Workers & Pages** -> **spurgeontv-app**
2. Go to **Triggers** / **Custom Domains**
3. Add your custom domains. Cloudflare will automatically route the traffic to the Worker.
