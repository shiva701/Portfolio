import { test, expect } from '@playwright/test';

test.describe('Mobile layout', () => {
  test('page has no horizontal overflow', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });

  test('desktop nav links are hidden and the menu button is shown', async ({ page }) => {
    await page.goto('/');
    const menu = page.getByRole('button', { name: 'Toggle menu' });
    await expect(menu).toBeVisible();
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await expect(page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'About Me' })).not.toBeInViewport();
  });

  test('menu opens, navigates and closes', async ({ page }) => {
    await page.goto('/');
    const menu = page.getByRole('button', { name: 'Toggle menu' });
    await menu.click();
    await expect(menu).toHaveAttribute('aria-expanded', 'true');

    const nav = page.getByRole('navigation', { name: 'Primary' });
    await expect(nav.getByRole('link', { name: 'Experience' })).toBeVisible();
    await nav.getByRole('link', { name: 'Experience' }).click();

    await expect(page).toHaveURL(/#experience$/);
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('#experience')).toBeInViewport();
  });

  test('menu offers a resume download', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Toggle menu' }).click();
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Download Resume' }).click(),
    ]);
    expect(download.suggestedFilename()).toBe('Shiva_Shukla_Resume.pdf');
  });

  test('hero photo and contact details are visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('img', { name: 'Portrait of Shiva Shukla' })).toBeVisible();
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await expect(page.locator('#contact')).toContainText('shiva27295@gmail.com');
    await expect(page.locator('#contact')).toContainText('(703) 364-9625');
  });
});
