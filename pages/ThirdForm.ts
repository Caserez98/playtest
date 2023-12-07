import {Page,expect } from '@playwright/test';

export class ThirdForm {
    constructor(public page: Page) {
    }

    async compareFullName(firstName: string, secondName: string){
        const input=  this.page.getByLabel('Additional Information');

        return expect(input).toHaveValue(`${firstName} ${secondName}`);

    }


    async goToNextPage() {
        
        await this.page.getByRole('button', { name: 'Submit form' }).click();
    }
  
    async getURL() {
        return  expect(this.page).toHaveURL( new RegExp('https://www.experian.com/employer-services'));
    }
    
  }
  
  