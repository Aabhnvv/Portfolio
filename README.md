# Abhinav Bankar — Developer Portfolio

A modern, fully responsive personal portfolio built with **plain HTML, CSS, and JavaScript** — no frameworks, no build step, no dependencies. Just open it in a browser and it runs.

Designed to be bold, colorful, and smooth on both desktop and mobile. On phones it transforms into a **native app-style experience** with a bottom tab bar and can be **installed to the home screen** as a PWA.

> 🎨 Freelance front-end developer · 2.5 yrs at Capgemini · AI-powered workflow across design, build & deployment.

---

## ✨ Features

- **100% vanilla** — HTML5, CSS3, and modern JavaScript (no libraries or frameworks)
- **Fully responsive** — fluid layouts with `clamp()` typography; looks great from 320px phones to large desktops
- **Mobile web-app layout** — a fixed, app-style **bottom tab bar** with icons + active highlighting, a slim app header, and device safe-area support
- **Installable PWA** — `manifest.json` + web-app meta let visitors *Add to Home Screen* and run it full-screen, standalone
- **Client-focused content** — a **Services** section ("what I can build for you") and a **How I work** process (Discuss → Design → Build → Deploy), with an **AI-powered workflow** highlighted throughout
- **Bold, colorful theme** — vibrant gradients, animated background orbs, and glassy accents
- **Scroll reveal animations** — sections fade/slide in using `IntersectionObserver`
- **Animated hero** — centered name with a typing effect that cycles through phrases + animated stat counters
- **Sticky, scroll-aware navbar** — shrinks on scroll and highlights the active section (scrollspy, synced with the mobile tab bar)
- **Smooth, performance-tuned scrolling** — `requestAnimationFrame`-throttled scroll handler, GPU-composited progress bar, and lightweight background effects
- **Working contact form** — validated and wired to a free form-handler service, so submissions are emailed directly (no back-end), with a personalized thank-you panel
- **Accessibility-minded** — semantic markup, `aria` labels, keyboard-friendly nav, and full `prefers-reduced-motion` support

---

## 🧱 Tech stack

| Area        | Used                                        |
| ----------- | ------------------------------------------- |
| Markup      | HTML5 (semantic)                            |
| Styling     | CSS3 — custom properties, grid, flexbox     |
| Behavior    | Vanilla JavaScript (ES6+)                   |
| Fonts       | Google Fonts — Sora & Inter                 |
| Forms       | Free form-handler service (no back-end)     |
| PWA         | Web App Manifest (installable)              |
| Tooling     | None required — runs as static files        |

---

## 📁 Project structure

```
Portfolio/
├── index.html      # All page markup & content
├── styles.css      # Design tokens, layout, components, responsive + mobile app rules
├── script.js       # Nav, tab bar, scroll reveal, scrollspy, typing, counters, form
└── manifest.json   # PWA manifest (installable web app)
```

---

## 🚀 Getting started

No installation or build is needed.

**Option 1 — Open directly**
Just double-click `index.html` to open it in your browser.

**Option 2 — Run a local server** (recommended for development)

```bash
# Python 3
python -m http.server 8000

# or with Node
npx serve
```

Then visit `http://localhost:8000`.

---

## 🛠️ Customization

Everything is content-driven and easy to edit:

- **Text & content** → edit the sections in `index.html` (hero, about, services, skills, projects, experience, contact)
- **Colors & theme** → tweak the CSS custom properties under `:root` in `styles.css`
- **Typing phrases** → edit the `words` array in `script.js`
- **Links** → update the social links and the email address in the contact section
- **Contact form** → connect your own form-handler endpoint (any free service works) via the form's hidden config field

---

## 🌐 Deployment

Because it's fully static, you can host it for free on:

- **GitHub Pages** — push to a repo and enable Pages on the `main` branch
- **Netlify** / **Vercel** — drag-and-drop the folder or connect the repo
- Any static file host

---

## 📬 Contact

Interested in working together? Head to the **live site** and reach out through the contact form —
I'm open to freelance and client projects.

---

<p align="center">Built with ❤️ using plain HTML, CSS & JS.</p>
