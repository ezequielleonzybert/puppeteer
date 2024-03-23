const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto('https://www.correoargentino.com.ar/MiCorreo/public/login')

    const selectors = ['#email', '#password']
    const values = ['choboku@gmail.com', 'choboku']
    fillForm(selectors, values, page)
    await setTimeout(() => { page.goto('https://www.correoargentino.com.ar/MiCorreo/public/logout') }, 3000);
    // browser.close()

})();

async function fillForm(selectors, values, page) {
    for (let i = 0; i < selectors.length; i++) {
        await page.waitForSelector(selectors[i])
        await page.type(selectors[i], values[i])
    }
    await page.keyboard.press('Enter')
}