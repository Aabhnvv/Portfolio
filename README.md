# Abhinav Bankar — Developer Portfolio

A modern, fully responsive personal portfolio built with **plain HTML, CSS, and JavaScript** — no frameworks, no build step, no dependencies. Just open it in a browser and it runs.

Designed to be bold, colorful, and smooth on both desktop and mobile, with scroll animations, a typing effect, and a clean component-style structure.

> 🎨 Front-end developer · ex-Capgemini (2.5 yrs) · now freelancing and available for client work.

---

## ✨ Features

- **100% vanilla** — HTML5, CSS3, and modern JavaScript (no libraries or frameworks)
- **Fully responsive** — fluid layouts with `clamp()` typography; looks great from 320px phones to large desktops
- **Bold, colorful theme** — vibrant gradients, animated background orbs, and glassy accents
- **Scroll reveal animations** — sections fade/slide in using `IntersectionObserver`
- **Animated hero** — typing effect that cycles through phrases + animated stat counters
- **Sticky, scroll-aware navbar** — shrinks on scroll, highlights the active section (scrollspy), and a slide-in menu on mobile
- **Scroll progress bar** at the top of the page
- **Front-end contact form** with live validation (no back-end required)
- **Accessibility-minded** — semantic markup, `aria` labels, keyboard-friendly menu, and full `prefers-reduced-motion` support

---

## 🧱 Tech stack

| Area        | Used                                        |
| ----------- | ------------------------------------------- |
| Markup      | HTML5 (semantic)                            |
| Styling     | CSS3 — custom properties, grid, flexbox     |
| Behavior    | Vanilla JavaScript (ES6+)                   |
| Fonts       | Google Fonts — Sora & Inter                 |
| Tooling     | None required — runs as static files        |

---

## 📁 Project structure

```
Portfolio/
├── index.html      # All page markup & content
├── styles.css      # Design tokens, layout, components, responsive rules
└── script.js       # Navbar, scroll reveal, scrollspy, typing, counters, form
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

- **Text & content** → edit the sections in `index.html` (hero, about, skills, projects, experience, contact)
- **Colors & theme** → tweak the CSS custom properties under `:root` in `styles.css`
- **Typing phrases** → edit the `words` array in `script.js`
- **Links** → update the social links and the email address in the contact section

---

## 🌐 Deployment

Because it's fully static, you can host it for free on:

- **GitHub Pages** — push to a repo and enable Pages on the `main` branch
- **Netlify** / **Vercel** — drag-and-drop the folder or connect the repo
- Any static file host

---

## 📬 Contact

- **Email:** aabhinav@protonmail.com
- **GitHub:** [aabhnvv](https://github.com/aabhnvv)
- **LinkedIn:** [Abhinav-bankar](https://www.linkedin.com/in/Abhinav-bankar)

Open to freelance and client projects — let's build something!

---

<p align="center">Built with ❤️ using plain HTML, CSS & JS.</p>
