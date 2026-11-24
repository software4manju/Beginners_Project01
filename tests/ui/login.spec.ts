
import { test, expect } from '../../fixtures/testFixtures';
import { users } from '../../test-data/users';

test('standard user can log in successfully', async ({
  loginPageFixture,
  inventoryPageFixture
}) => {

  await loginPageFixture.goto();

  await loginPageFixture.login(
    users.standardUser.username,
    users.standardUser.password
  );

  await expect(inventoryPageFixture.title).toBeVisible();

});
