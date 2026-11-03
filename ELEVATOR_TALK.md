# Playwright in the Wild: End-to-End Testing on a Real App

## Abstract

Most Playwright tutorials test a counter or a todo list, and none of it transfers to your codebase. This workshop tests confac, a real invoicing application with authentication, file uploads and downloads, e-mailing and a database that fights back. After a short introduction to Playwright (browsers, languages, auto-waiting, the test runner), attendees write tests themselves: web-first locators, annotations, tracing, screenshots and video for debugging, and a Page Object Model that survives the second feature. Exercises cover consultants, invoices, projects, contracts and monthly project data. The repository ships C#, TypeScript and Java implementations plus the system under test.

## Elevator pitch

No todo-list demos: write Playwright tests against a real invoicing app with auth, uploads and a database, using locators, tracing and a Page Object Model that scales.

## Outline

- Playwright? Browsers, languages, test runner, auto-wait, tracing
- Setup: start confac (system under test), dependencies
- Annotations, tracing, screenshots, videos
- Exercises: consultants filters, invoices (create, email, download, edit, comments), projects, contracts, project months
- Patterns: locators (`getByRole`, `getByTestId`), Page Object Model, fixtures, auth setup, seeding
