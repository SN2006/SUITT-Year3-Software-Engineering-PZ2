# Звіт виконаного завдання

## Ініціалізація проєкту

1. Клонування репозиторію:

```bash
git clone https://github.com/SN2006/SUITT-Year3-Software-Engineering-PZ2.git
```

2. Ініціалізуйте npm-проєкт:

```bash
npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (suitt-year3-software-engineering-pz2) basic-utils
version: (1.0.0) 0.0.0
description: The library that provides useful functions
entry point: (index.js)
test command:
git repository:
keywords:
author: Viacheslav Niedieliev
license: (ISC)
About to write to D:\study\course3\software_engeneering\SUITT-Year3-Software-Engineering-PZ2\package.json:

{
  "name": "basic-utils",
  "version": "0.0.0",
  "description": "The library that provides useful functions",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Viacheslav Niedieliev",
  "license": "ISC"
}


Is this OK? (yes)
```

3. Створіть файл .gitignore з таким вмістом:

```bash
.idea/
node_modules/
dist/
.env
```

4. Встановіть залежності:

```bash
npm i dotenv zod

added 2 packages, and audited 3 packages in 12s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```bash
npm i -D typescript tsup eslint prettier husky commitlint @commitlint/config-conventional @types/node tsx @eslint/js typescript-eslint eslint-config-prettier
npm WARN deprecated source-map@0.8.0-beta.0: The work that was done in this beta branch won't be included in future versions

added 296 packages, and audited 299 packages in 14s

78 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

5. Ініціалізація TypeScript:

```bash
npx tsc --init

Created a new tsconfig.json
                                                                                                                     TS
You can learn more at https://aka.ms/tsconfig
```

6. Створення eslint.config.cjs:

```js
const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-config-prettier');

module.exports = [
  { ignores: ['**/*.cjs'] }, // ігноруємо конфігураційні файли у CJS
  js.configs.recommended, // базові правила JS
  ...tseslint.configs.recommended, // базові правила TS
  prettier, // відключення конфліктів з Prettier
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-unused-vars': 'warn',
    },
  },
];
```

7. Створення .prettierrc.cjs:

```js
module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
};
```

8. Додавання у package.json розділ scripts

```json
{
  "scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts",
    "lint": "eslint . --ext .ts",
    "lint:fix": "eslint . --ext .ts --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "typecheck": "tsc --noEmit",
    "demo": "tsx src/demo.ts"
  }
}
```

10. Створення commitlint.config.cjs:

```js
module.exports = { extends: ['@commitlint/config-conventional'] };
```

11. Налаштування Husky та додавання git-хуків

```bash
npx husky init
```

Створилася папка:

![](images/img1.png)

Створення .husky/pre-commit:

```bash
echo "npm run lint && npm run format:check && npm run typecheck" > .husky/pre-commit
chmod +x .husky/pre-commit
```

Створення .husky/commit-msg:

```bash
echo "npx --no-install commitlint --edit \$1" > .husky/commit-msg
chmod +x .husky/commit-msg
```

11. Створення папки src та файлу src/index.ts:

```bash
mkdir src
echo "" > src/index.ts
```

12. Робимо перевірки:

```bash
npm run typecheck

> basic-utils@0.0.0 typecheck
> tsc --noEmit

npm run lint

> basic-utils@0.0.0 lint
> eslint . --ext .ts

npm run format:check

> basic-utils@0.0.0 format:check
> prettier --check .

Checking formatting...
[warn] .prettierrc.cjs
[warn] commitlint.config.cjs
[warn] eslint.config.cjs
[warn] README.md
[warn] REPORT.md
[warn] src/index.ts
[warn] tsconfig.json
[warn] Code style issues found in 7 files. Run Prettier with --write to fix.

npm run lint:fix && npm run format

> basic-utils@0.0.0 lint:fix
> eslint . --ext .ts --fix


> basic-utils@0.0.0 format
> prettier --write .

.prettierrc.cjs 41ms
commitlint.config.cjs 3ms
eslint.config.cjs 13ms
package-lock.json 71ms (unchanged)
package.json 10ms (unchanged)
README.md 23ms
REPORT.md 36ms
src/index.ts 28ms
tsconfig.json 12ms
```

13. Коміт:

