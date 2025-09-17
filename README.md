# Basic-Utils

---

This library provides a set of common utility functions and helpers designed to simplify everyday development tasks.
It includes features ranging from array operations (e.g., summing numbers) to text formatting, number formatting, grouping data, and a flexible Logger for application logging.

## 🚀 Startup Instructions

Follow these steps to install dependencies, run the demo, and build the project:

```bash
# 1. Install dependencies
npm install

# 2. Run demo (executes examples from the library)
npm run demo

# 3. Build the library (output will be in the /dist folder)
npm run build
```

## 📌 Evolution of Versions

- **v0.0.0** — Project initialization
- **v0.1.0** — Added basic utilities (`add`, `capitalize`) using `any` for some reason.
- **v0.2.0** — Replaced `any` with strict types (`number`, `string`) to enforce type safety.
- **v0.3.0** — Introduced `formatNumber` with `NumberFormatOptions` and `.env` precision support.
- **v0.4.0** — Added `User` interface and generic `groupBy` function.
- **v0.5.0** — Implemented `Logger` class, environment validation via `zod`, and `.env` configuration. Deleted `User` interface and generic `groupBy` function for some reason.
- **v1.0.0** — Stabilized public API.
- **v2.0.0** — Breaking change: updated `add` signature to accept `number[]` instead of `(a, b)`.

## 📖 Usage Examples

### Import

```ts
import { add, capitalize, formatNumber, groupBy, Logger } from 'basic-utils';
```

### ➕ add

#### Old version (before **v2.0.0**)

```ts
// Add two numbers
console.log(add(2, 3));
// Output: 5
```

#### Current version (**v2.0.0** and later)

```ts
// Add an array of numbers
console.log(add([1, 2, 3, 4]));
// Output: 10
```

### 🔠 capitalize

```ts
console.log(capitalize('hello world'));
// Output: "Hello world"
```

### 🔢 formatNumber

```ts
console.log(formatNumber(123.456));
// Example Output: "123.46"
```

### 📂 groupBy (**Removed since v0.5.0**)

```ts
const users = [
  { id: 1, role: 'admin' },
  { id: 2, role: 'user' },
  { id: 3, role: 'admin' },
];

console.log(groupBy(users, 'role'));
/* Output:
{
  admin: [
    { id: 1, role: "admin" },
    { id: 3, role: "admin" }
  ],
  user: [
    { id: 2, role: "user" }
  ]
}
*/
```

### 📝 Logger

```ts
const logger = new Logger('App');

logger.info('Application started');
logger.warn('Low memory warning');
logger.error('Unhandled exception');

/*
Output:
[INFO] Application started
[WARN] Low memory warning
[ERROR] Unhandled exception
 */
```

## Supported Environment Variables

| Variable        | Type    | Default | Description                                                                                |
| --------------- | ------- | ------- | ------------------------------------------------------------------------------------------ |
| `APP_PRECISION` | integer | `2`     | Defines the number of decimal places for numeric operations. Must be between `0` and `10`. |
| `LOG_LEVEL`     | string  | `info`  | Sets the logging verbosity. Allowed values: `silent`, `info`, `debug`.                     |

## 📦 Releases & Versions

Check out our latest release for stable features:

- [v2.0.0](https://github.com/SN2006/SUITT-Year3-Software-Engineering-PZ2/tree/v2.0.0)
- [v1.0.0](https://github.com/SN2006/SUITT-Year3-Software-Engineering-PZ2/tree/v1.0.0)
- [v0.5.0](https://github.com/SN2006/SUITT-Year3-Software-Engineering-PZ2/tree/v0.5.0)
- [v0.4.0](https://github.com/SN2006/SUITT-Year3-Software-Engineering-PZ2/tree/v0.4.0)
- [v0.3.0](https://github.com/SN2006/SUITT-Year3-Software-Engineering-PZ2/tree/v0.3.0)
- [v0.2.0](https://github.com/SN2006/SUITT-Year3-Software-Engineering-PZ2/tree/v0.2.0)
- [v0.1.0](https://github.com/SN2006/SUITT-Year3-Software-Engineering-PZ2/tree/v0.1.0)

## 📄 Work Report

The detailed report of this project is available in a separate document.  
You can find it here:

- [Project Report](REPORT.md)

> ℹ️ This report includes explanations, screenshots, and all relevant details about the implementation and testing of the project.
