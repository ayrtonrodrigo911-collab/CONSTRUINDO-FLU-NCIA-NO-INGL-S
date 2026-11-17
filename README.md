# 🇺🇸 Construindo Fluência no Inglês — Landing Page

> Landing page de alta conversão para captura de leads e lançamento de e-book/evento de inglês da professora **Gabi Modesto**, desenvolvida com **Next.js**, **React 19**, **TypeScript** e **Tailwind CSS**.

---

## 📸 Demonstração e Visual

A página foi construída com fidelidade visual ao protótipo de marketing digital, com tipografia de forte impacto, contraste cromático estratégico (azul marinho e vermelho) e elementos visuais com aceleração por hardware.

* **Tipografia:** Montserrat (Headlines, botões e badges), Poppins (Corpo e legibilidade) e Oswald.
* **Efeitos Visuais:** Parallax 3D com profundidade de camadas, divisor estilo papel rasgado (*torn paper edge*), brilho dinâmico nos botões de CTA e barra de leitura minimalista no topo.

---

## ✨ Funcionalidades Principais

* **Hero Section de Alto Impacto:**
  * Headline com ênfase visual de conversão.
  * Badges de destaque (*"AULÃO 100% ONLINE E GRATUITO"* e data do evento).
  * Formulário de captura de leads com validação, estado de processamento e feedback animado com explosão de confetes (`canvas-confetti`).
* **Rolagem Suave e Otimizada (Momentum Smooth Scroll):**
  * Interpolação suave a 60/120 FPS para mouse wheel, teclado e navegação âncora.
  * Barra de progresso de leitura ultra-fina (2px) em vermelho da marca, sincronizada em tempo real via GPU (`scaleX`) sem atraso (*zero lag*).
  * Botão flutuante para retorno suave ao topo da página.
* **Seção de Impacto Emocional com Parallax 3D:**
  * Banner *"O ano da realização de um sonho"*, com deslocamento suave de imagens no eixo Y em múltiplas camadas de profundidade.
* **Módulos do E-book & Público-Alvo:**
  * Apresentação dos módulos com cartões interativos.
  * Números destacados em tamanho expandido e microinterações de hover.
* **Biografia da Professora & Rodapé:**
  * Seção *"Conheça sua professora"* com foto recortada e links institucionais no rodapé.
* **Design 100% Responsivo:**
  * Layout adaptável para telas grandes (1400px+), desktop padrão, tablets e smartphones.

---

## 🚀 Tecnologias Utilizadas

* **[Next.js 16](https://nextjs.org/)** — App Router com Turbopack
* **[React 19](https://react.dev/)** — Componentes modernos e hooks de performance
* **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática e segurança de código
* **[Tailwind CSS v4](https://tailwindcss.com/)** — Estilização moderna com CSS otimizado
* **[Lucide React](https://lucide.dev/)** — Ícones minimalistas e acessíveis
* **[Canvas Confetti](https://github.com/catdad/canvas-confetti)** — Efeito de celebração no envio do formulário

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos
* **Node.js** (versão 18.18 ou superior)
* Gerenciador de pacotes **npm**, **pnpm** ou **yarn**

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/construindo-fluencia-landing-page.git
cd construindo-fluencia-landing-page
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra no navegador:
```
http://localhost:3000
```

### Build para Produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
npm run start
```

---

## 📁 Estrutura de Pastas

```text
├── app/
│   ├── globals.css          # Estilos globais, tipografia, custom scrollbar e animações
│   ├── layout.tsx           # Layout raiz com fontes e metadados
│   └── page.tsx             # Página principal
├── components/
│   ├── emotional-cta.tsx    # Banner com efeito 3D parallax de rolagem
│   ├── landing-sections.tsx # Seções estruturais (Hero, Público, Módulos, Bio e Footer)
│   ├── lead-form.tsx        # Formulário de captura com feedback e confetes
│   └── scroll-effects.tsx   # Motor de scroll suave, barra de progresso e botão ao topo
├── public/
│   ├── img/                 # Imagens e ilustrações da landing page
│   └── images/              # Compatibilidade de referências visuais
├── next.config.mjs          # Configurações do Next.js e origens de desenvolvimento
└── package.json             # Dependências e scripts do projeto
```

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de demonstração.