```bash
git add .
warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of '.husky/commit-msg', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of '.husky/pre-commit', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of '.prettierrc.cjs', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'REPORT.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'commitlint.config.cjs', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'eslint.config.cjs', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tsconfig.json', LF will be replaced by CRLF the next time Git touches it

git commit -m "chore: project scaffolding (npm, tsconfig, eslint, prettier, husky, commitlint, scripts)"

> basic-utils@0.0.0 lint
> eslint . --ext .ts


> basic-utils@0.0.0 format:check
> prettier --check .

Checking formatting...
[warn] REPORT.md
[warn] Code style issues found in the above file. Run Prettier with --write to fix.
husky - pre-commit script failed (code 1)
```

Додаємо REPORT.md файл до eslint.config.cjs:

```json
{
  "ignores": ["**/*.cjs", "**/*.md"]
}
```

```bash
git add .
warning: in the working copy of 'REPORT.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'eslint.config.cjs', LF will be replaced by CRLF the next time Git touches it

git commit -m "chore: project scaffolding (npm, tsconfig, eslint, prettier, husky, commitlint, scripts)"

> basic-utils@0.0.0 lint
> eslint . --ext .ts


> basic-utils@0.0.0 format:check
> prettier --check .

Checking formatting...
All matched files use Prettier code style!

> basic-utils@0.0.0 typecheck
> tsc --noEmit

[main dc27df3] chore: project scaffolding (npm, tsconfig, eslint, prettier, husky, commitlint, scripts)
 13 files changed, 4745 insertions(+), 1 deletion(-)
 create mode 100644 .gitignore
 create mode 100644 .husky/commit-msg
 create mode 100644 .husky/pre-commit
 create mode 100644 .prettierrc.cjs
 create mode 100644 REPORT.md
 create mode 100644 commitlint.config.cjs
 create mode 100644 eslint.config.cjs
 create mode 100644 images/img1.png
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 src/index.ts
 create mode 100644 tsconfig.json
```

---

## Версія 0.1.0 — прості функції з any

1. Оновлюємо src/index.ts

```ts
import * as dotenv from 'dotenv';
dotenv.config();

export function add(a: any, b: any) {
  return a + b;
}

export function capitalize(s: any) {
  return String(s).charAt(0).toUpperCase() + String(s).slice(1);
}
```

2. Оновлюємо src/demo.ts

```ts
import { add, capitalize } from './index.js';

console.log('sum(any):', add(2, 3));

const unused = 42;

console.log('capitalize(any):', capitalize('hello'));
```

3. Запуск перевірок

```bash
npm run typecheck

> basic-utils@0.0.0 typecheck
> tsc --noEmit

npm run lint

D:\study\course3\software_engeneering\SUITT-Year3-Software-Engineering-PZ2\src\demo.ts
  5:7  warning  'unused' is assigned a value but never used  no-unused-vars
  5:7  error    'unused' is assigned a value but never used  @typescript-eslint/no-unused-vars

D:\study\course3\software_engeneering\SUITT-Year3-Software-Engineering-PZ2\src\index.ts
  4:24  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  4:32  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  8:31  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

✖ 5 problems (1 error, 4 warnings)

npm run format:check

> basic-utils@0.0.0 format:check
> prettier --check .

Checking formatting...
[warn] REPORT.md
[warn] src/demo.ts
[warn] src/index.ts
[warn] Code style issues found in 3 files. Run Prettier with --write to fix.
```

4. Оновлюємо src/demo.ts

```ts
import { add, capitalize } from './index.js';

console.log('sum(any):', add(2, 3));

console.log('capitalize(any):', capitalize('hello'));
```

5. Запуск перевірок

