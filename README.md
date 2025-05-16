# 🌀 Callback  Flow in JavaScript

This repository demonstrates how to manage asynchronous operations using **callback functions** in JavaScript. The code simulates a simplified real-world scenario involving three core steps:

1. **Downloading data** from a URL
2. **Writing the data** to a file
3. **Uploading the file** to another URL

Each operation is implemented using callback-based syntax and uses `setTimeout()` to mimic asynchronous behavior.

---

## 📁 Files Overview

### `Downloading.js`
> Simulates downloading data from a given URL.

- Logs the start and completion of the download.
- Returns the downloaded data using a callback function.

---

### `Writing.js`
> Simulates writing the downloaded data to a file.

- Logs the writing process to a file.
- Returns the filename via a callback once writing is "complete".

---

### `Uploading.js`
> Simulates uploading the written file to a specified upload URL.

- Logs the start and end of the upload operation.
- Returns an upload success message using a callback.

---

### `Chaining.js`
> Chains all three functions using nested callbacks to demonstrate a complete asynchronous data flow.

- Step 1: Downloads data from a given URL.
- Step 2: Writes the downloaded data into a file.
- Step 3: Uploads the file to a new server.
- All steps are executed in sequence using callbacks only.

---

## ✅ Objective

This code serves as a learning foundation for understanding **callback-based asynchronous programming** in JavaScript. It also demonstrates the challenge of **"callback hell"**, motivating the transition to more maintainable patterns like **Promises** and **async/await** in later tasks.

---

## 🗂️ Project Structure

```plaintext
callbacks-async-flow/
│
├── Downloading.js
├── Writing.js
├── Uploading.js
├── Chaining.js
└── README.md
