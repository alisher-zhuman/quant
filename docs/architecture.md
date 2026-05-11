# Project Architecture & Guidelines

This document outlines the architectural patterns, directory structure, and core configurations (such as SEO and i18n) used in the project.

## Directory Structure & Atomic Design

We strictly follow the **Atomic Design** methodology for organizing our UI components, combined with the Next.js App Router for routing and page structure.

### Component Hierarchy (Atomic Design)
- **`src/atoms/`**: The smallest, indivisible UI building blocks. Examples: buttons, inputs, typography elements, icons. They cannot be broken down further.
- **`src/molecules/`**: Simple combinations of atoms. Examples: a form field (label + input + error text), a search bar (input + button).
- **`src/organisms/`**: Complex UI sections composed of molecules and atoms. Examples: headers, footers, complex forms, data tables, product cards.

### Core Directories
- **`src/app/`**: Next.js App Router handling all pages, layouts, API routes, and core Next.js configurations (`robots.ts`, `sitemap.ts`).
- **`src/hooks/`**: Shared custom React hooks for encapsulating complex state and side effects.
- **`src/shared/`**: Global shared code, including:
  - `constants/` - Global constants (e.g., `SITE_URL`).
  - `helpers/` - Utility functions (e.g., `generateMetadata`).
  - `types/` - Global TypeScript definitions.
- **`src/i18n/`**: Localization routing configuration (`routing.ts`).
- **`src/messages/`**: Translation files (`ru.json`, `kg.json`, `en.json`).

---

## SEO & Internationalization (i18n)

### Localization Settings
The project relies on `next-intl` (or similar) for handling translations.
- **Locales**: `ru` (default), `kg`, `en`. Defined in `src/i18n/routing.ts`.
- **Translations**: Managed in `src/messages/`. 

### Metadata & SEO Generation
- **Dynamic Metadata**: The `generateMetadata` function (located in `src/shared/helpers/index.ts`) reads the current `locale`, loads translations from the `metadata` namespace, and dynamically builds localized metadata (`title`, `description`, `openGraph`, `twitter`, `alternates`).
- **OpenGraph Mapping**: 
  - `ru` -> `ru_RU`
  - `kg` -> `ky_KG`
  - `en` -> `en_US`
- **Base Domain**: Managed via `SITE_URL = "https://quant.kg"` in `src/shared/constants/index.ts`. Used heavily across metadata, robots, and sitemap generation.

### Crawlers & Sitemaps
- **`robots.txt`**: Defined in `src/app/robots.ts`. Allows global indexing and explicitly permits popular AI bots (`GPTBot`, `ClaudeBot`, `PerplexityBot`, etc.).
- **`sitemap.xml`**: Defined in `src/app/sitemap.ts`. Automatically generates URL structures for all supported locales and main public pages (e.g., `/`, `/documents`, `/addresses`), complete with language alternates for optimal multilingual SEO.
