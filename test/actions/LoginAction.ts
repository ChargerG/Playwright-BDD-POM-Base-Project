import { expect, Page, test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/LoginPage';

export class LoginAction {
  private loginPage: LoginPage;
  private page: Page;

  constructor (page: Page) {
    this.loginPage = new LoginPage(page);
    this.page = page;
  }

  static toDo(page: Page) {
    return new LoginAction(page);
  }

  async submitLogin() {
    await this.loginPage.emailInput.fill(faker.internet.email());
    await this.loginPage.passwordInput.fill(faker.internet.password());
    await this.loginPage.loginButton.click();
  }

  async errorToLogin(){
    await expect(this.loginPage.invalidCredentialsMessage).toBeVisible({ timeout: 10000 });
    const screenshotBuffer = await this.page.screenshot({ fullPage: true });
    await test.info().attach('Evidencia_error_login', {
      body: screenshotBuffer,
      contentType: 'image/png'
    });
  }
}
