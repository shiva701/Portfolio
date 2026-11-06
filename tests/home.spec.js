import { test, expect } from '@playwright/test';

test.describe('Page basics', () => {
  test('loads without console errors and has the right title', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));

    await page.goto('/');
    await expect(page).toHaveTitle('Shiva Shukla — Software Engineer');
    await page.waitForLoadState('networkidle');
    expect(errors).toEqual([]);
  });

  test('renders every main section', async ({ page }) => {
    await page.goto('/');
    for (const id of ['top', 'about', 'work', 'experience', 'skills', 'education', 'contact']) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
    await expect(page.locator('footer')).toBeVisible();
  });
});

test.describe('Hero', () => {
  test('shows greeting, intro and stats', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('#top');
    await expect(hero.getByRole('heading', { level: 1, name: 'Hello' })).toBeVisible();
    await expect(hero).toContainText("It's Shiva, a software engineer");
    await expect(hero).toContainText('Years of experience');
    await expect(hero).toContainText('3.93');
  });

  test('portrait photo loads', async ({ page }) => {
    await page.goto('/');
    const img = page.getByRole('img', { name: 'Portrait of Shiva Shukla' });
    await expect(img).toBeVisible();
    await expect
      .poll(() => img.evaluate((el) => el.complete && el.naturalWidth > 0))
      .toBe(true);
  });

  test('all images on the page load successfully', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const broken = await page.$$eval('img', (imgs) =>
      imgs.filter((i) => !(i.complete && i.naturalWidth > 0)).map((i) => i.src)
    );
    expect(broken).toEqual([]);
  });

  test('"Scroll down" moves to the About section', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Scroll down' }).click();
    await expect(page).toHaveURL(/#about$/);
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeInViewport();
  });
});

test.describe('Navigation', () => {
  const links = [
    ['About Me', 'about'],
    ['Work', 'work'],
    ['Experience', 'experience'],
    ['Skills', 'skills'],
    ['Contact', 'contact'],
  ];

  for (const [label, id] of links) {
    test(`header link "${label}" scrolls to #${id}`, async ({ page }) => {
      await page.goto('/');
      await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: label }).click();
      await expect(page).toHaveURL(new RegExp(`#${id}$`));
      await expect(page.locator(`#${id}`)).toBeInViewport();
    });
  }

  test('footer navigation links point at sections', async ({ page }) => {
    await page.goto('/');
    const footerNav = page.getByRole('navigation', { name: 'Footer' });
    await expect(footerNav.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#top');
    for (const [label, id] of links) {
      await expect(footerNav.getByRole('link', { name: label })).toHaveAttribute('href', `#${id}`);
    }
  });

  test('logo links back to top', async ({ page }) => {
    await page.goto('/#contact');
    await page.getByRole('link', { name: 'Home' }).first().click();
    await expect(page.getByRole('heading', { name: 'Hello' })).toBeInViewport();
  });
});

test.describe('About', () => {
  test('shows summary, stat and LinkedIn thumbnail link', async ({ page }) => {
    await page.goto('/');
    const about = page.locator('#about');
    await expect(about).toContainText('6+ years of experience');
    await expect(about).toContainText('80%');
    const thumb = about.getByRole('link', { name: 'LinkedIn profile' });
    await expect(thumb).toHaveAttribute('href', 'https://linkedin.com/in/shivashuklagmu');
    await expect(thumb).toHaveAttribute('target', '_blank');
  });
});

test.describe('Featured work', () => {
  test('lists four projects', async ({ page }) => {
    await page.goto('/');
    const titles = page.locator('#work h3');
    await expect(titles).toHaveCount(4);
    await expect(titles).toContainText([
      'FastMCP Agent Gateway',
      'Requirement Assistant AI Tool',
      'Production Observability',
      'Reactive Learning Platform APIs',
    ]);
  });

  test('hovering a card reveals its description', async ({ page }) => {
    await page.goto('/');
    const card = page.locator('.work__item').first();
    const desc = card.locator('.work__desc');
    const before = await desc.boundingBox();
    await card.hover();
    await expect
      .poll(async () => (await desc.boundingBox()).y)
      .toBeLessThan(before.y);
  });
});

test.describe('Experience accordion', () => {
  test('lists all roles from the resume', async ({ page }) => {
    await page.goto('/');
    const rows = page.locator('.exp__row');
    await expect(rows).toHaveCount(3);
    await expect(rows.nth(0)).toContainText('Software Engineer Specialist');
    await expect(rows.nth(1)).toContainText('Associate Software Engineer');
    await expect(rows.nth(2)).toContainText('GlobalLogic');
  });

  test('first role is expanded by default', async ({ page }) => {
    await page.goto('/');
    const first = page.locator('.exp__summary').first();
    await expect(first).toHaveAttribute('aria-expanded', 'true');
    await expect(page.getByText('FastMCP gateway exposing agent tools')).toBeVisible();
  });

  test('clicking a role expands it and collapses the others', async ({ page }) => {
    await page.goto('/');
    const toggles = page.locator('.exp__summary');
    await toggles.nth(2).click();

    await expect(toggles.nth(2)).toHaveAttribute('aria-expanded', 'true');
    await expect(toggles.nth(0)).toHaveAttribute('aria-expanded', 'false');
    await expect(page.getByText('Kafka with Spring Cloud Streams')).toBeVisible();
    await expect(page.getByText('FastMCP gateway exposing agent tools')).toBeHidden();
  });

  test('clicking the open role collapses it', async ({ page }) => {
    await page.goto('/');
    const first = page.locator('.exp__summary').first();
    await first.click();
    await expect(first).toHaveAttribute('aria-expanded', 'false');
    await expect(page.getByText('FastMCP gateway exposing agent tools')).toBeHidden();
  });
});

test.describe('Skills & education', () => {
  test('shows six skill groups', async ({ page }) => {
    await page.goto('/');
    const labels = page.locator('.skill-card__label');
    await expect(labels).toHaveCount(6);
    await expect(page.locator('#skills')).toContainText('Spring Boot');
    await expect(page.locator('#skills')).toContainText('LangChain');
  });

  test('shows both degrees', async ({ page }) => {
    await page.goto('/');
    const edu = page.locator('#education');
    await expect(edu).toContainText('George Mason University');
    await expect(edu).toContainText('Master of Science, Computer Science');
    await expect(edu).toContainText('Harcourt Butler Technological Institute');
  });
});
