import test, { expect } from "@playwright/test";

test("Handelling Drag and Drop ",async({page})=>{
    await page.goto('https://jqueryui.com/droppable/')
    await page.waitForTimeout(2000)

    const frame= page.frameLocator('.demo-frame')
    const source= frame.locator('#draggable')
    const target= frame.locator('#droppable')

    await source.dragTo(target)
    await page.waitForTimeout(2000)
    await expect(frame.getByText('Dropped!').last()).toHaveText('Dropped!')

    await page.waitForTimeout(2000)

})