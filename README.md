# 💰 tracker

A dynamic Next.js Expense Tracker for managing your expenses

# Technologies Used
1. NextJS for the UI Design/Backend framework.
2. Neon/PostgreSQL for the Database Storage.
3. Clerk for authentication.

## Libraries Used:
- NextJS [Ref]{https://nextjs.org/docs}
- Clerk for authentication [Ref]{https://dashboard.clerk.com/}
- Prisma for ORM mapping [Ref]{https://www.prisma.io/}
- Toastify (the obvious!) [Ref]{https://www.npmjs.com/package/react-toastify}


### Instructions (for execution):
- For running both ends, we need to install the necessary dependencies, so run `npm install` on respective folders.
- After the dependencies are installed, we can individually run both ends.
  2. For running the app, execute `npm run dev` (running on port 3000).

- The server folder contains a '.env' which has  the following environment variables:
  1. **DATABASE_URL** - Your Neon/PostgreSQL DB URI (for storage purposes).
  2. **CLERK_KEYS** - The Clerk Authentication Keys referred from (https://dashboard.clerk.com/apps/).