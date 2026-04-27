import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bajajfinservhealth.in/');
  await expect(page.getByTestId('consult-doctor-card')).toContainText('Doctors');
  await page.getByTestId('consult-doctor-card').click();
  await page.getByTestId('CloseIcon').click();
  await page.getByText('HomeIn-clinic ...Pune - 411005Video ConsultationIn-Clinic ConsultationAll').click();
  await page.goto('https://www.bajajfinservhealth.in/in-clinic-consultation?utm_source=hrx_dweb');
  await page.getByTestId('CloseIcon').click();
  await expect(page.getByTestId('ws4VQZkdYoN6jveXXyZQb9').getByTestId('veE1ZwdvvUxGNvcM4HnY7X')).toContainText('All specialties');
  await page.getByRole('link', { name: 'General Physician speciality' }).click();
  await page.getByRole('heading', { name: 'Dr. Prasad Honap' }).click();
  await page.getByText('6:00 PM').click();
  await expect(page.getByTestId('q34ZMUQQQeGfnm5Rqkxf5s')).toContainText('Appointment Details');
  await page.getByTestId('call-us-botton').click();
  await page.locator('div').filter({ hasText: 'Request a callbackNameInvalid' }).first().click();
  await page.getByRole('img', { name: 'logo' }).click();
});