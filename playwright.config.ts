import { defineConfig } from '@playwright/test';
import { cucumberReporter, defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import path from 'path';
import { countryUrls } from './test/config/CountryUrls';
dotenv.config({ path: path.resolve(__dirname, '.env') });

const workers = Number(process.env.WORKERS || '1');
const retries = Number(process.env.RETRIES || '0');
const country = (process.env.COUNTRY || 'CO').toUpperCase();
const baseUrl = countryUrls[country as keyof typeof countryUrls] || countryUrls.CO;

const htmlReportDir = path.resolve(__dirname, 'playwright-report');
const cucumberReportFile = path.resolve(__dirname, 'cucumber-report', 'cucumber-report.html');

const testDir = defineBddConfig({
  features: 'test/features/**/*.feature',
  steps: ['test/steps/**/*.ts']
});

export default defineConfig({
  testDir: testDir,
  fullyParallel: true,
  workers,
  retries,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: htmlReportDir }],
    cucumberReporter('html', { outputFile: cucumberReportFile }),
  ],
  quiet: true,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    baseURL: baseUrl,
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    }
  ]
});
