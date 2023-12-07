import { test, expect } from '@playwright/test';
import {FirstForm} from '../pages/FirstForm';
import {SecondForm} from '../pages/SecondForm';
import {ThirdForm} from '../pages/ThirdForm';



test('Post-interview automation exercise', async ({ page }) => {

    const userData = JSON.parse(JSON.stringify(require("../data/userData.json")));

    const firstForm = new FirstForm(page);
    const secondForm = new SecondForm(page);
    const thirdForm = new ThirdForm(page);

    await firstForm.open();
    await firstForm.fillFirstForm(userData.firstName, userData.lastName, userData.emailAddress, userData.street, userData.city, userData.zipCode);

    await secondForm.clickNoButtons();
    await secondForm.goToNextPage();

    await thirdForm.compareFullName(userData.firstName, userData.lastName);
    await thirdForm.goToNextPage();
    await thirdForm.getURL();


   

  });

