import { Page } from '@playwright/test';

export class LoginPage {
  constructor(public page: Page) {}

  get emailInput() {
    return this.page.locator('input[name="email"], input#email, input[data-testid="email"]');
  }

  get passwordInput() {
    return this.page.locator('input[name="pass"], input#pass, input[data-testid="pass"]');
  }

  get loginButton() {
    return this.page
      .locator('form')
      .filter({ has: this.page.locator('input[name="email"], input#email, input[data-testid="email"]') })
      .getByRole('button', { name: /iniciar\s+sesión|inicia\s+sesión|acceder/i })
      .first();
  }

  get invalidCredentialsMessage() {
    return this.page.getByText('El correo electrónico o nú')
      .first().or(this.page.getByText('La información de inicio de sesión que ingresaste es incorrecta').first());
  }
}
