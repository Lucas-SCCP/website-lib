# website-lib

Biblioteca React para construção dinâmica de sites a partir de estruturas e padrões pré-definidos. Ideal para reutilização, manutenção centralizada e rápida evolução de múltiplos projetos frontend.

---

## ✨ Visão Geral

- **website-lib** permite criar sites completos a partir de um modelo de dados padronizado, compondo páginas, componentes e elementos de forma dinâmica.
- Foco em **reutilização**, **manutenção centralizada** e **distribuição fácil** de novas funcionalidades para múltiplos projetos.
- Utiliza React, TypeScript e padrões modernos de desenvolvimento.

---

## 🚀 Instalação

```bash
npm install website-lib
```

> **Peer dependencies**: Certifique-se de instalar também as dependências peer listadas no `package.json` (React, React Bootstrap, dompurify, zustand, etc).

---

## 🏗️ Estrutura do Projeto

```
src/
  components/    # Componentes (Layout, Header, Footer, Form, etc)
  elements/      # Elementos (Text, Image, Input, Button, etc)
  constants/     # Enums e constantes de tipos
  factories/     # Fábricas para instanciar componentes/elementos dinamicamente
  services/      # Serviços utilitários (API, Cache, Email, Analytics, etc)
  stores/        # Gerenciamento de estado
  types/         # Tipos para todo o modelo de dados
  utils/         # Funções utilitárias e validadores
index.ts         # Exporta tudo que é público na lib
```

---

## 🧩 Como Funciona

- **Estrutura de Dados**: O site é definido por um objeto JSON (ver `RawWebsiteType`), contendo páginas, componentes e elementos.
- **Factories**: Fábricas constroem dinamicamente componentes e elementos a partir do JSON.
- **Componentes**: Renderizam partes do site (textos, listas, formulários, carrosséis, etc).
- **Elementos**: Unidades atômicas (input, botão, imagem, texto, etc).
- **Serviços**: Abstraem chamadas de API, cache local, envio de e-mail, validação, etc.
- **Gerenciamento de Estado**: Utiliza Zustand para formulários dinâmicos.

---

## 🛠️ Uso Básico

1. **Importe o que precisa:**
   ```ts
   import { MainLayout, PageRenderer, ConstructorService } from 'website-lib'
   ```

2. **Busque a estrutura do site:**
   ```ts
   const constructorService = new ConstructorService()
   const websiteData = await constructorService.fetchWebsiteFromApi(websiteId, apiUrl)
   ```

3. **Renderize:**
   ```tsx
   <MainLayout website={websiteData}>
     <PageRenderer ga4="GA_TRACKING_ID" title="Título" components={websiteData.pages[0].components} />
   </MainLayout>
   ```

---

## 🧪 Teste Local

Para desenvolver a biblioteca e ver as alterações automaticamente no projeto consumidor, use o fluxo abaixo.

### 1) Na biblioteca (`website-lib`)

```bash
npm install
npm run build
npm link
npm run link:consumer-peers -- /caminho/para/site
npm run build:watch
```

- `npm link` registra a lib globalmente na sua máquina.
- `npm run link:consumer-peers` força a lib linkada a usar as **mesmas cópias das peer dependencies** do projeto consumidor (ex.: `react`, `react-dom`, `react-router-dom`), evitando conflitos de contexto e `Invalid hook call`.
- `npm run build:watch` recompila automaticamente sempre que você alterar algo em `src/`.
- Antes de rodar o link, garanta que o consumidor já executou `npm install`.

### 2) No projeto consumidor

Rodar apenas o install, fazer todo o processo na lib e depois rodar o link e npm start

```bash
npm install
npm link website-lib
npm start
```

Quando você salvar mudanças na lib, o `dist/` será atualizado e o projeto consumidor refletirá as alterações.

> Se o `MainLayout` renderiza mas o `PageRenderer` não entra no `<Outlet />`, também pode ser duplicidade de `react-router-dom` no `npm link`. O comando `npm run link:consumer-peers -- /caminho/para/site` corrige isso ao alinhar peers da lib com o consumidor.

> Se o comando retornar `Nenhuma peer dependency encontrada no consumidor para linkar`, normalmente o caminho do projeto consumidor está incorreto ou as dependências ainda não foram instaladas nesse projeto.

### 3) (Opcional) Limpeza do link

Na lib:

```bash
npm run unlink:global
```

No consumidor:

```bash
npm unlink website-lib
npm install
```

---

## 🏷️ Scripts

- `npm run build` — Compila a biblioteca para produção.
- `npm run build:watch` — Compila em modo watch e aplica o ajuste ESM automaticamente em `dist`.
- `npm run lint` — Lint nos arquivos.
- `npm run lint:fix` — Corrige problemas de lint automaticamente.
- `npm run format` — Formata o código com Prettier.
- `npm run link:global` — Atalho para `npm link`.
- `npm run unlink:global` — Remove o link global local da lib.
- `npm run link:consumer-peers -- /caminho/consumidor` — Linka as `peerDependencies` do consumidor na lib (incluindo `react`, `react-dom` e `react-router-dom`).

---

## 📦 Publicação

```bash
npm run build

npm publish --access public
```

---

## 📚 Tipos Exportados

A biblioteca exporta todos os tipos necessários para tipar dados, componentes e elementos dinamicamente.

---

## 📋 Dependências Principais

- React
- React Bootstrap
- Zustand
- dompurify
- react-icons
- react-input-mask
- react-helmet-async

---

## 📝 Exemplo de Estrutura de Dados

Veja o tipo `RawWebsiteType` em `src/types/RawWebsiteType.ts` para um exemplo completo de como estruturar o JSON do site.

---
