# Dynamic Interface Interactions Practice

Learning exercise ([via The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-dynamic-user-interface-interactions)) for building interactive UI components with vanilla JavaScript.

## Features

**Carousel**
- Auto-scroll (3s intervals with debounced pause/resume)
- Navigation buttons and clickable dots
- Reactive state management with observer pattern

**Dropdown**
- Toggle on click, close on outside click

## Structure

```
src/
├── carousel/
│   ├── carousel-autoscroll.js      # Auto-advance logic
│   ├── carousel-navigation.js      # Controls & DOM updates
│   ├── carousel-scroll-state.js    # State management
│   └── carousel.css
├── dropdown/
│   ├── dropdown.js
│   └── dropdown.css
└── index.js
```

## Development

```bash
npm install
npm run server    # Development server
npm run build     # Production build
npm run lint      # Code linting
```

## Tech Stack

- Vanilla JavaScript (ES6 modules)
- Webpack build system
- ESLint (Airbnb config) + Prettier
- Observer pattern for state management

## Key Concepts

- Modular architecture
- Reactive programming patterns
- Event-driven UI updates
- Modern JavaScript practices

## License

MIT