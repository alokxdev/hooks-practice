# Hooks Practice

A small React playground to deeply understand how React Hooks work under the hood.

This repository contains hands-on experiments and custom hook implementations focused on mastering:

- useState
- useEffect
- Custom Hooks
- Cleanup logic
- Component mount/unmount behavior
- Async data fetching patterns

---

## 📂 Project Structure

### 🔹 ComponentLifecycle.jsx

Demonstrates:

- Mount → Unmount cycle
- useEffect execution timing
- Cleanup function behavior
- Dependency-triggered re-runs

The component toggles every 4 seconds to visually demonstrate lifecycle behavior.

---

### 🔹 useFetch.js

Custom hook that:

- Fetches data
- Handles loading state
- Handles error state
- Implements proper cleanup logic

Shows how to manage async side effects correctly in React.

---

### 🔹 useToggle.js

Reusable toggle hook abstraction.

Encapsulates boolean state logic in a clean, reusable pattern.

---

## 🎯 Purpose

This repo is part of my effort to deeply understand React Hooks by:

- Writing small focused experiments
- Observing lifecycle behavior through console logs
- Implementing hooks from scratch

The goal is not UI — but understanding React’s mental model.

---

## 🧠 Key Learnings

- Effects run after render
- Cleanup runs before re-run and on unmount
- Side effects should not run during render
- Async work requires careful cleanup
- Custom hooks improve reusability and clarity

---

## 🚀 How to Run

```bash
npm install
npm run dev
```
