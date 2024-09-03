import Navbar from '../pages/nav_bar.page';
import validData = require('../fixtures/valid_data.json');
import SwipePage from '../pages/swipe.page';
// import { swipeRight, swipeDown } from '../fun/swipe_fun';

async function swipeRight() {
    const { width, height } = await driver.getWindowRect();
    const startY = Math.floor(height * 0.6); // Середина екрану по висоті
    const startX = Math.floor(width * 0.6);  // Початкова точка біля лівого краю екрану (20% від ширини екрану)
    const endX = Math.floor(width * 0.2);    // Кінцева точка біля правого краю екрану (80% від ширини екрану)

    await driver.touchPerform([
        {
            action: "press",
            options: { x: startX, y: startY },
        },
        {
            action: "wait",
            options: { ms: 500 },
        },
        {
            action: "moveTo",
            options: { x: endX, y: startY },
        },
        {
            action: "release",
        },
    ]);
}

async function swipeDown() {
    const { height } = await driver.getWindowRect();
    const startX = Math.floor(height * 0.5);
    const startY = Math.floor(height * 0.8);
    const endY = Math.floor(height * 0.2);

    await driver.touchPerform([
        {
            action: "press",
            x: startX,
            y: startY,
        },
        {
            action: "wait",
            ms: 500,
        },
        {
            action: "moveTo",
            x: startX,
            y: endY,
        },
        {
            action: "release",
        },
    ]);


}


describe("Swipe", () => {
    it("TC_4 Horizontal swipe ", async () => {
        await Navbar.swipeButton.click();
        await swipeRight;
        const newInfoBoxText = await SwipePage.nextBoxText.getText()
        await expect(newInfoBoxText.trim()).toEqual(validData.textBox);
    });

    it("TC_5 Vertical swipe", async () => {
        await Navbar.swipeButton.click();
        await swipeDown;
        const wdioFindMessage = await SwipePage.findMessage.getText();
        await expect(wdioFindMessage.trim()).toEqual(validData.foundWDIO);
    });

});