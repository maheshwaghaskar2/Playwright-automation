import { Page,Locator } from "@playwright/test";


export class loginPage{

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly resetButton: Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'User Name' }); 
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.resetButton = page.getByRole('button', { name: 'Reset' });

    }

    async login(user:string , pass:string)
    {
        await this.usernameInput.fill(user)
        await this.passwordInput.fill(pass)
        await this.loginButton.click()
    }

    async resetForm()
    {
        await this.resetButton.click()
    }

}