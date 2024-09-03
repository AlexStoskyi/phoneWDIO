import { Browser } from 'webdriverio';

// Функція для горизонтального свайпу праворуч
export async function swipeRight(driver: Browser): Promise<void> {
    const { width, height } = await driver.getWindowRect();
    const startY = Math.floor(height * 0.7); // Початкова точка по висоті (70% від висоти екрану)
    const startX = Math.floor(width * 0.5);  // Початкова точка по ширині (50% від ширини екрану)
    const endX = Math.floor(width * 0.2);    // Кінцева точка по ширині (20% від ширини екрану)

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
            x: endX,
            y: startY,
        },
        {
            action: "release",
        },
    ]);
}

// Функція для вертикального свайпу вниз
export async function swipeDown(driver: Browser): Promise<void> {
    const { width, height } = await driver.getWindowRect();
    const startX = Math.floor(width * 0.5);  // Середина екрану по ширині
    const startY = Math.floor(height * 0.8); // Початкова точка по висоті (80% від висоти екрану)
    const endY = Math.floor(height * 0.2);   // Кінцева точка по висоті (20% від висоти екрану)

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
