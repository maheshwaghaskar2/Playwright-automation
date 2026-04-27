import test from "@playwright/test";

import { loginPage } from "../Pages/loginPage";
import { SupplierData,supplierPage } from "../Pages/supplierPage";

test.describe('Supplier Management ',()=>{

    test('Should create a new supplier with valid data ',async({page})=>{

        const loginpage = new loginPage(page)
        const supplierpage= new supplierPage(page)

        const testData: SupplierData = {
            name: 'TechCorp 123',
            address: '123 Main St \'',
            city: 'Hyderabad',
            country: 'India',
            contactPerson: 'John Doe',
            phone: '040123456',
            email: 'test@techcorp.com',
            mobile: '9876543210',
            notes: 'Verified Supplier'
        };

        await page.goto('http://webapp.qedgetech.com/');
        await loginpage.login('admin','master')

        // navigate to supplier creation 

        await supplierpage.createSupplier(testData)

    })




})