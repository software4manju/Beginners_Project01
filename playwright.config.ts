
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },

  reporter: 'html',

  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/
    },

    {
      name: 'chromium',
      testIgnore: /.*\.setup\.ts/,

      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json'
      },

      dependencies: ['setup']
    }
  ]
});
