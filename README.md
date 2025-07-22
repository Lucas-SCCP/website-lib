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

Para testar localmente em outro projeto:

```bash
sudo rm -rf node_modules
npm link
```
No projeto consumidor:
```bash
npm link website-lib
```

---

## 🏷️ Scripts

- `npm run build` — Compila a biblioteca para produção.
- `npm run lint` — Lint nos arquivos.
- `npm run lint:fix` — Corrige problemas de lint automaticamente.
- `npm run format` — Formata o código com Prettier.

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
