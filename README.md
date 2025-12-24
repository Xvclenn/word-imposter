# 🎭 Word Imposter

**Word Imposter** is a fun social word game inspired by *Among Us*.  
Each player receives a secret word — except one player, the **Imposter**, who gets a different word (or none at all).  
Discuss, observe carefully, and figure out who the Imposter is!

---

## 🚀 Features

### 🎮 Game Modes
- **Local Mode** – Play on a single device by passing it around
- **Online Mode** – (Planned for future development)

### ✨ Highlights
- 👥 Supports 3–10 players
- 🎯 Automatic role assignment (Imposter / Player)
- 🎲 Random word selection
- 🧠 Turn-based gameplay
- 🌙 Dark / Light mode toggle
- 📱 Fully responsive (mobile-friendly)
- ✨ Smooth animations with Framer Motion

---

## 🛠 Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **React Context API + Reducer**
- **shadcn/ui**

---

## 📁 Project Structure

```bash
word-imposter/
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── game/
│   │   │   ├── local/      # Local game mode
│   │   │   └── online/     # Online game mode
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Footer.tsx
│   │   ├── ModalComp.tsx
│   │   ├── ModeToggle.tsx
│   │   ├── PlayerSetup.tsx
│   │   ├── PlayPhaseControls.tsx
│   │   └── ShowWordScreen.tsx
│   │
│   ├── context/            # Global game state
│   │   ├── GameContext.tsx
│   │   └── gameReducer.ts
│   │
│   ├── engine/             # Core game logic
│   │   ├── assignRoles.ts
│   │   ├── getCurrentPlayer.ts
│   │   ├── getRandomWord.ts
│   │   └── words.ts
│   │
│   ├── types/              # Type definitions
│   │   └── game.ts
│   │
│   └── lib/
│       └── utils.ts
│
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── README.md
