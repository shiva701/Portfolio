import { test, expect } from '@playwright/test';
import fs from 'node:fs';

const EMAIL = 'shiva27295@gmail.com';
const PHONE = '(703) 364-9625';

test.describe('Contact section', () => {
  test('shows email, phone, LinkedIn, GitHub and location', async ({ page }) => {
    await page.goto('/');
    const contact = page.locator('#contact');
    await expect(contact).toContainText(EMAIL);
    await expect(contact).toContainText(PHONE);
    await expect(contact).toContainText('King of Prussia, PA');

    await expect(contact.getByRole('link', { name: new RegExp(EMAIL) })).toHaveAttribute('href', `mailto:${EMAIL}`);
    await expect(contact.getByRole('link', { name: /703/ })).toHaveAttribute('href', 'tel:+17033649625');

    const linkedin = contact.getByRole('link', { name: /LinkedIn/ });
    await expect(linkedin).toHaveAttribute('href', 'https://linkedin.com/in/shivashuklagmu');
    await expect(linkedin).toHaveAttribute('target', '_blank');
    await expect(linkedin).toHaveAttribute('rel', /noreferrer/);

    const github = contact.getByRole('link', { name: /GitHub/ });
    await expect(github).toHaveAttribute('href', 'https://github.com/shiva701');
    await expect(github).toHaveAttribute('target', '_blank');
  });

  test('"Say Hello" opens an email', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Say Hello' })).toHaveAttribute('href', `mailto:${EMAIL}`);
  });

  test('footer shows clickable email and phone', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer.getByRole('link', { name: EMAIL })).toHaveAttribute('href', `mailto:${EMAIL}`);
    await expect(footer.getByRole('link', { name: PHONE })).toHaveAttribute('href', 'tel:+17033649625');
  });

  test('banner "Let\'s talk" jumps to contact', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: "Let's talk" }).click();
    await expect(page).toHaveURL(/#contact$/);
    await expect(page.locator('#contact')).toBeInViewport();
  });
});

test.describe('Resume download', () => {
  test('resume PDF is served', async ({ request }) => {
    const res = await request.get('/Shiva_Shukla_Resume.pdf');
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('application/pdf');
    const body = await res.body();
    expect(body.subarray(0, 5).toString()).toBe('%PDF-');
  });

  test('every "Download Resume" link has the download attribute', async ({ page }) => {
    await page.goto('/');
    const links = page.locator('a[href="/Shiva_Shukla_Resume.pdf"]');
    expect(await links.count()).toBeGreaterThanOrEqual(4);
    for (const link of await links.all()) {
      await expect(link).toHaveAttribute('download', '');
    }
  });

  const triggers = [
    ['header', (page) => page.locator('header').getByRole('link', { name: 'Download Resume' })],
    ['experience section', (page) => page.locator('#experience .exp__head').getByRole('link', { name: 'Download Resume' })],
    ['banner', (page) => page.locator('.banner').getByRole('link', { name: 'Download Resume' })],
    ['contact section', (page) => page.locator('#contact').getByRole('link', { name: 'Download Resume' })],
  ];

  for (const [where, locate] of triggers) {
    test(`clicking download in the ${where} saves the PDF`, async ({ page }) => {
      await page.goto('/');
      const [download] = await Promise.all([page.waitForEvent('download'), locate(page).click()]);
      expect(download.suggestedFilename()).toBe('Shiva_Shukla_Resume.pdf');
      const file = await download.path();
      expect(fs.statSync(file).size).toBeGreaterThan(10_000);
      expect(fs.readFileSync(file).subarray(0, 5).toString()).toBe('%PDF-');
    });
  }
});
