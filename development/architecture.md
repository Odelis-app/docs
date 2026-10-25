---
title: Architecture
description: An overview of Odelis's application structure and technical approach.
---

# Architecture

Odelis is designed to be a focused, lightweight planning and organization tool. Its architecture prioritizes simplicity, maintainability, and a straightforward user experience.

## Technology stack

The main Odelis application currently uses:

- **HTML** for page structure.
- **CSS** for presentation and layout.
- **JavaScript** for application behavior.
- **Local storage** for keeping supported data in the user's browser.

The documentation website is a separate project built with [VitePress](https://vitepress.dev/).

## Application structure

The application separates its main responsibilities into a few broad areas:

- **Interface:** Displays the planner, tasks, notes, and library.
- **Application logic:** Handles interactions, organization, and updates to the interface.
- **Persistence:** Uses browser local storage to preserve supported information between visits.

This lightweight approach keeps the application accessible without requiring a server-side database for its current local-storage-based workflow.

## Data and persistence

The main application uses local storage for supported user data. Because this data is stored in the browser, it should not be assumed to synchronize automatically across browsers or devices.

Clearing browser data may remove locally stored information. Users should take care when clearing site data.

## Documentation architecture

The documentation website uses VitePress to turn Markdown files into a navigable website.

- `docs/index.md` contains the documentation home page.
- `docs/get-started/` contains introductory material.
- `docs/guides/` contains user guides.
- `docs/development/` contains technical and contributor documentation.
- `docs/.vitepress/config.mts` configures the site's title, navigation, sidebar, search, and footer.

## Design principles

Odelis aims to follow a few core principles:

- **Clarity:** Make features understandable without unnecessary complexity.
- **Focus:** Keep the experience centered on planning and organizing.
- **Maintainability:** Prefer code and documentation that are easy to understand and update.
- **Respect for user data:** Be clear about where information is stored and what that means.

## Future development

The architecture may evolve as Odelis grows. Any future changes to storage, synchronization, or application structure should be reflected in this document when they become part of the actual implementation.
