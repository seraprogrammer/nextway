# Component Class: A Simple JavaScript Component System

## Overview
The **Component Class** provides a lightweight and reusable JavaScript component system. It enables defining and rendering components using HTML templates with placeholders for properties.

## Features
- Define reusable components using `<template>` elements.
- Render components dynamically with property replacement.
- Automatically process and replace custom elements in the document.
- Supports a clean and modular approach to UI design.

## Installation
Simply include the `core.js` file in your project:
```html
<script src="./core/core.js"></script>
```

## Usage

### Defining Components
Components are defined using `<template>` elements. The `name` attribute specifies the component name, and placeholders `{property}` are used for dynamic content replacement.
```html
<template name="mybutton" props="text">
    <button class="custom-button">{text}</button>
</template>
```

### Using Components
To use a component, add a custom element matching the component name and provide attributes for properties.
```html
<mybutton text="Click Me!"></mybutton>
```

### Example Components
#### Card Component
```html
<template name="mycard" props="title, content">
    <div class="custom-card">
        <h2 class="card-title">{title}</h2>
        <p class="card-content">{content}</p>
    </div>
</template>
```
Usage:
```html
<mycard title="Awesome Card" content="This is a stylish card component."></mycard>
```

#### Badge Component
```html
<template name="badge" props="text">
    <span class="badge">{text}</span>
</template>
```
Usage:
```html
<p>Status: <badge text="Active"></badge></p>
```

#### Avatar Component
```html
<template name="avatar" props="src, name">
    <div class="avatar-container">
        <img class="avatar" src="{src}" alt="{name}">
        <p class="avatar-name">{name}</p>
    </div>
</template>
```
Usage:
```html
<avatar src="https://i.pravatar.cc/80" name="John Doe"></avatar>
```

## How It Works
1. The script scans for `<template>` elements and registers them as components.
2. It removes the `<template>` elements from the DOM after processing.
3. It searches for empty custom elements and replaces them with the rendered HTML.
4. Property placeholders `{key}` are dynamically replaced with the provided values.

## Custom Styling
You can style the components using CSS. Here’s an example for a button:
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
.custom-button:hover {
    background: linear-gradient(135deg, #6366f1, #a855f7);
    transform: scale(1.05);
}
```

## Contributions
Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the MIT License.

---
Enjoy building your own reusable component system! 🚀

