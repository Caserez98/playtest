import {Page } from '@playwright/test';

export class FirstForm {
    constructor(public page: Page) {
    }
  
    async open() {
      await this.page.goto('https://surveyrc.taxcreditco.com/automation-challenge');
    }
  
    async getTitle() {
      return await this.page.title();
    }

    async fillFirstForm(firstName: string, lastName: string, emailAddress: string,streetAddress: string,city: string,zipCode: string) {
        await this.page.getByLabel('First Name').fill(firstName);
        await this.page.getByLabel('Last Name').fill(lastName);
        await this.page.getByLabel('Email Address').fill(emailAddress);
        await this.page.getByLabel('Street Address').fill(streetAddress);
        await this.page.getByLabel('City').fill(city);
        await this.page.getByLabel('Zip Code').fill(zipCode);
        await this.page.getByRole('button', { name: 'Next' }).click();
    }
  
    // Add more methods to interact with elements on the home page
    // For example:
    // async clickButton() {
    //   await this.page.click('button-selector');
    // }
  
    // async fillForm(username, password) {
    //   await this.page.type('#username', username);
    //   await this.page.type('#password', password);
    //   await this.page.click('#submit-button');
    // }
  }
  
  