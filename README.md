# Bike Astronomia — Plataforma Educativa

Uma plataforma moderna e escalável dedicada à divulgação da Astronomia em Belém e região, desenvolvida com as melhores práticas de Engenharia de Software.

## 🚀 Tecnologias

- **Quasar Framework v2** (Vite-based)
- **Vue 3** (Composition API + `<script setup>`)
- **TypeScript** (Tipagem estrita em todo projeto)
- **Pinia** (Gestão de estado reativa)
- **Vue Router** (Sistema de rotas dinâmicas)
- **SASS/SCSS** (Estilização customizada e tokens de design)
- **Axios** (Service Layer desacoplada)

## 🌌 Características Principais

- **Mobile First**: Design otimizado para dispositivos móveis, sem comprometer a experiência Desktop.
- **Premium Aesthetics**: Tema espacial ("Dark Cosmic") com glassmorphism, gradientes e fundo estelar animado.
- **Arquitetura Escalável**: Separação clara entre Mocks, Serviços, Stores e Componentes.
- **Pronto para produção**: Estrutura preparada para virar PWA e integração com APIs REST reais.

## 🛠️ Como rodar o projeto

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Rodar em modo desenvolvimento**:
   ```bash
   npx quasar dev
   ```

3. **Gerar build de produção**:
   ```bash
   npx quasar build
   ```

## 📂 Estrutura de Diretórios

- `src/boot`: Inicializadores (Pinia, Axios)
- `src/components`: Componentes reutilizáveis (Home, Common, Admin)
- `src/mocks`: Dados dummy realistas para desenvolvimento offline
- `src/services`: Camada de abstração de dados (API ready)
- `src/stores`: Gerenciamento de estado global por funcionalidade
- `src/types`: Interfaces e tipos TypeScript centrais

---
*Bike Astronomia - O Universo ao alcance de todos.*
