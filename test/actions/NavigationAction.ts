import { Page } from '@playwright/test';

export class NavigationAction {
  constructor(private page: Page) {
    this.page = page;
  }

  static toDo(page: Page) {
    return new NavigationAction(page);
  }

  async navigateToFacebook() {
    await this.page.goto("");
  }
}