```bash
npm run typecheck

> basic-utils@0.0.0 typecheck
> tsc --noEmit

npm run lint

> basic-utils@0.0.0 lint
> eslint . --ext .ts


D:\study\course3\software_engeneering\SUITT-Year3-Software-Engineering-PZ2\src\index.ts
  4:24  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  4:32  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  8:31  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

✖ 3 problems (0 errors, 3 warnings)

npm run format:check

> basic-utils@0.0.0 format:check
> prettier --check .

Checking formatting...
[warn] REPORT.md
[warn] src/demo.ts
[warn] src/index.ts
[warn] Code style issues found in 3 files. Run Prettier with --write to fix.

npm run lint:fix && npm run format

> basic-utils@0.0.0 lint:fix
> eslint . --ext .ts --fix


D:\study\course3\software_engeneering\SUITT-Year3-Software-Engineering-PZ2\src\index.ts
  4:24  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  4:32  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  8:31  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

✖ 3 problems (0 errors, 3 warnings)


> basic-utils@0.0.0 format
> prettier --write .

.prettierrc.cjs 43ms (unchanged)
commitlint.config.cjs 3ms (unchanged)
eslint.config.cjs 13ms (unchanged)
package-lock.json 70ms (unchanged)
package.json 11ms (unchanged)
README.md 23ms (unchanged)
REPORT.md 95ms
src/demo.ts 13ms
src/index.ts 4ms
tsconfig.json 4ms (unchanged)
```

6. Коміт

```bash
git add .
git commit -m "feat: basic utils with any (add, capitalize)"
npm version minor
git push --follow-tags
```

---

## Версія 0.2.0 — ті ж функції, але з базовими типами

1. Оновлюємо src/index.ts

```ts
import * as dotenv from 'dotenv';
dotenv.config();

export function add(a: number, b: number): number {
  return a + b;
}

export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
```

2. Оновлюємо src/demo.ts

```ts
import { add, capitalize } from './index.js';

console.log('sum(typed):', add('2', 3));

console.log('capitalize(typed):', capitalize(123));
```

3. Виконання перевірок

```bash
npm run typecheck

> basic-utils@0.1.0 typecheck
> tsc --noEmit

src/demo.ts:3:32 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

3 console.log('sum(typed):', add('2', 3));
                                 ~~~

src/demo.ts:5:46 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

5 console.log('capitalize(typed):', capitalize(123));
                                               ~~~


Found 2 errors in the same file, starting at: src/demo.ts:3

npm run lint

> basic-utils@0.1.0 lint
> eslint . --ext .ts

npm run format:check

> basic-utils@0.1.0 format:check
> prettier --check .

Checking formatting...
[warn] REPORT.md
[warn] src/demo.ts
[warn] src/index.ts
[warn] Code style issues found in 3 files. Run Prettier with --write to fix.
```

4. Оновлюємо src/demo.ts

```ts
import { add, capitalize } from './index.js';

console.log('sum(typed):', add(2, 3));
console.log('capitalize(typed):', capitalize('hello'));
```

5. Виконання перевірок

```bash
npm run typecheck

> basic-utils@0.1.0 typecheck
> tsc --noEmit

npm run lint

> basic-utils@0.1.0 lint
> eslint . --ext .ts

npm run format:check

> basic-utils@0.1.0 format:check
> prettier --check .

Checking formatting...
[warn] REPORT.md
[warn] src/demo.ts
[warn] src/index.ts
[warn] Code style issues found in 3 files. Run Prettier with --write to fix.

npm run lint:fix && npm run format

> basic-utils@0.1.0 lint:fix
> eslint . --ext .ts --fix


> basic-utils@0.1.0 format
> prettier --write .

.prettierrc.cjs 42ms (unchanged)
commitlint.config.cjs 3ms (unchanged)
eslint.config.cjs 14ms (unchanged)
package-lock.json 74ms (unchanged)
package.json 11ms (unchanged)
README.md 24ms (unchanged)
REPORT.md 112ms
src/demo.ts 12ms
src/index.ts 4ms
tsconfig.json 4ms (unchanged)
```

6. Коміт

```bash
git add .
git commit -m "feat: add basic types for utils (number/string)"
npm version minor
git push --follow-tags
```

---

## Версія 0.3.0 — нова функція зі складним типом

1. Оновлюємо src/index.ts

```ts
import * as dotenv from 'dotenv';
dotenv.config();

export function add(a: number, b: number): number {
  return a + b;
}

export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export type NumberFormatOptions = {
  precision?: number;
  locale?: string;
};

export function formatNumber(value: number, options?: NumberFormatOptions): string {
  const precision = options?.precision ?? Number(process.env.APP_PRECISION ?? 2);

  return value.toFixed(precision);
}
```

2. Оновлюємо src/demo.ts

