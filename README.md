# Majestic Meal

Majestic Meal is a catering website for corporate and private events in Chicago. It presents the brand, services, and portfolio on a single homepage.

The site is built with Next.js, React, TypeScript, and Tailwind CSS. Storybook covers the shared UI pieces.

## Requirements

- Node.js 18 or later
- npm

## Installation

From the project directory, install dependencies:

```bash
npm install
```

## Scripts

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Lint the project:

```bash
npm run lint
```

Start Storybook:

```bash
npm run storybook
```

Storybook runs at [http://localhost:6006](http://localhost:6006).

Build the production app:

```bash
npm run build
```

Serve the production build:

```bash
npm start
```

## Docker

The included `Dockerfile` builds and serves the production app.

```bash
docker build -t majestic-meal .
docker run -p 3000:3000 majestic-meal
```

The site is then available at [http://localhost:3000](http://localhost:3000).

## Tech stack

- **Next.js** renders the homepage and page metadata.
- **React** supplies the component structure for the navbar, hero, services, portfolio, and contact footer.
- **TypeScript** types the components, menus, and portfolio data.
- **Tailwind CSS** styles the layout.
- **Storybook** previews the navbar, menu, catering, and portfolio components.
