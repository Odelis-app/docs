---
title: Architecture
description: An overview of Odelis's current application structure, technologies, and data storage.
---

# Architecture

This page describes how Odelis is structured today, how its main parts work together, and which responsibilities belong to each part of the application.

Odelis currently uses a lightweight browser-based architecture built with HTML, CSS, and JavaScript. The project is intentionally straightforward: the interface, application behavior, and local data storage are kept understandable while the core experience develops.

## At a glance

| Area | Current implementation |
|---|---|
| Structure | HTML |
| Styling | CSS |
| Application logic | Vanilla JavaScript |
| Data storage | Browser `localStorage` |
| Data exchange | JSON import and export |
| Backend | No application backend currently |
| Authentication | Not currently implemented |

The current application does not require a server-side database or account system to use its core features. Data is stored locally in the browser.

## Application structure

The main application is organized around three primary files.

### `index.html`

Defines the application's structure and content.

It contains the main workspace layout, navigation, task interface, weekly planner, Notes & Library interface, and Learning placeholder.

The application uses page sections that are shown or hidden as the user navigates between workspace areas.

### `style.css`

Defines the visual system and responsive layout.

It contains shared design variables, typography, colors, component styles, and responsive rules for smaller screens.

The visual direction uses forest green, warm ivory, restrained typography, and generous spacing.

### `script.js`

Controls the application's behavior.

It handles navigation, task management, scheduling, notes, filtering, and local data persistence. It also manages importing and exporting backups.

These files work together to form the current application without requiring a separate frontend framework.

## Main application areas

### Overview

The Overview is the main workspace dashboard.

It brings together task statistics, task management, upcoming deadlines, and shortcuts to other areas of the application.

### Planner

The Planner provides a weekly calendar and a compact agenda.

Users can create, edit, and delete time blocks. Each block includes a title, date, start time, end time, and category.

Schedule entries are stored separately from tasks and notes.

### Notes & Library

Notes & Library provides a place to capture and organize information.

Users can create, edit, pin, search, filter, and delete notes. Notes include a title, body, collection, and last-updated timestamp.

### Learning

Learning is currently a placeholder for future development.

The interface identifies the intended direction for learning tools, but features such as flashcards and review sessions are not yet implemented.

## Data storage

Odelis currently uses the browser's `localStorage` API.

This means information is saved in the browser on the device where it was created. It is not automatically synchronized across browsers or devices.

The application keeps different types of information in separate storage entries.

| Data | Storage key |
|---|---|
| Tasks | `odelis-tasks-v1` |
| Task categories | `odelis-task-categories-v1` |
| Weekly schedule | `odelis-schedule-v1` |
| Notes | `odelis-notes-v1` |

The task system also recognizes a legacy storage key, `studyos-tasks-v1`, to support migration from the earlier project name.

### Data backups

The application supports JSON import and export for tasks and notes.

These backups allow users to keep a separate copy of their information or move data manually. They do not provide automatic cloud synchronization.

Users should keep their own backups because browser data can be cleared or become unavailable.

## Application behavior

The application follows a simple interaction flow:

1. The browser loads the HTML structure and stylesheet.
2. The JavaScript file initializes the application.
3. The application reads available data from browser storage.
4. The interface renders the current tasks, schedule, and notes.
5. User actions update the relevant data.
6. Successful changes are saved back to browser storage.
7. The interface updates to reflect those changes.

Task data, schedule data, and notes are handled independently so that changes to one area do not require replacing the data in another.

## Current limitations

The current architecture is suitable for an early browser-based application, but it has some limitations.

- **Device-specific data:** Information is stored in the current browser, not in a shared account.
- **No automatic synchronization:** Changes do not automatically appear on another device.
- **No account system:** Users do not currently sign in or manage cloud profiles.
- **Single-file application logic:** Much of the JavaScript behavior currently lives in `script.js`.
- **Learning is unfinished:** The Learning area is currently a placeholder.

These are characteristics of the current implementation, not promises about future functionality.

## Future direction

Odelis may eventually introduce a more modular application structure, persistent accounts, and cross-device data synchronization.

The project README also describes a possible move toward a component-based stack when it provides clear value.

These are future directions rather than features of the current application. Architectural changes should preserve working functionality and keep the experience understandable.

## Related resources

- [Main Odelis repository](https://github.com/Odelis-app/odelis)
- [Getting Started](../get-started/)
- [Contributing](./contributing)
