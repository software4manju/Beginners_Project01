import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,
  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 2 : undefined,

  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  reporter: 'html',

  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },

    {
      name: 'chromium',
      testIgnore: /.*\.setup\.ts/,

      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
        screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
      },

      dependencies: ['setup'],
    },
  ],
});
