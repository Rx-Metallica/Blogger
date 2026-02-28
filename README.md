This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## CI/CD with GitHub Actions

This repository includes a production-oriented GitHub Actions setup:

- **CI (`.github/workflows/ci.yml`)** runs on every PR to `main` and every push to `main`.
  - Installs dependencies with `npm ci`.
  - Runs linting (`npm run lint`).
  - Builds the app (`npm run build`).
- **CD (`.github/workflows/cd.yml`)** deploys to Vercel on pushes to `main` (or manually via `workflow_dispatch`).
  - Validates required deployment secrets.
  - Builds with Vercel CLI.
  - Deploys a prebuilt production artifact.
- **Dependency Review (`.github/workflows/dependency-review.yml`)** checks newly introduced dependencies in pull requests.

### Required secrets for deployment

Configure these in your repository settings (`Settings → Secrets and variables → Actions`) or in the `production` environment:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

### Recommended branch protection

For a safer production flow, protect `main` and require these status checks:

- `CI / lint-and-build`
- `Dependency Review / dependency-review`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
