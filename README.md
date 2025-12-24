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


## ⚙️ Getting Started (Local Development)

Follow these steps to run the project locally.

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/word-imposter.git
cd word-imposter

### 2️⃣ Install dependencies
```bash
npm install

### 3️⃣ Start the development server
```bash
npm run dev

Open your browser and visit:
```bash
http://localhost:3000

### 3️⃣ Start the development server
```bash
npm run dev


🧠 Game Logic Overview

assignRoles.ts
Randomly assigns one Imposter and normal players.

getRandomWord.ts
Selects a random word from the word list.

GameContext + Reducer
Manages global game state and phases:

SETUP

SHOW_WORD

PLAY

ShowWordScreen
Shows the secret word privately to each player.


🎨 UI & Animations

Framer Motion

Modal open / close animations

Hover & tap effects

Smooth transitions between phases

Tailwind CSS

Gradient backgrounds

Responsive layout

Dark / Light theme support

HowToPlay Modal

Desktop: icon-only button

Mobile: button with text label


🌐 Online Mode (Coming Soon)

The online multiplayer mode is planned and currently under development.

Planned features:

Real-time multiplayer

Voting system

Host-controlled game rooms

Timers and rounds

🔮 Future Improvements

🌐 Online multiplayer (WebSockets / Firebase)

🗳 Voting & elimination phase

⏱ Timers and rounds

🧑‍⚖️ Host / moderator role

🌍 Multi-language support

📊 Game statistics

👨‍💻 Author

Chikuso
Software Engineer / IT Student

This project was built to practice:

Modern React patterns

Next.js App Router

State management with Context & Reducer

UI animation and UX design

📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and share it.
