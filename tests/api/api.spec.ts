
import { test, expect } from '@playwright/test';

test('get user details', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer YOUR_TOKEN'
      }
    }
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.id).toBe(1);
  expect(responseBody.name).toBe('Leanne Graham');

});

test('Create a new blog', async ({ request }) => {

  const responses = await request.post(
  'https://jsonplaceholder.typicode.com/posts',
  {
    data: {
      title: 'My First Post',
      body: 'Learning API testing',
      userId: 1
    }
  }
);
expect(responses.status()).toBe(201);

  const responseBody = await responses.json();

  expect(responseBody.title).toBe('My First Post');
  expect(responseBody.userId).toBe(1);
});