```ts
import { add, capitalize, formatNumber } from './index.js';

console.log('sum(typed):', add(2, 3));
console.log('capitalize(typed):', capitalize('hello'));

console.log('format(bad):', formatNumber('abc', { precision: 2 }));
```

3. Виконання перевірок

```bash
npm run typecheck

> basic-utils@0.2.0 typecheck
> tsc --noEmit

src/demo.ts:6:42 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

6 console.log('format(bad):', formatNumber('abc', { precision: 2 }));
                                           ~~~~~


Found 1 error in src/demo.ts:6

npm run lint

> basic-utils@0.2.0 lint
> eslint . --ext .ts

npm run format:check

> basic-utils@0.2.0 format:check
> prettier --check .

Checking formatting...
[warn] REPORT.md
[warn] src/demo.ts
[warn] src/index.ts
[warn] Code style issues found in 3 files. Run Prettier with --write to fix.

```

4. Оновлюємо src/demo.ts

```ts
import { add, capitalize, formatNumber } from './index.js';

console.log('sum(typed):', add(2, 3));
console.log('capitalize(typed):', capitalize('hello'));

console.log('format(ok):', formatNumber(123.456, { precision: 2 }));
```

5. Виконання перевірок

```bash
npm run typecheck

> basic-utils@0.2.0 typecheck
> tsc --noEmit

npm run lint

> basic-utils@0.2.0 lint
> eslint . --ext .ts

npm run format:check

> basic-utils@0.2.0 format:check
> prettier --check .

Checking formatting...
[warn] REPORT.md
[warn] src/demo.ts
[warn] src/index.ts
[warn] Code style issues found in 3 files. Run Prettier with --write to fix.

npm run lint:fix && npm run format

> basic-utils@0.2.0 lint:fix
> eslint . --ext .ts --fix


> basic-utils@0.2.0 format
> prettier --write .

.prettierrc.cjs 42ms (unchanged)
commitlint.config.cjs 3ms (unchanged)
eslint.config.cjs 13ms (unchanged)
package-lock.json 70ms (unchanged)
package.json 11ms (unchanged)
README.md 23ms (unchanged)
REPORT.md 128ms
src/demo.ts 13ms
src/index.ts 6ms
tsconfig.json 5ms (unchanged)

```

6. Коміт

```bash
git add .
git commit -m "feat: add formatNumber with NumberFormatOptions"
npm version minor
git push --follow-tags
```

---

## Версія 0.4.0 — інтерфейси + generics

1. Оновлюємо src/index.ts

```ts
import * as dotenv from 'dotenv';
dotenv.config();

export function add(a: number, b: number): number {
  return a + b;
}

export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export type NumberFormatOptions = {
  precision?: number;
  locale?: string;
};

export function formatNumber(value: number, options?: NumberFormatOptions): string {
  const precision = options?.precision ?? Number(process.env.APP_PRECISION ?? 2);

  return value.toFixed(precision);
}

export interface User {
  id: number;
  name: string;
}

export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce(
    (acc, item) => {
      const group = String(item[key]);
      acc[group] = acc[group] ?? [];
      acc[group].push(item);
      return acc;
    },
    {} as Record<string, T[]>,
  );
}
```

2. Оновлюємо src/demo.ts

```ts
import { add, capitalize, formatNumber, type User, groupBy } from './index.js';

console.log('sum(typed):', add(2, 3));
console.log('capitalize(typed):', capitalize('hello'));

console.log('format(ok):', formatNumber(123.456, { precision: 2 }));

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

console.log('group wrong:', groupBy(users, 'age'));
```

3. Виконання перевірок

```bash
npm run typecheck

> basic-utils@0.3.0 typecheck
> tsc --noEmit

src/demo.ts:13:44 - error TS2345: Argument of type '"age"' is not assignable to parameter of type 'keyof User'.

13 console.log('group wrong:', groupBy(users, 'age'));
                                              ~~~~~


Found 1 error in src/demo.ts:13

npm run lint

> basic-utils@0.3.0 lint
> eslint . --ext .ts

npm run format:check

> basic-utils@0.3.0 format:check
> prettier --check .

Checking formatting...
[warn] REPORT.md
[warn] src/demo.ts
[warn] src/index.ts
[warn] Code style issues found in 3 files. Run Prettier with --write to fix.

```

