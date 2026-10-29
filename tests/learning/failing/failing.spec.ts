import { expect, test } from "@playwright/test";

test.describe("Failing tests", () => {
  test.skip("Failing test", async ({ page }) => {
    await page.goto("https://tredgate.com/pmtool");
    await page.locator("#username222").fill("pw_academy");

    test("Failing assert", async ({ page }) => {
      await page.goto("https://tredgate.com/pmtool");
      await expect(page.locator("#not_existing")).toBeVisible();
    });
  });
});
