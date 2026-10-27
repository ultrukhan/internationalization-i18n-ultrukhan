# Internationalization in a Next.js App

## Overview

In this project, you will implement a Next.js app with internationalization (i18n) support using the `next-intl` library. The app should allow users to switch between English and Ukrainian languages. You will also ensure that the components are fully functional by passing pre-written tests that verify language switching and correct rendering of translated content.

This starter is pinned to **Next.js 15** and **next-intl v3**. Do not upgrade either package.

### Key Libraries:

- **Next.js 15.1.5**: A React-based framework for building web applications.
- **next-intl v3.26**: A library for adding internationalization support to Next.js apps.

## Documentation (Next.js 15 / next-intl v3 only)

Follow the **next-intl v3** App Router setup with i18n routing (tag `v3.26.5`):

https://github.com/amannn/next-intl/blob/v3.26.5/docs/src/pages/docs/getting-started/app-router/with-i18n-routing.mdx

**Do not use the current [next-intl.dev](https://next-intl.dev) docs.** They target Next.js 16 and a newer next-intl major version (`src/proxy.ts`, `next/root-params`). This project uses `src/middleware.ts` and Next.js 15 APIs.

When copying examples from the v3 guide, adapt them to this project:

- Supported locales are `en` and `uk`. The docs use `en` and `de` — replace `de` with `uk` everywhere, including the middleware `matcher`.
- Put the middleware in `src/middleware.ts`. Do **not** create `src/proxy.ts`.
- `next.config.ts` already includes the `next-intl` plugin. Do **not** add `next.config.mjs`.
- In Next.js 15, `params` in layouts and pages is a `Promise`. Read the locale with `const { locale } = await params;` instead of destructuring `params: { locale }` in the function argument.
- Create navigation helpers with `createNavigation` in `src/i18n/routing.ts`. Import `Link`, `useRouter`, and `usePathname` from there — not from `next/link` or `next/navigation`.
- In `src/app/[locale]/layout.tsx`, render `<html>` and `<body>`, and wrap the tree with `NextIntlClientProvider` so client components (`LangSwitcher`, `Footer`) can use translations.

## Getting started

```bash
npm install
npm run dev
```

Run the end-to-end tests:

```bash
npm run e2e:headless
```

## What You’ll Implement

You are tasked with implementing several steps in the project that support both English and Ukrainian languages.

1. **Rename the starter folders**

   - `src/app/_to-rename` → `src/app/[locale]`
   - `_to-rename-translations` → `messages`

2. **`src/i18n/request.ts`, `src/i18n/routing.ts`, `src/middleware.ts`, `src/app/[locale]/layout.tsx`**

   - Add code according to the v3 documentation linked above (with the Next.js 15 adaptations listed there).
   - Mount `Header` and `Footer` in the locale layout so they appear on every page.

3. **Header Component**

   - The header should include navigation links (Home, About) and a language switcher dropdown to change between English and Ukrainian.
   - The `LangSwitcher` component should allow users to switch the language, and the corresponding text in the app should update dynamically.

4. **LangSwitcher Component**

   - A dropdown that lets users choose between English and Ukrainian.
   - Upon changing the language, the app should remain on the same page but with updated translations.

5. **HomePage Component**

   - The homepage should display a welcome message and a brief introduction text. The content should be fetched from the `next-intl` translation files.

6. **AboutPage Component**

   - The about page should contain sections like "Our Story," "Mission," and "Values." Each section should be localized, and the content should be dynamically translated when the language changes.

7. **Footer Component**

   - Translate the footer with the `Footer` namespace from the message files and include it in the locale layout. Tests do not cover the footer, but it should still be localized like the rest of the app.

## What you have already

- Basic component code — add internationalization on top of it
- Translation files (`_to-rename-translations/en.json`, `_to-rename-translations/uk.json`) — rename the folder to `messages` and use these files
- File placement is correct; folders marked with the `_to-rename` prefix need to be renamed as described above
- `next.config.ts` is already wired to `next-intl`