4. Оновлюємо src/demo.ts

```ts
import { add, capitalize, formatNumber, type User, groupBy } from './index.js';

console.log('sum(typed):', add(2, 3));
console.log('capitalize(typed):', capitalize('hello'));

console.log('format(ok):', formatNumber(123.456, { precision: 2 }));

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

console.log('group ok:', groupBy(users, 'name'));
```

5. Виконання перевірок

```bash
npm run typecheck

> basic-utils@0.3.0 typecheck
> tsc --noEmit

npm run lint

> basic-utils@0.3.0 lint
> eslint . --ext .ts

npm run format:check

> basic-utils@0.3.0 format:check
> prettier --check .

Checking formatting...
[warn] REPORT.md
[warn] src/demo.ts
[warn] src/index.ts
[warn] Code style issues found in 3 files. Run Prettier with --write to fix.

npm run lint:fix && npm run format

> basic-utils@0.3.0 lint:fix
> eslint . --ext .ts --fix


> basic-utils@0.3.0 format
> prettier --write .

.prettierrc.cjs 43ms (unchanged)
commitlint.config.cjs 3ms (unchanged)
eslint.config.cjs 13ms (unchanged)
package-lock.json 75ms (unchanged)
package.json 10ms (unchanged)
README.md 23ms (unchanged)
REPORT.md 156ms
src/demo.ts 16ms
src/index.ts 10ms
tsconfig.json 5ms (unchanged)
```

6. Коміт

```bash
git add .
git commit -m "feat: add User interface and generic groupBy"
npm version minor
git push --follow-tags
```

---

## Версія 0.5.0 — клас Logger + змінні оточення (.env)

1. Створення файла src/config.ts

```ts
import * as dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const schema = z.object({
  APP_PRECISION: z.coerce.number().int().min(0).max(10).default(2),
  LOG_LEVEL: z.enum(['silent', 'info', 'debug']).default('info'),
});

export const config = schema.parse(process.env);
export type Config = z.infer<typeof schema>;
```

2. Оновлення scr/index.ts:

```ts
import { config } from './config.js';

export function add(a: number, b: number): number {
  return a + b;
}

export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export type NumberFormatOptions = {
  precision?: number;
  locale?: string;
};

export function formatNumber(value: number, options?: NumberFormatOptions): string {
  const precision = options?.precision ?? config.APP_PRECISION;
  return value.toFixed(precision);
}

export type LogLevel = 'silent' | 'info' | 'debug';
export class Logger {
  constructor(private level: LogLevel) {}

  info(msg: string): void {
    if (this.level !== 'silent') {
      console.log('[INFO]', msg);
    }
  }

  debug(msg: string): void {
    if (this.level === 'debug') {
      console.log('[DEBUG]', msg);
    }
  }
}
```

3. Створення .env:

```.env
APP_PRECISION=3
LOG_LEVEL=debug
```

4. Оновлення src/demo.ts:

```ts
import { add, capitalize, formatNumber, Logger, type LogLevel } from './index.js';
import { config } from './config.js';

console.log('sum(typed):', add(2, 3));
console.log('capitalize(typed):', capitalize('hello'));

console.log('format(ok):', formatNumber(123.456));

const bad = new Logger('verbose');
bad.info('This should not compile');
```

5. Виконання перевірок

```bash
npm run typecheck

> basic-utils@0.4.0 typecheck
> tsc --noEmit

src/demo.ts:9:24 - error TS2345: Argument of type '"verbose"' is not assignable to parameter of type 'LogLevel'.

9 const bad = new Logger('verbose');
                         ~~~~~~~~~


Found 1 error in src/demo.ts:9

npm run lint

> basic-utils@0.4.0 lint
> eslint . --ext .ts


D:\study\course3\software_engeneering\SUITT-Year3-Software-Engineering-PZ2\src\demo.ts
  1:54  warning  'LogLevel' is defined but never used  no-unused-vars
  1:54  error    'LogLevel' is defined but never used  @typescript-eslint/no-unused-vars
  2:10  warning  'config' is defined but never used    no-unused-vars
  2:10  error    'config' is defined but never used    @typescript-eslint/no-unused-vars

D:\study\course3\software_engeneering\SUITT-Year3-Software-Engineering-PZ2\src\index.ts
  23:25  warning  'level' is defined but never used  no-unused-vars

✖ 5 problems (2 errors, 3 warnings)

npm run format:check

> basic-utils@0.4.0 format:check
> prettier --check .

Checking formatting...
[warn] REPORT.md
[warn] src/config.ts
[warn] src/demo.ts
[warn] src/index.ts
[warn] Code style issues found in 4 files. Run Prettier with --write to fix.

```

