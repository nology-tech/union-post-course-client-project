## Quickstart

1. Install the dependencies with `npm install`
2. Run the application with `npm run dev`

## File Structure 🗂️

- Components contains all generic components that are shared across pages. They should be generic and reusable, and testable in isolation.

- Pages contains our different application views. Generally any requests should be activated here so that any children components don't have to, e.g. If we have a 'User Details' view, we should dispatch our network requests for user information from here.

- Styles consists global style files that should be made available across our application.

## Testing ⚗️

- This project utilizes Vitest with React Testing Library (RTL).

- All component folders will have an associated test file within the same folder. Each component is tested independently (unit testing) to ensure they work in isolation and aren't affected by external factors(such as other components).

- Any test that would use the 'render' function from RTL, use the 'customRender' function from testUtils.js. This adds routing by default so we can easily test components that include route/link logic.
  - A example can be seen in `src/pages/Home`

## Code Quality 🌟

- This project uses prettier and ESlint to increase code readability and consistency.

## Styles

### Typography

Implemented a flexible and responsive typography system using SCSS. The typography styles are defined in the `_typography.scss` file. Here's an overview:

- Font Family: We use the `$modern-content` font for general content, providing a modern and clean look.
- Font Size: We use `rem` units for font size, making it relative to the `:root` element in the DOM.
- Heading and Paragraph Styles: We've defined styles for h1 to h4 and paragraphs, ensuring consistent spacing and display properties.
- Button Style: Buttons have a defined font size and weight for a cohesive design.

### Variables

The project's color palette and breakpoints are defined in the `_variables.scss` file. Here's a quick overview:

#### Breakpoints

- Mobile: 320px
- Tablet: 768px
- Desktop: 1024px
- Large Desktop: 1440px
- Extra Large Desktop: 2560px

#### Colors

We've defined a set of named colors for easy reference throughout the project. For example:

- `$color-dark-blue`: <span style="background-color:#2d3748; color:black">#2d3748</span>
- `$color-blue`: <span style="background-color:#5a84d3; color:black">#5a84d3</span>
- `$color-gray-blue`: <span style="background-color:#95accb; color:black">#95accb</span>
- `$color-light-blue`: <span style="background-color:#8aaae5; color:black">#8aaae5</span>
- `$color-purple`: <span style="background-color:#d6d5de; color:black">#d6d5de</span>
- `$color-beige`: <span style="background-color:#e5c58a; color:black">#e5c58a</span>
- `$color-white`: <span style="background-color:#ffffff; color:black">#ffffff</span>
- `$color-off-white`: <span style="background-color:#f8f8ff; color:black">#f8f8ff</span>
- `$color-red`: <span style="background-color:#ee6161; color:black">#ee6161</span>

#### Text and Background

- `$text-color`: Default text color for elements with dark text.
- `$text-color-white`: Text color for elements with white text.
- `$background-color-white`: Background color for elements with a white background.
- `$background-color-light-blue`: Background color for elements with a light blue background.
- `$background-color-dark-blue`: Background color for elements with a dark blue background.

#### Fonts

We provide two font styles, modern and classic, each with specific font families. You can choose between them based on the design aesthetic you prefer.

- Modern Fonts:

  - Header: "Poppins"
  - Content: "PT Sans"

- Classic Fonts:
  - Header: "Playfair Display"
  - Content: "Lato"
