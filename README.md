# 🎭 Persona-Style Portfolio — Furqan Mohammad

> I'm a nerd who likes Persona and decided to make my portfolio like this on a whim.

An interactive **Persona 5 Royal-inspired portfolio** built from scratch with **HTML, CSS, and Vanilla JavaScript** using a lightweight **Model-View-Controller architecture**.

It combines my interests in **Web Development & UI/UX Design** with my obsession with **Persona's Stylish UI**.

## ✨ Features

- **Persona-inspired UI** — Custom menus, transitions, animations, and visual effects.
- **Dynamic Content** — Fetches GitHub repositories, stars, and languages through the GitHub API.
- **Immersive Design** — Custom cursor, sound effects, video backgrounds, and animated transitions.
- **Keyboard Navigation** — Navigate using `↑` `↓`, `Enter`, and `Esc`.
- **Responsive Layout** — Designed to work across different screen sizes.

## 🛠️ Built With

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub REST API
- Figma

## 📁 Structure

```text
├── index.html          View skeleton – markup only, no logic or styles
├── css/
│   └── style.css       All styling (theme colors, grid layouts, animations)
├── js/
│   ├── model.js        DATA – projects, skills, GitHub API fetch, app state
│   ├── view.js         DOM – rendering, ransom lettering, wipe, cursor, sound
│   └── controller.js   EVENTS – keyboard/mouse input, navigation logic
├── assets/
│   ├── sfx/
│   │   ├── select.mp3  Menu sound (plays on select/confirm)
│   │   └── bgm.mp3     Background music ("Wake Up, Get Up, Get Out There" by Lyn Inaizumi)
│   ├── cursors/        Animated cursor sprite strips
│   ├── menus/          Video/image backgrounds for each tab section
│   └── cv/             Downloadable CV (linked from About + Contact)
└── README.md           Portfolio README file
```

The JavaScript follows a lightweight MVC architecture:

- model.js: Data, projects, skills, GitHub API, and app state
- view.js: DOM rendering, animations, cursor, and sound
- controller.js: User input and navigation logic

## 🎮 Controls

| Input | Action   |
| ----- | -------- |
| ↑ / ↓ | Navigate |
| Enter | Select   |
| Esc   | Go Back  |
| Mouse | Interact |

## ⚠️ Disclaimer

This is a fan-made Persona 5 Royal-inspired project and is not affiliated with or endorsed by ATLUS or SEGA.

**_Take Your Heart... 🎭_**
