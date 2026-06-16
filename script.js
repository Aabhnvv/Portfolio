/* ============================================================
   Abhinav Bankar — Portfolio · interactions
   ============================================================ */
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------- Current year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navbar: shrink on scroll + progress bar ---------- */
  const nav = document.getElementById("nav");
  const progress = document.getElementById("scrollProgress");

  function onScroll() {
    const scrolled = window.scrollY;
    if (nav) nav.classList.toggle("scrolled", scrolled > 30);

    if (progress) {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? (scrolled / docH) * 100 : 0;
      progress.style.width = pct + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  function closeMenu() {
    if (!navLinks) return;
    navLinks.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }

  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      const open = navLinks.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    // Stagger items within the same parent for a nicer cascade.
    revealEls.forEach(function (el) {
      const siblings = Array.from(el.parentElement.children).filter((c) =>
        c.classList.contains("reveal")
      );
      const idx = siblings.indexOf(el);
      el.style.transitionDelay = Math.min(idx, 6) * 70 + "ms";
      revealObserver.observe(el);
    });
  }

  /* ---------- Active nav link on scroll (scrollspy) ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navItems = document.querySelectorAll(".nav__link, .tab");
  const linkMap = {};
  navItems.forEach(function (link) {
    const id = (link.getAttribute("href") || "").replace("#", "");
    if (!id) return;
    (linkMap[id] = linkMap[id] || []).push(link);
  });

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navItems.forEach((l) => l.classList.remove("active"));
            (linkMap[entry.target.id] || []).forEach((l) => l.classList.add("active"));
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Animated stat counters ---------- */
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window && !prefersReducedMotion) {
    const countObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          animateCount(entry.target);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((c) => countObserver.observe(c));
  } else {
    counters.forEach((c) => (c.textContent = c.getAttribute("data-count") + "+"));
  }

  function animateCount(el) {
    const target = parseInt(el.getAttribute("data-count"), 10) || 0;
    const duration = 1400;
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = Math.round(eased * target) + (p === 1 ? "+" : "");
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Typing effect in hero ---------- */
  const typed = document.getElementById("typed");
  if (typed && !prefersReducedMotion) {
    const words = [
      "web experiences",
      "design systems",
      "responsive UIs",
      "delightful interfaces",
    ];
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;

    function tick() {
      const word = words[wordIdx];
      if (deleting) {
        charIdx--;
      } else {
        charIdx++;
      }
      typed.textContent = word.slice(0, charIdx);

      let delay = deleting ? 45 : 95;
      if (!deleting && charIdx === word.length) {
        delay = 1600;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        delay = 350;
      }
      setTimeout(tick, delay);
    }
    setTimeout(tick, 1200);
  }

  /* ---------- Contact form validation (front-end only) ---------- */
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");

  function setError(field, message) {
    const wrap = field.closest(".field");
    const err = wrap.querySelector(".field__error");
    wrap.classList.toggle("field--invalid", Boolean(message));
    if (err) err.textContent = message || "";
    return !message;
  }

  const thanks = document.getElementById("formThanks");
  const thanksName = document.getElementById("thanksName");
  const thanksReset = document.getElementById("thanksReset");

  function showThanks(firstName) {
    if (!thanks) return;
    if (thanksName) thanksName.textContent = firstName ? ", " + firstName : "";
    form.hidden = true;
    if (note) note.textContent = "";
    thanks.hidden = false;
  }

  if (thanksReset) {
    thanksReset.addEventListener("click", function () {
      if (thanks) thanks.hidden = true;
      if (form) form.hidden = false;
    });
  }

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const name = form.name;
      const email = form.email;
      const message = form.message;
      let ok = true;

      ok = setError(name, name.value.trim() ? "" : "Please enter your name.") && ok;
      ok =
        setError(
          email,
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
            ? ""
            : "Please enter a valid email."
        ) && ok;
      ok =
        setError(
          message,
          message.value.trim().length >= 10
            ? ""
            : "Message should be at least 10 characters."
        ) && ok;

      if (!ok) {
        if (note) {
          note.style.color = "var(--c-pink)";
          note.textContent = "Please fix the highlighted fields.";
        }
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      const endpoint = form.getAttribute("action") || "";
      const fallbackEmail = "aabhinav@protonmail.com";
      const keyField = form.querySelector('input[name="access_key"]');
      const accessKey = keyField ? keyField.value : "";

      function clearInvalid() {
        ["name", "email", "message"].forEach((id) => {
          const f = document.getElementById(id);
          if (f) f.closest(".field").classList.remove("field--invalid");
        });
      }

      // Access key not configured yet → demo fallback so the form still "works".
      if (!endpoint || !accessKey || accessKey.indexOf("YOUR_ACCESS_KEY") !== -1) {
        if (note) {
          note.style.color = "#16a35c";
          note.textContent = "Thanks! (Demo mode — add your Web3Forms access key to receive emails.)";
        }
        form.reset();
        clearInvalid();
        return;
      }

      // Real submission.
      const originalLabel = btn ? btn.textContent : "";
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
      if (note) { note.style.color = "var(--ink-soft)"; note.textContent = "Sending your message…"; }

      try {
        const res = await fetch(endpoint, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });

        let data = {};
        try { data = await res.json(); } catch (_) {}

        if (res.ok && data.success) {
          const enteredName = (name.value || "").trim().split(" ")[0];
          showThanks(enteredName);
          form.reset();
          clearInvalid();
          if (note) note.textContent = "";
        } else {
          const msg =
            data && data.message
              ? data.message
              : "Something went wrong. Please email me directly at " + fallbackEmail + ".";
          if (note) { note.style.color = "var(--c-pink)"; note.textContent = msg; }
        }
      } catch (err) {
        if (note) {
          note.style.color = "var(--c-pink)";
          note.textContent = "Network error. Please email me directly at " + fallbackEmail + ".";
        }
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = originalLabel; }
      }
    });

    // Clear an error as soon as the user fixes the field.
    form.querySelectorAll("input, textarea").forEach(function (el) {
      el.addEventListener("input", function () {
        const wrap = el.closest(".field");
        if (wrap.classList.contains("field--invalid")) {
          wrap.classList.remove("field--invalid");
          const err = wrap.querySelector(".field__error");
          if (err) err.textContent = "";
        }
      });
    });
  }

  /* ---------- Subtle parallax on hero orbs (pointer) ---------- */
  if (!prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
    const orbs = document.querySelectorAll(".orb");
    window.addEventListener(
      "pointermove",
      function (e) {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        orbs.forEach(function (orb, i) {
          const depth = (i + 1) * 8;
          orb.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
        });
      },
      { passive: true }
    );
  }
})();
