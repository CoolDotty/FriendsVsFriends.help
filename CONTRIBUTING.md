# Contributing to FvF Deck Builder

Thanks for taking the time to contribute! ❤️

## Setup

1. Install the Node.js version listed in `.nvmrc`.
2. Enable pnpm through Corepack if it is not already available:

   ```sh
   corepack enable
   ```

3. Install dependencies and start Vite:

   ```sh
   pnpm install
   pnpm dev
   ```

## Before opening a pull request

Run the complete check suite:

```sh
pnpm check
```

Use `pnpm format` to apply formatting fixes. Production builds are written to `dist/`.
