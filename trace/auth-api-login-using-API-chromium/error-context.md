# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth-api.spec.ts >> login using API
- Location: tests\auth-api.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import process = require('process');
  3  | 
  4  | test('login using API', async ({ request }) => {
  5  | // Step 1: Read username and password from environment variables
  6  |     const username = process.env.TEST_USERNAME;
  7  |     const password = process.env.TEST_PASSWORD;
  8  |      // Verify credentials exist
  9  |   if (!username || !password) {
  10 |     throw new Error('Missing TEST_USERNAME or TEST_PASSWORD');
  11 |   }
  12 | 
  13 |    // Step 2: Login using API
  14 |     const response = await request.post(
  15 |     'https://dummyjson.com/auth/login',
  16 |     {
  17 |       data: {
  18 |         username: username,
  19 |         password: password,
  20 |         expiresInMins: 30
  21 |       }
  22 |     }
  23 |   );
  24 | 
  25 |   expect(response.status()).toBe(200);
  26 | 
  27 |   //step3: Get the access token from the response
  28 | 
  29 |   const loginBody = await response.json();
  30 |   const token = loginBody.accessToken;
  31 | 
  32 |   expect(token).toBeTruthy();
  33 | 
  34 | 
  35 |   //step 4: call protected API
  36 |   const profileResponse = await request.get(
  37 |   'https://dummyjson.com/auth/profile',
  38 |   {
  39 |     headers: {
  40 |       Authorization: `Bearer ${token}`
  41 | 
  42 |    }
  43 |   }
  44 | );
  45 | // Step 4: Verify response
> 46 |   expect(profileResponse.status()).toBe(200);
     |                                    ^ Error: expect(received).toBe(expected) // Object.is equality
  47 | 
  48 |   const profile = await profileResponse.json();
  49 |   expect(profile.username).toBe(username);
  50 | });
  51 | 
  52 | 
  53 | 
  54 | 
```