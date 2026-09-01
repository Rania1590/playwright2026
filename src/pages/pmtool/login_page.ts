import { Locator, Page } from "@playwright/test";
import { DashboardPage } from "./dashboard_page.ts";
import { LostPasswordPage } from "./last_password_page.ts";

export class LoginPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/pmtool"; //? jen na prvni strance PO, kde budueme otvirat aplikaci
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly lostPasswordAnchor: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username"); // ! v pripade nastovavani lokatoru nedavamu await rped page
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator(".btn");
    this.lostPasswordAnchor = page.locator("//a[@id='forget_password']");
  }
  // ! testovaci data nikdy nedavame do metod, ale posilame je parametres
  async openPmtool(): Promise<this> {
    await this.page.goto(this.url);
    return this;
  }
  async fillUsername(username: string): Promise<this> {
    await this.usernameInput.fill(username);
    return this;
  }
  async fillPassword(password: string): Promise<this> {
    await this.passwordInput.fill(password);
    return this;
  }
  async clickLogin(): Promise<DashboardPage> {
    await this.loginButton.click();
    return new DashboardPage(this.page);
  }

  async login(username: string, password: string): Promise<DashboardPage> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
    return new DashboardPage(this.page);
  }

  async clickPasswordForgotten(): Promise<LostPasswordPage> {
    await this.lostPasswordAnchor.click();
    return new LostPasswordPage(this.page);
  }
}
