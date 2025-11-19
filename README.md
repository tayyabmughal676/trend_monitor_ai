# Next Monitor AI

**Next Monitor AI** is a modern, enterprise‑grade brand monitoring platform built with **Next.js** and **Hono**. It leverages multiple Large Language Models (LLMs) to fetch, analyze, and surface brand mentions in real‑time. The project showcases best‑practice architecture, including the Repository Pattern, structured logging with **Pino**, and auto‑generated OpenAPI documentation.

---

## ✨ Integrated Features

- **Multi‑LLM Support**: Gemini, ChatGPT, Claude, DeepSeek, Kimi, Grok.
- **Repository Pattern**: Decouples data access from business logic for clean, testable code.
- **Structured Logging**: Powered by Pino for high‑performance observability.
- **OpenAPI (Swagger) Docs**: Auto‑generated API docs via `@hono/zod-openapi`.
- **Dynamic Frontend**: Next.js with modern UI/UX, responsive design, and glassmorphism styling.
- **Real‑time Brand Monitoring**: Input any brand, retrieve mentions, and view AI‑generated insights.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js (React), vanilla CSS with premium design aesthetics.
- **Backend/API**: Hono (lightweight server), TypeScript, Zod for validation.
- **LLM Clients**: Official SDKs / REST wrappers for Gemini, OpenAI, Anthropic, DeepSeek, Kimi, Grok.
- **Logging**: Pino.
- **Documentation**: Swagger UI generated from OpenAPI spec.
- **Testing**: Jest & React Testing Library.

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/next_monitor_ai.git
   cd next_monitor_ai
   ```
2. **Install dependencies**
   ```bash
   npm install   # or yarn, pnpm, bun
   ```
3. **Configure environment variables**
   Create a `.env.local` file based on `.env.example` and add your API keys for the supported LLMs.
4. **Run the development server**
   ```bash
   npm run dev   # or yarn dev, pnpm dev, bun dev
   ```
5. **Open the app**
   Visit `http://localhost:3000` in your browser.

---

## 📚 Documentation

- **API Docs**: Visit `http://localhost:3000/api/docs` after starting the server to explore the Swagger UI.
- **Design System**: The UI follows a premium dark‑mode glassmorphism theme with smooth micro‑animations.

---

## 🤝 Contributing

1. Fork the repo.
2. Create a feature branch.
3. Ensure linting passes (`npm run lint`).
4. Submit a Pull Request.

---

## 📄 License

MIT License – see the `LICENSE` file for details.

---

*Built with love by the Next Monitor AI team.*
