import Navbar from '../pages/nav_bar.page';
import validData from '../fixtures/valid_data.json';
import SwipePage from '../pages/swipe.page';
import { remote } from 'webdriverio';

// import { swipeRight, swipeDown } from '../fun/swipe_fun';

async function swipeRight() {
    const { width, height } = await driver.getWindowRect();
    const startY = Math.floor(height * 0.6);
    const startX = Math.floor(width * 0.6);
    const endX = Math.floor(width * 0.2);

    await driver.touchAction([
        { action: 'press', x: startX, y: startY },
        { action: 'wait', ms: 500 },
        { action: 'moveTo', x: endX, y: startY },
        { action: 'release' }
    ]);
}

async function swipeDown() {
    const { height } = await driver.getWindowRect();
    const startX = Math.floor(height * 0.5);
    const startY = Math.floor(height * 0.8);
    const endY = Math.floor(height * 0.2);

    await driver.touchAction([
        { action: 'press', x: startX, y: startY },
        { action: 'wait', ms: 500 },
        { action: 'moveTo', x: startX, y: endY },
        { action: 'release' }
    ]);
}

describe("Swipe", () => {
    it("TC_4 Horizontal swipe", async () => {
        await Navbar.swipeButton.click();
        await swipeRight();
        const newInfoBoxText = await SwipePage.nextBoxText.getText();
        await expect(newInfoBoxText.trim()).toEqual(validData.textBox);
    });

    it("TC_5 Vertical swipe", async () => {
        await Navbar.swipeButton.click();
        await swipeDown();
        const wdioFindMessage = await SwipePage.findMessage.getText();
        await expect(wdioFindMessage.trim()).toEqual(validData.foundWDIO);
    });
});