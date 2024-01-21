## Getting Started

This project consists of two pages 'Home Page' and 'Article Page'.

## Folder Structure

- `/components`: This directory contains all the React components used in the project. It's further divided into subdirectories like `home-page-components`, `article-components`, each containing related components.
- `/svgs`: SVG files are stored here for later reuse. by storing them in this way you can easily update their colours and sizes.
- `/lib/definitions.ts`: This file contains TypeScript type definitions and interfaces used throughout the project.
- `/lib/api.tsx`: Here the data is extracted from the api and frozen back as a component. << Not sure if this approach is right but I like it. >>
 
 ```bash
 npm install
 ``````

```bash
npm run dev
```