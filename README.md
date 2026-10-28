# text

LLM (chat) teaching demos, edulab style, PL/EN:

- `index.html` – token-by-token text generation simulation
- `context.html` – how the context window works: the window as a budget, plus a chat that outgrows a 4,000-token window (drop oldest / summarize / stop)

Shared design tokens and chrome live in `shared.css`, language persistence in `shared.js`. No build step; open either page directly or serve with `python3 -m http.server`.
