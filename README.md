This application is [live on Vercel here!](https://todo-learning-next13-l3y230180-danielrobertson.vercel.app/) 🚀

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm i && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

This project uses:

- [Next.js 13](https://nextjs.org/) for server side rendering and routing and [React 18](https://react.dev/blog/2022/03/29/react-v18) server components
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [TailwindCSS](https://tailwindcss.com/) for styling
- [React Aria](https://react-spectrum.adobe.com/react-aria/) for accessibility and building robust components
- [Storybook](https://storybook.js.org/) for building and documenting components
  - GitHub Actions for [deploying Storybook to GitHub Pages](.github/workflows/deploy-storybook)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Jest](https://jestjs.io/) for testing
  - [Speedy Web Compiler](https://swc.rs/) because _what's a modern web app without a compiler written in Rust?_ 🦀 Also _[it's fast](https://www.jameslmilner.com/posts/speeding-up-typescript-jest-tests/#:~:text=This%20indicates%20that%20swc%2Fjest,fast%20feedback%20on%20code%20changes.)_
- eslint for static code analysis and linting

### Testing

Run tests with `npm run test`

### Storybook

A live hosted Storybook is available via a [GitHub Action](.github/workflows/deploy-storybook) that builds and deploys the Storybook app to GitHub Pages: TODO

## Deployment on Vercel

This application is live on Vercel: https://todo-learning-next13-l3y230180-danielrobertson.vercel.app

### Web Core Vitals

Utilizing Next.js 13 server side rendering, React 18 server components, and Vercel's edge network, this application is optimized for [Web Core Vitals](https://web.dev/vitals/).

TODO screen shot of Lighthouse report

Vercel can automatically monitor [Web Core Vitals](https://web.dev/vitals/), but additionally you can leverage [Vercel custom reporting](https://nextjs.org/learn/seo/monitor/custom-reporting) to send data to 3rd party analytics like Google Analytics.
