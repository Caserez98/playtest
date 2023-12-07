import {Page } from '@playwright/test';

export class SecondForm {
    constructor(public page: Page) {
    }


    async clickNoButtons() {
        const child = this.page.getByText('No');
        const buttons = await this.page.locator('//label').filter({ has: child }).all();

        for (let i = 1; i < buttons.length; i++){    
            await buttons[i].click();    
        } 

    }

    async goToNextPage() {
        await this.page.getByRole('button', { name: 'Next' }).click();

    }
  
   
  }
  
  