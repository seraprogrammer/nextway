/**
 * Component Class: A simple JavaScript component system.
 * This class allows defining and rendering reusable components
 * using HTML templates.
 */
class Component {
  // A Map to store defined components with their names as keys and templates as values
  static components = new Map();

  /**
   * Define a new component.
   * @param {string} name - The name of the component.
   * @param {string} template - The HTML template of the component.
   */
  static define(name, template) {
    this.components.set(name, template.trim()); // Store the template after trimming whitespace
  }

  /**
   * Render a component with provided properties.
   * @param {string} name - The name of the component to render.
   * @param {Object} props - The properties to replace in the template.
   * @returns {string} - The rendered HTML string with replaced values.
   */
  static render(name, props = {}) {
    let html = this.components.get(name) || ""; // Get the component template or an empty string if not found

    // Replace each property placeholder `{key}` with the actual value
    Object.entries(props).forEach(([k, v]) => {
      html = html.replace(new RegExp(`{${k}}`, "g"), v);
    });

    return html; // Return the processed HTML string
  }
}

/**
 * DOMContentLoaded Event:
 * This ensures that the script runs only after the document is fully loaded.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Find all <template> elements in the document
  Array.from(document.getElementsByTagName("template")).forEach((t) => {
    /**
     * Define a component based on the template:
     * - Extracts the component name from the `name` attribute.
     * - Stores the inner HTML as the component template.
     * - Removes the template tag from the DOM.
     */
    Component.define(t.getAttribute("name"), t.innerHTML);
    t.remove(); // Remove the <template> from the DOM after processing
  });

  /**
   * Replace all remaining component placeholders in the document body:
   * - Finds all empty custom elements (e.g., <my-component></my-component>).
   * - Extracts the tag name and checks if it is a registered component.
   * - Parses attributes into key-value properties.
   * - Calls `Component.render` to replace them with actual HTML.
   */
  document.body.innerHTML = document.body.innerHTML
    .replace(/<template[\s\S]*?<\/template>/g, "") // Ensure all <template> tags are removed
    .replace(/<([a-z-]+)([^>]*)><\/\1>/g, (m, name, attrs) => {
      if (!Component.components.has(name)) return m; // Skip if the component is not defined

      // Convert attributes to a key-value object
      const props = Object.fromEntries(
        (attrs.match(/(\w+)="([^"]+)"/g) || []).map((a) =>
          a.replace(/"/g, "").split("=")
        )
      );

      // Render and replace the component with actual HTML
      return Component.render(name, props);
    });
});
