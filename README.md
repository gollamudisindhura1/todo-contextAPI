# Lab 3 – Todo Application using React Context API

## Overview

In this lab, I built a functional Todo application using React Context API instead of prop drilling or external state management libraries. The goal was to understand how global state can be shared across components in a clean and scalable way. The application uses multiple independent contexts to manage different concerns:
- Todos
- Visibility filters
- Theme (light/dark mode)

## Learning Objectives
### Through this lab, I practiced:
- Creating and using multiple React contexts
- Sharing state and functions globally using Context Providers
- Managing complex state using useState
- Consuming context values with useContext
- Implementing filtering logic across contexts
- Persisting state using localStorage

## Todo Context
The TodoContext manages the core todo data.
Each todo has:
1. id: unique identifier
2. text: todo description
3. completed: boolean status

Todos are added as active by default (completed: false).
A todo becomes completed when the user clicks on the todo text, which toggles the completed value.

## Filter Context
The FilterContext controls which todos are visible.
This is a TypeScript union type, which restricts the filter state to only valid values.
It prevents bugs by ensuring invalid filter values cannot be set.
Filter behavior:
1. all: shows all todos
2. active: shows todos where completed === false
3. completed: shows todos where completed === true

## Local Storage
1. Todos are saved to localStorage
2. Theme preference is also persisted
3. On page refresh, the app rehydrates state from localStorage

## Completed State
The completed property is essential because it enables:
1. Line-through styling for finished todos
2. Filtering logic (active vs completed)
3. Clearing completed todos
Users do not select active or completed when adding a todo.
Instead, todos are marked complete after the task is done.

## Challenges Faced
1. Understanding how completed works without explicit user input
2. Applying theme changes to the entire page instead of just a card
3. Organizing multiple contexts without confusion

## Conclusion
This lab helped me understand how React Context API can replace prop drilling and manage shared state cleanly. Using multiple contexts made the app easier to reason about, and combining Bootstrap with custom CSS allowed me to focus on functionality first and styling second.