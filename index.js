const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    let url = 'https://www.correoargentino.com.ar/MiCorreo/public/login'
    await page.goto(url)

    const selectors = ['#email', '#password']
    const values = ['choboku@gmail.com', 'choboku']

    while (page.url() == url) {
        await fillForm(selectors, values, page)
    }

    url = 'https://www.correoargentino.com.ar/MiCorreo/public/envio'
    await page.goto(url)

    setTimeout(async () => {
        url = 'https://www.correoargentino.com.ar/MiCorreo/public/logout'
        await page.goto(url)
        browser.close()
    }, 3000);

})();

async function fillForm(selectors, values, page) {
    for (let i = 0; i < selectors.length; i++) {
        await page.waitForSelector(selectors[i])
        await page.type(selectors[i], values[i])
    }
    await page.keyboard.press('Enter')
    await page.waitForNavigation()
}