How to run.

1. Create .env file end insert this `API_URL=https://fakestoreapi.com`
2. npm install
3. npm run dev

Improvements and features that could be added:

1. More tests (E2E, more units for cart component)
2. pre-commit hooks that will check linting
3. Change state managament from react context to something like mobx or redux. Context is not really performant for more advanced use-cases.
4. Save cart state to local storage
5. Better error handling. Maybe notification system.
