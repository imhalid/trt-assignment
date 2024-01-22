## Getting Started

This project consists of two pages `Home Page` and `Article Page`.
- [Home Page](https://trt-assignment.vercel.app) 
- [Article Page](https://trt-assignment.vercel.app/article)

## What I can't do

- `Pagination`: I tried to make the pagination on the home page but I was not successful. I did not know what I needed to do to make the pagination compatible with seo. Edit: I also forgot to add, I encountered a problem like this while using the pagination feature in json-server. https://github.com/typicode/json-server/issues/1493#issue-2092177702 
- `filterin` and `testing`: I have no idea where I need to do the filtering and sorting functions. I didn't see any design for this in the figma file either. I couldn't write a test because I couldn't do these. 
- `css`: css files can be confusing, I don't like using modules too much, but it's easier to read this way. and it's the first time I've written pure css in about 2 years. I may have a slightly bad approach to layout and naming.

## Folder Structure

- `/components`: This directory contains all the React components used in the project. It's further divided into subdirectories like `home-page-components`, `article-components`, each containing related components.
- `/svgs`: SVG files are stored here for later reuse. by storing them in this way you can easily update their colours and sizes.
- `/lib/definitions.ts`: This file contains TypeScript type definitions and interfaces used throughout the project.
- `/lib/api.tsx`: Here the data is extracted from the api and frozen back as a component. << I'm not sure if it's right to render the component in this way >>
 
## Run Project
 ```bash
 npm install
 ``````

```bash
npm run dev
```

