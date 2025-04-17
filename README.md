# Solar Explorer

An interactive Solar System explorer with CSS animations built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates how to create complex CSS animations and 3D effects while maintaining a modern React component architecture.

## Features

- Interactive 3D Solar System explorer
- CSS-based animations and transitions (no JavaScript animation libraries)
- Responsive design
- Planet selection with detailed information
- Planetary moons with orbital paths
- Modern React patterns using hooks and TypeScript

## Tech Stack

- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS
- CSS Modules with SCSS
- CSS Animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/solar-explorer.git
cd solar-explorer
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
solar-explorer/
├── public/              # Static assets
├── src/                 # Source code
│   ├── app/             # Next.js App Router files
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout component
│   │   └── page.tsx     # Main page component
│   └── components/      # React components
│       └── SolarExplorer/  # Solar Explorer components
│           ├── index.tsx               # Main component
│           ├── SolarExplorer.module.scss # Component styles
│           ├── PlanetMenu.tsx          # Planet navigation menu
│           ├── SolarSystem.tsx         # 3D planet visualization
│           └── InfoPanel.tsx           # Planet information panel
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Implementation Decisions

### CSS Animations vs JavaScript Libraries

This project intentionally uses pure CSS for all animations rather than JavaScript animation libraries to:

1. Demonstrate the power of modern CSS
2. Leverage browser optimizations for CSS animations
3. Reduce JavaScript bundle size
4. Maintain the original Codepen's approach of "in only CSS"

### Component Architecture

The project is structured using a component-based architecture:

- **SolarExplorer**: Main container component that manages state
- **PlanetMenu**: Left sidebar for planet selection
- **SolarSystem**: 3D visualization of planets with CSS transforms
- **InfoPanel**: Slide-in panel for detailed planet information

### State Management

State is managed using React hooks at the component level:

- `selectedPlanet`: Tracks which planet is currently active
- `openPanel`: Tracks when a detailed information panel is open and which planet it's showing

### TypeScript Integration

TypeScript is used throughout the project for type safety:

- Custom types like `PlanetType` ensure consistency across components
- Interface definitions for component props
- Type definitions for planet data objects

### CSS Techniques Used

Several advanced CSS techniques are employed:

1. CSS Transforms with preserve-3d for 3D positioning
2. CSS Transitions for smooth animations
3. CSS Animation keyframes for continuous planet rotation
4. CSS Modules with SCSS for component-specific styling
5. Tailwind CSS for layout and utility classes

## Customizing Content

### Adding or Modifying Planets

To add or modify planets, edit the planet data in the following files:

1. `src/components/SolarExplorer/PlanetMenu.tsx` - Update the `planetData` object
2. `src/components/SolarExplorer/SolarSystem.tsx` - Update the `planetData` object
3. `src/components/SolarExplorer/InfoPanel.tsx` - Update the `planetInfo` object

Each planet requires:
- Name, distance, and color
- Background image URL
- Description text
- Detailed information for the InfoPanel
- Optional moons with positioning data

### Modifying Styles

Global styles are defined in `src/app/globals.css` and component-specific styles in `src/components/SolarExplorer/SolarExplorer.module.scss`.

Planet colors are defined in the `tailwind.config.js` file as custom colors.

## Performance Considerations

- CSS variables are used for theming and consistent colors
- CSS transforms leverage hardware acceleration
- Images should be optimized for web (considering adding next/image in future improvements)
- Component memoization could be added for complex components if needed

## Acknowledgments

- Original concept by [jcoulterdesign on CodePen](https://codepen.io/jcoulterdesign/pen/ZxXbeP)
- Planet textures from various sources including NASA and DeviantArt