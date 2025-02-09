# 🚀 HTML Component System

A lightweight and simple **HTML-based Component System** that allows you to define and reuse components using `<template>` tags directly inside your HTML. No frameworks or complex setups required!

## 🎯 Features

✅ **Pure HTML Components** - No need for JavaScript frameworks. Define components using `<template>` tags.  
✅ **Reusable & Dynamic** - Components support dynamic properties using `{placeholder}` syntax.  
✅ **Automatic Rendering** - Components are parsed and replaced seamlessly.  
✅ **Minimal & Fast** - Works without dependencies, making it lightweight and efficient.  
✅ **Dark Theme Ready** - Styled with modern UI aesthetics in mind.  

---

## 🚀 Getting Started

### 1️⃣ Include the Component System
Include the script file in your project:

```html
<script src="//unpkg.com/nextway"></script>
```

### 2️⃣ Define Components using `<template>`
Create reusable components using the `<template>` tag. Give each component a `name` and use `{}` placeholders for dynamic values.

```html
<template name="mybutton" props="text">
    <button class="custom-button">{text}</button>
</template>
```

### 3️⃣ Use Components in Your HTML
Simply add a custom tag with the component name and provide attributes as properties.

```html
<mybutton text="Click Me!"></mybutton>
```

---

## 🎨 Example Components

### 🔹 Button Component
```html
<template name="mybutton" props="text">
    <button class="custom-button">{text}</button>
</template>

<mybutton text="Click Me!"></mybutton>
```

### 🔹 Card Component
```html
<template name="mycard" props="title, content">
    <div class="custom-card">
        <h2 class="card-title">{title}</h2>
        <p class="card-content">{content}</p>
    </div>
</template>

<mycard title="Awesome Card" content="This is a stylish card component."></mycard>
```

### 🔹 Badge Component
```html
<template name="badge" props="text">
    <span class="badge">{text}</span>
</template>

<p>Status: <badge text="Active"></badge></p>
```

---

## ⚙️ How It Works

1️⃣ **Finds all `<template>` tags** in the document and stores them.  
2️⃣ **Removes `<template>` tags from the DOM** after processing.  
3️⃣ **Replaces custom elements (`<mycomponent>`)** with their actual HTML content.  
4️⃣ **Replaces `{placeholder}` values** inside components with provided attributes.

---

## 🎨 Styling (Dark Mode Ready)

```css
.custom-button {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    color: white;
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: transform 0.2s, background 0.3s;
}
.custom-card {
    background: linear-gradient(135deg, #3b82f6, #1e293b);
    color: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
}
.badge {
    display: inline-block;
    padding: 5px 12px;
    font-size: 0.9rem;
    font-weight: bold;
    color: white;
    background: #ef4444;
    border-radius: 12px;
}
```

---

## 🎯 Why Use This?

🚀 **Framework-Free:** No need for React, Vue, or Angular. Works with plain HTML & JavaScript.  
🛠 **Customizable:** Modify the styling or extend the system easily.  
💡 **Beginner-Friendly:** Simple to use and understand.  
⚡ **Fast & Lightweight:** No dependencies, just a few lines of JavaScript.  

---

## 📜 License

This project is open-source and available under the MIT License.

---

Enjoy coding! 🚀

