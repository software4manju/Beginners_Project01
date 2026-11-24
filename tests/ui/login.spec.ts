import { test, expect } from '../../fixtures/testFixtures';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../test-data/users';

test('standard user can log in successfully @regression', async ({
  loginPageFixture,
  inventoryPageFixture,
}) => {
  await loginPageFixture.goto();

  await loginPageFixture.login(users.standardUser.username, users.standardUser.password);

  await expect(inventoryPageFixture.title).toBeVisible();
});

test('Standard user can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory.html/);
});
