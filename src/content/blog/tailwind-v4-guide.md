---
title: "Getting Started with Tailwind CSS v4"
description: "A quick overview of what's new in Tailwind CSS v4 and how to use it with Astro."
pubDate: 2026-05-03
tags: ["css", "tailwind", "astro"]
category: "tech"
draft: false
---

## What's New in v4

Tailwind CSS v4 is a complete rewrite with significant improvements:

### CSS-first Configuration

Instead of `tailwind.config.js`, you now configure everything in CSS:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

### Better Performance

The new engine is faster and produces smaller bundles out of the box.

### Vite Integration

With `@tailwindcss/vite`, there's no need for PostCSS or a separate CLI — it just works with Vite-based frameworks like Astro.
