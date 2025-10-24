# Kiosk Monorepo

A Turbo-powered monorepo for the Kiosk application with shared packages and workspace management.

## Structure

```
├── apps/
│   └── kiosk/          # Main Kiosk web application
├── packages/
│   ├── ui/             # Shared UI components
│   └── config/         # Shared configuration files
├── turbo.json          # Turbo configuration
├── pnpm-workspace.yaml # PNPM workspace configuration
└── package.json        # Root package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
pnpm install
```

### Development

Run all packages in development mode:

```bash
pnpm dev
```

Run only the web app:

```bash
pnpm dev --filter=@kiosk/web
```

Run only the UI package:

```bash
pnpm dev --filter=@kiosk/ui
```

### Building

Build all packages:

```bash
pnpm build
```

Build specific package:

```bash
pnpm build --filter=@kiosk/web
```

### Other Commands

```bash
# Type checking
pnpm check-types

# Linting
pnpm lint
pnpm lint:fix

# Formatting
pnpm format
```

## Packages

### @kiosk/web

The main Kiosk web application built with:

- React 19
- Vite
- TanStack Router
- Apollo Client
- Tailwind CSS + DaisyUI
- Lingui (i18n)

### @kiosk/ui

Shared UI components library built with:

- React 19
- TypeScript
- Tsup (bundler)

### @kiosk/config

Shared configuration files for:

- ESLint
- TypeScript
- Other build tools

## Workspace Management

This monorepo uses:

- **Turbo** for build orchestration and caching
- **pnpm** for package management and workspaces
- **TypeScript** project references for type checking

## Adding New Packages

1. Create a new directory in `packages/` or `apps/`
2. Add a `package.json` with name `@kiosk/package-name`
3. Update dependencies in consuming packages using `workspace:*`
4. Run `pnpm install` to link the workspace

## GraphQL Code Generation

The main app includes GraphQL code generation:

```bash
# From the root
pnpm --filter=@kiosk/web codegen

# Or from apps/kiosk/
cd apps/kiosk && pnpm codegen
```
