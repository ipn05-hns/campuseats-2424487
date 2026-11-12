# Reflection - Week 1

1. **Difference between imperative and declarative UI:**
Imperative UI (vanilla DOM) requires explicitly writing step-by-step DOM mutations (e.g. `document.createElement`, `appendChild`). Declarative UI (React) allows us to describe the intended UI state via JSX, letting React calculate and apply the mutations efficiently.

2. **Why must component names start with a capital letter?**
JSX treats lowercase tag names as standard built-in HTML tags (e.g. `<div>`). Capitalized tags signal to React that the tag is a custom component.

3. **What does `<>...</>` (Fragment) do?**
A fragment groups multiple adjacent elements without adding an extra node to the real DOM tree.

4. **Benefit of splitting UI into small components:**
Encapsulation, reusability, and modular testability.