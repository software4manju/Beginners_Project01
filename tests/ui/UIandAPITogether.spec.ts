import { test, expect } from '@playwright/test';

test('Customer can cancel an order', async ({ page, request }) => {
  //Prepare order through API
  const response = await request.post('https://your-test-app.example/api/orders', {
    data: {
      productId: 123,
      quantity: 1,
    },
  });
  expect(response.status()).toBe(201);
  const order = await response.json();

  // Open the order page in the UI
  await page.goto(`https://your-test-app.example/orders/${order.id}`);
  // Perform UI actions to cancel the order
  await page.getByRole('button', { name: 'Cancel Order' }).click();
  //Verify the result
  await expect(page.getByText('Order has been cancelled')).toBeVisible();
});
