# How to Run

1. Create a `.env` file and insert the following:

   ```
   API_URL=https://fakestoreapi.com
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Tests

To run tests:

```bash
npm run test
```

---

## Improvements and Features That Could Be Added

1. **More tests**

   - End-to-End (E2E) tests.
   - Additional unit tests for the cart component.

2. **Pre-commit hooks**

   - Add pre-commit hooks to check linting before committing code.

3. **State management**

   - Replace React Context with more performant solutions like MobX or Redux for advanced use cases.

4. **Persist cart state**

   - Save the cart state to local storage.

5. **Better error handling**
   - Implement a notification system for better error feedback.
