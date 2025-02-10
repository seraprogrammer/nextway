# 🚀 Micro Component System (619 bytes!)

A tiny yet powerful HTML component system that lets you build reusable UI pieces with pure HTML. No frameworks, no dependencies - just drop in and go! 

## ⚡️ Why This is Awesome

- **Microscopic:** Only 619 bytes minified! That's smaller than a single tweet 🤯
- **Pure HTML Magic:** Build components using native `<template>` tags
- **Zero Dependencies:** No React, Vue, or any other framework needed
- **Dark Mode Ready:** Sleek, modern UI with gradient goodness
- **Drop-Dead Simple:** Learn it in 30 seconds, use it forever

## 🎮 Quick Start

```html
<!-- 1. Add the tiny script -->
<script src="//unpkg.com/nextway"></script>

<!-- 2. Create your component -->
<template name="cool-button" props="text">
    <button class="gradient-btn">{text}</button>
</template>

<!-- 3. Use it anywhere! -->
<cool-button text="Click me!"></cool-button>
```

## 🎨 Killer Components

### Gradient Button
```html
<template name="neo-button" props="text">
    <button class="neo-gradient-btn">{text}</button>
</template>
```

### Glass Card
```html
<template name="glass-card" props="title, content">
    <div class="glass-effect">
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
</template>
```

## 🌈 Super-Slick Styling

```css
.neo-gradient-btn {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.glass-effect {
    background: linear-gradient(135deg, #3b82f680, #1e293b80);
    backdrop-filter: blur(12px);
    border-radius: 16px;
    padding: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## 🎯 How It Works

The magic happens in 4 tiny steps:
1. Finds `<template>` tags
2. Processes them into components
3. Replaces custom elements
4. Injects your props

## 💡 Pro Tips

- Use semantic component names like `<user-card>` instead of generic ones
- Keep components small and focused
- Leverage CSS variables for theming
- Chain components to build complex UIs

## 📦 Installation

Just add this one line. That's it. Really!
```html
<script src="//unpkg.com/nextway"></script>
```

## 🌟 MIT Licensed

Free and open source. Build something awesome!

---
Built with ⚡️ by Nazmul Hossain, for developers
