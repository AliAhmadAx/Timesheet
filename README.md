## Timesheet Management Dashboard

A simplified SaaS-style Timesheet Management application built as part of the TenTwenty Frontend Technical Assessment.
The project demonstrates clean architecture, authentication, internal API handling, and a responsive UI using modern Next.js practices.

## Setup Instructions

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Demo Login Credentials
Email: admin@tentwenty.com
Password: password123

## Frameworks & Libraries Used

Next.js 15 — App Router, Server Components

TypeScript — type safety and scalability

Tailwind CSS — utility-first styling

next-auth — authentication and session handling

React — component-based UI

ESLint / Prettier — code quality & formatting

## Application Structure (Overview)
src/
├── app/
│   ├── (auth)/login
│   ├── (dashboard)
│   ├── api/
│   │   ├── auth/[...nextauth]
│   │   └── timesheets
│
├── components/
│   ├── auth/
│   ├── timesheets/
│   └── ui/
│
├── services/
├── types/
├── lib/

App Router layouts are used to protect dashboard routes

Internal API routes handle all data interactions

Feature-based component organization

## Assumptions & Notes

Authentication uses dummy credentials for demonstration purposes

Timesheet data is stored in-memory (no database)

Route protection is handled server-side via App Router layouts

Middleware was intentionally avoided to align with Next.js 15 best practices

UI is designed to be clean, responsive, and easy to extend

Focus was placed on clarity and maintainability over over-engineering

## Time Spent

Approximate total time:

Architecture & setup: 1.5 hours

Authentication & routing: 1.5 hours

Dashboard, table & modal UI: 3 hours

API routes & state management: 2 hours

UI polish & refactoring: 1 hour

Total: ~9 hours

## Evaluation Coverage

✔ Login screen
✔ Protected dashboard
✔ Timesheet table view
✔ Add/Edit modal
✔ Internal API routes
✔ Responsive UI
✔ Clean code structure

## Submission

This project is submitted as part of the TenTwenty Frontend Developer Technical Assessment.

Thank you for reviewing!
