import { Page,Locator } from "@playwright/test";


export interface SupplierData
{
    name: string;
    address: string;
    city: string;
    country: string;
    contactPerson: string;
    phone: string;
    email: string;
    mobile: string;
    notes: string;

}
export class supplierPage
{
    readonly page: Page;
    readonly supplierlink:Locator;
    readonly clickaddicon:Locator;
    readonly supplierNum: Locator;
    readonly supplierName: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly country: Locator;
    readonly contactPerson: Locator;
    readonly email: Locator;
    readonly phone: Locator;
    readonly mobile: Locator;
    readonly notes: Locator;
    readonly addButton: Locator;
    readonly clickconfirmOk: Locator;
    readonly clickAlertok:Locator;
    readonly searchpanel:Locator;
    readonly searchtextbox: Locator;
    readonly searchButton:Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.supplierlink = page.getByRole('link', { name: 'Suppliers' })  
        this.clickaddicon =page.getByRole('link', { name: '+' }).first()  
        this.supplierNum = page.getByRole('textbox', { name: 'Supplier Number *' });
        this.supplierName = page.getByRole('textbox', { name: 'Supplier Name *' })
        this.address = page.getByRole('textbox', { name: 'Address *' })
        this.city = page.getByRole('textbox', { name: 'City *' })
        this.country = page.getByRole('textbox', { name: 'Country *' })
        this.contactPerson = page.getByRole('textbox', { name: 'Contact Person *' })
        this.phone = page.getByRole('textbox', { name: 'Phone Number *' })
        this.email = page.getByRole('textbox', { name: 'Email *' })
        this.mobile = page.getByRole('textbox', { name: 'Mobile Number *' })
        this.notes = page.getByRole('textbox', { name: 'Notes *' })
        this.addButton =page.getByRole('button', { name: 'Add' })
        this.clickconfirmOk = page.getByRole('button', { name: 'OK!' })
        this.clickAlertok = page.getByRole('button', { name: 'OK' })
        this.searchpanel =page.locator("//span[@data-caption='Search']");
        this.searchtextbox = page.locator('//*[@id="psearch"]');
        this.searchButton =page.locator('//*[@id="btnsubmit"]')

    }

    async createSupplier(data:SupplierData)
    {
        // Supplier Number is auto-filled, so we skip it
        await this.supplierlink.click();
        await this.clickaddicon.click();
        const Exp_Number:any =await this.supplierNum.getAttribute("value")
        await this.supplierName.fill(data.name);
        await this.address.fill(data.address);
        await this.city.fill(data.city);
        await this.country.fill(data.country);
        await this.contactPerson.fill(data.contactPerson);
        await this.phone.fill(data.phone);
        await this.email.fill(data.email);
        await this.mobile.fill(data.mobile);
        await this.notes.fill(data.notes);
        await this.addButton.click();
        await this.clickconfirmOk.click();
        await this.clickAlertok.click();
        await this.searchpanel.click();
        await this.searchtextbox.clear();
        await this.searchtextbox.fill(Exp_Number);
        await this.searchButton.click()

    }

}