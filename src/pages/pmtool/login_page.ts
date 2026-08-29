import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/pmtool"; //? jen na prvni strance PO, kde budueme otvirat aplikaci
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username"); // ! v pripade nastovavani lokatoru nedavamu await rped page
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator(".btn");
  }
  // ! testovaci data nikdy nedavame do metod, ale posilame je parametres
  async openPmtool() {
    await this.page.goto(this.url);
  }
  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }
  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }
  async clickLogin() {
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}