6. Оновлення src/demo.ts:

```ts
import { add, capitalize, formatNumber, Logger, type LogLevel } from './index.js';
import { config } from './config.js';

console.log('sum(typed):', add(2, 3));
console.log('capitalize(typed):', capitalize('hello'));

console.log('format(ok):', formatNumber(123.456));

const logger = new Logger(config.LOG_LEVEL as LogLevel);

logger.info('Application started');
logger.debug('Extra debug info');
```

7. Виконання перевірок:

```bash
npm run typecheck

> basic-utils@0.4.0 typecheck
> tsc --noEmit

npm run lint

> basic-utils@0.4.0 lint
> eslint . --ext .ts


D:\study\course3\software_engeneering\SUITT-Year3-Software-Engineering-PZ2\src\index.ts
  23:25  warning  'level' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

npm run format:check

> basic-utils@0.4.0 format:check
> prettier --check .

Checking formatting...
[warn] REPORT.md
[warn] src/config.ts
[warn] src/demo.ts
[warn] src/index.ts
[warn] Code style issues found in 4 files. Run Prettier with --write to fix.

npm run lint:fix && npm run format

> basic-utils@0.4.0 lint:fix
> eslint . --ext .ts --fix


D:\study\course3\software_engeneering\SUITT-Year3-Software-Engineering-PZ2\src\index.ts
  23:25  warning  'level' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)


> basic-utils@0.4.0 format
> prettier --write .

.prettierrc.cjs 41ms (unchanged)
commitlint.config.cjs 3ms (unchanged)
eslint.config.cjs 14ms (unchanged)
package-lock.json 81ms (unchanged)
package.json 11ms (unchanged)
README.md 23ms (unchanged)
REPORT.md 172ms
src/config.ts 15ms
src/demo.ts 14ms
src/index.ts 5ms
tsconfig.json 3ms (unchanged)
```

8. Коміт

```bash
git add .
git commit -m "feat: add Logger class and env config via zod; formatNumber uses APP_PRECISION"
npm version minor
git push --follow-tags
```

---

## Версія 1.0.0 — стабілізація публічного API + посилення правил

1. Посилення правил ESLint:

```js
const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-config-prettier');

module.exports = [
  { ignores: ['**/*.cjs', '**/*.md', 'dist/**', 'node_modules/**'] }, // <- тут зміна
  js.configs.recommended, // базові правила JS
  ...tseslint.configs.recommended, // базові правила TS
  prettier, // відключення конфліктів з Prettier
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'error', // <- тут зміна
      'no-unused-vars': 'warn',
    },
  },
];
```

2. Перерозподіл логіки бібліотеки по окремим файлам:

src/utils/add.ts:

```ts
export function add(a: number, b: number): number {
  return a + b;
}
```

src/utils/capitalize/ts:

```ts
export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
```

src/utils/formatNumber.ts:

```ts
import { config } from '../config.js';
import type { NumberFormatOptions } from '../types/numberFormatOption.js';

export function formatNumber(value: number, options?: NumberFormatOptions): string {
  const precision = options?.precision ?? config.APP_PRECISION;
  return value.toFixed(precision);
}
```

src/utils/logger.ts:

```ts
import type { LogLevel } from '../types/logLevel.js';

export class Logger {
  constructor(private level: LogLevel) {}

  info(msg: string): void {
    if (this.level !== 'silent') {
      console.log('[INFO]', msg);
    }
  }

  debug(msg: string): void {
    if (this.level === 'debug') {
      console.log('[DEBUG]', msg);
    }
  }
}
```

src/types/numberFormatOption.ts:

```ts
export type NumberFormatOptions = {
  precision?: number;
  locale?: string;
};
```

src/types/logLevel.ts:

```ts
export type LogLevel = 'silent' | 'info' | 'debug';
```

