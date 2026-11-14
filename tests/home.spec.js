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
    for (const id of [
      'top',
      'about',
      'work',
      'experience',
      'projects',
      'skills',
      'education',
      'contact',
    ]) {
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
    await expect.poll(() => img.evaluate((el) => el.complete && el.naturalWidth > 0)).toBe(true);
  });

  test('all images on the page load successfully', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const broken = await page.$$eval('img', (imgs) =>
      imgs.filter((i) => !(i.complete && i.naturalWidth > 0)).map((i) => i.src),
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
    ['Projects', 'projects'],
    ['Skills', 'skills'],
    ['Contact', 'contact'],
  ];

  for (const [label, id] of links) {
    test(`header link "${label}" scrolls to #${id}`, async ({ page }) => {
      await page.goto('/');
      await page
        .getByRole('navigation', { name: 'Primary' })
        .getByRole('link', { name: label })
        .click();
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
    await expect(about).toContainText('22%');
    await expect(about).toContainText('INCOSE');
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
      'Agent Gateway',
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
    await expect.poll(async () => (await desc.boundingBox()).y).toBeLessThan(before.y);
  });
});

test.describe('Projects', () => {
  test('lists both projects with live and source links', async ({ page }) => {
    await page.goto('/');
    const section = page.locator('#projects');
    await expect(section.locator('h3')).toHaveText(['Pomodoro Focus Timer', 'TextUtils']);
    for (const [name, live, source] of [
      [
        'Pomodoro Focus Timer',
        'https://shiva701.github.io/Pomodoro/',
        'https://github.com/shiva701/Pomodoro',
      ],
      [
        'TextUtils',
        'https://shiva701.github.io/textutils/',
        'https://github.com/shiva701/textutils',
      ],
    ]) {
      const demo = section.getByRole('link', { name: `Live demo of ${name}` });
      await expect(demo).toHaveAttribute('href', live);
      await expect(demo).toHaveAttribute('target', '_blank');
      await expect(section.getByRole('link', { name: `Source code of ${name}` })).toHaveAttribute(
        'href',
        source,
      );
    }
  });
});

test.describe('Experience accordion', () => {
  test('lists all roles from the resume', async ({ page }) => {
    await page.goto('/');
    const rows = page.locator('.exp__row');
    await expect(rows).toHaveCount(4);
    await expect(rows.nth(0)).toContainText('Software Engineer Specialist');
    await expect(rows.nth(1)).toContainText('Associate Software Engineer');
    await expect(rows.nth(2)).toContainText('Senior Software Engineer');
    await expect(rows.nth(2)).toContainText('Oct 2020 - Aug 2021');
    await expect(rows.nth(3)).toContainText('Software Engineer');
    await expect(rows.nth(3)).toContainText('Jul 2018 - Sep 2020');
  });

  test('groups roles under each company with an overall timeline', async ({ page }) => {
    await page.goto('/');
    const companies = page.locator('.exp__company');
    await expect(companies).toHaveCount(2);

    const ptc = companies.nth(0);
    await expect(ptc.locator('.exp__company-head')).toContainText('PTC Inc.');
    await expect(ptc.locator('.exp__company-head')).toContainText('Aug 2023 - Oct 2026');
    await expect(ptc.locator('.exp__row')).toHaveCount(2);

    const gl = companies.nth(1);
    const head = gl.locator('.exp__company-head');
    await expect(head).toContainText('GlobalLogic');
    await expect(head).toContainText('Jul 2018 - Aug 2021');
    await expect(head).toContainText('3 yrs 2 mos');
    await expect(head).not.toContainText('roles');
    await expect(page.locator('#experience .round-btn')).toHaveCount(0);
    const roles = gl.locator('.exp__row');
    await expect(roles).toHaveCount(2);
    await expect(roles.nth(0)).toContainText('Senior Software Engineer');
    await expect(roles.nth(0)).toContainText('11 mos');
    await expect(roles.nth(0).locator('.exp__promoted')).toBeVisible();
    await expect(roles.nth(1)).toContainText('2 yrs 3 mos');
    await expect(roles.nth(1).locator('.exp__promoted')).toHaveCount(0);
  });

  test('first role is expanded by default', async ({ page }) => {
    await page.goto('/');
    const first = page.locator('.exp__summary').first();
    await expect(first).toHaveAttribute('aria-expanded', 'true');
    await expect(
      page.getByText('FastMCP gateway that exposes registered agent tools'),
    ).toBeVisible();
  });

  test('clicking a role expands it and collapses the others', async ({ page }) => {
    await page.goto('/');
    const toggles = page.locator('.exp__summary');
    await toggles.nth(2).click();

    await expect(toggles.nth(2)).toHaveAttribute('aria-expanded', 'true');
    await expect(toggles.nth(0)).toHaveAttribute('aria-expanded', 'false');
    await expect(page.getByText('Kafka with the Spring Cloud Streams API')).toBeVisible();
    await expect(
      page.getByText('FastMCP gateway that exposes registered agent tools'),
    ).toBeHidden();
  });

  test('clicking the open role collapses it', async ({ page }) => {
    await page.goto('/');
    const first = page.locator('.exp__summary').first();
    await first.click();
    await expect(first).toHaveAttribute('aria-expanded', 'false');
    await expect(
      page.getByText('FastMCP gateway that exposes registered agent tools'),
    ).toBeHidden();
  });
});

test.describe('Skills & education', () => {
  test('shows nine skill groups', async ({ page }) => {
    await page.goto('/');
    const labels = page.locator('#skills .skill-card__label');
    await expect(labels).toHaveCount(9);
    await expect(page.locator('#skills')).toContainText('Spring Boot');
    await expect(page.locator('#skills')).toContainText('LangChain');
  });

  test('shows both degrees', async ({ page }) => {
    await page.goto('/');
    const edu = page.locator('#education');
    await expect(edu).toContainText('George Mason University');
    await expect(edu).toContainText('Master of Science, Computer Science');
    await expect(edu).toContainText('Harcourt Butler Technological Institute');
    await expect(edu).toContainText('Graduate Teaching Assistant');
    await expect(edu).toContainText('Data Structures and Algorithms · Jan 2022 - May 2023');
  });

  test('opens the GMU award certificate in a viewer', async ({ page }) => {
    await page.goto('/');
    const edu = page.locator('#education');
    await edu.getByRole('button', { name: /Distinguished Academic Achievement/ }).click();
    const dialog = page.getByRole('dialog', { name: 'Distinguished Academic Achievement' });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('img', { name: /certificate/ })).toBeVisible();
    await expect(dialog.locator('img, a[download]')).toHaveCount(0);
    await dialog.getByRole('button', { name: 'Close' }).click();
    await expect(dialog).toBeHidden();
  });

  for (const name of ['General Quiz, 3rd Place', 'Table Tennis Boys Doubles, 1st Prize']) {
    test(`opens the HBTI "${name}" certificate in a viewer`, async ({ page }) => {
      await page.goto('/');
      await page
        .locator('#education')
        .getByRole('button', { name: new RegExp(name) })
        .click();
      const dialog = page.getByRole('dialog', { name });
      await expect(dialog.getByRole('img', { name: /certificate/ })).toBeVisible();
      await expect(dialog.locator('img, a[download]')).toHaveCount(0);
      await page.keyboard.press('Escape');
      await expect(dialog).toBeHidden();
    });
  }
});
