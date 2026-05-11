# QUANT

QUANT marketing website built with Next.js 16, multilingual routing (`ru`, `kg`, `en`), SEO metadata, `sitemap.xml`, `robots.txt`, and an EmailJS consultation form.

## Tech Stack

- `Next.js 16` (App Router)
- `React 19`
- `TypeScript`
- `next-intl` for localization
- `Tailwind CSS 4`
- `ESLint`
- `Husky` (`pre-push`: lint + typecheck)

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - run the development server
- `npm run build` - build for production
- `npm run start` - start production server
- `npm run lint` - run ESLint
- `npm run typecheck` - run TypeScript checks (`tsc --noEmit`)

## Localization

- Locales are configured in `src/i18n/routing.ts`
- Translation files are in `src/messages`
- Routes are handled via `src/app/[locale]`

URL examples:
- `/ru`
- `/kg`
- `/en`

## SEO

- Localized `metadata` is generated with `generateMetadata`
- `robots.txt` is generated in `src/app/robots.ts`
- `sitemap.xml` is generated in `src/app/sitemap.ts`
- Base domain is centralized in `src/shared/constants` (`SITE_URL`)

## Project Structure

```text
src/
  app/           # App Router pages and metadata routes
  shared/        # Shared constants, helpers, types, api
  atoms/
  molecules/
  organisms/
  i18n/
  messages/
```

## Git hooks

Before `git push`, the following commands run automatically:

- `npm run lint`
- `npm run typecheck`

Configured in `.husky/pre-push`.

## Documentation

Additional notes are available in the `docs/` directory.