src/index.ts:

```ts
export { add } from './utils/add.js';
export { capitalize } from './utils/capitalize.js';
export { formatNumber } from './utils/formatNumber.js';
export { Logger } from './utils/logger.js';

export type { NumberFormatOptions } from './types/numberFormatOption.js';
export type { LogLevel } from './types/logLevel.js';
```

3. Оновлення package.json:

```json
{
  "name": "basic-utils",
  "version": "0.5.0",
  "description": "The library that provides useful functions",
  "main": "dist/index.cjs",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "require": "./dist/index.cjs",
      "import": "./dist/index.mjs"
    }
  },
  "type": "module",
  "scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts",
    "lint": "eslint . --ext .ts",
    "lint:fix": "eslint . --ext .ts --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "typecheck": "tsc --noEmit",
    "demo": "tsx src/demo.ts",
    "prepare": "husky"
  },
  "author": "Viacheslav Niedieliev",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^17.2.2",
    "zod": "^4.1.8"
  },
  "devDependencies": {
    "@commitlint/config-conventional": "^19.8.1",
    "@eslint/js": "^9.35.0",
    "@types/node": "^24.5.0",
    "commitlint": "^19.8.1",
    "eslint": "^9.35.0",
    "eslint-config-prettier": "^10.1.8",
    "husky": "^9.1.7",
    "prettier": "^3.6.2",
    "tsup": "^8.5.0",
    "tsx": "^4.20.5",
    "typescript": "^5.9.2",
    "typescript-eslint": "^8.44.0"
  }
}
```

4. Збірка і перевірка:

```bash
npm run build

> basic-utils@0.5.0 build
> tsup src/index.ts --format cjs,esm --dts

CLI Building entry: src/index.ts
CLI Using tsconfig: tsconfig.json
CLI tsup v8.5.0
CLI Target: esnext
CJS Build start
ESM Build start
ESM dist\index.js 975.00 B
ESM ⚡️ Build success in 114ms
CJS dist\index.cjs 2.66 KB
CJS ⚡️ Build success in 114ms
DTS Build start
DTS ⚡️ Build success in 1150ms
DTS dist\index.d.cts 541.00 B
DTS dist\index.d.ts  541.00 B

npm run typecheck

> basic-utils@0.5.0 typecheck
> tsc --noEmit

npm run lint

> basic-utils@0.5.0 lint
> eslint . --ext .ts


D:\study\course3\software_engeneering\SUITT-Year3-Software-Engineering-PZ2\src\utils\logger.ts
  4:25  warning  'level' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

npm run format:check

> basic-utils@0.5.0 format:check
> prettier --check .

Checking formatting...
[warn] REPORT.md
[warn] src/index.ts
[warn] src/types/logLevel.ts
[warn] src/types/numberFormatOption.ts
[warn] src/utils/add.ts
[warn] src/utils/capitalize.ts
[warn] src/utils/formatNumber.ts
[warn] src/utils/logger.ts
[warn] Code style issues found in 8 files. Run Prettier with --write to fix.

npm run lint:fix && npm run format

> basic-utils@0.5.0 lint:fix
> eslint . --ext .ts --fix


D:\study\course3\software_engeneering\SUITT-Year3-Software-Engineering-PZ2\src\utils\logger.ts
  4:25  warning  'level' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)


> basic-utils@0.5.0 format
> prettier --write .

.prettierrc.cjs 40ms (unchanged)
commitlint.config.cjs 3ms (unchanged)
eslint.config.cjs 13ms (unchanged)
package-lock.json 77ms (unchanged)
package.json 10ms (unchanged)
README.md 23ms (unchanged)
REPORT.md 200ms
src/config.ts 14ms (unchanged)
src/demo.ts 3ms (unchanged)
src/index.ts 2ms
src/types/logLevel.ts 2ms
src/types/numberFormatOption.ts 2ms
src/utils/add.ts 2ms
src/utils/capitalize.ts 2ms
src/utils/formatNumber.ts 3ms
src/utils/logger.ts 3ms
tsconfig.json 4ms (unchanged)

```

5. Коміт:

```bash
git add .
git commit -m "chore: stabilize public API; forbid any; add package exports"
npm version major
git push --follow-tags
```
