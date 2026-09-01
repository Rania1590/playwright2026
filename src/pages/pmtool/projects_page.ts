import { Locator, Page } from "@playwright/test";
import { CreateNewProjectModal } from "./projects/create_new_project_modal.ts";

export class ProjectsPage {
  readonly page: Page;
  readonly addProjectButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addProjectButton = page.locator(`//button[@test_id="Add Project"]`);
  }
  async clickAddProject(): Promise<CreateNewProjectModal> {
    await this.page.waitForTimeout(1000); // ! Toto neni doporucena praktita! implicitni cekani( cekani na tvrdo, pouziva se jen kdyz jina alternativa neni)
    await this.addProjectButton.click();
    return new CreateNewProjectModal(this.page);
  }
}
