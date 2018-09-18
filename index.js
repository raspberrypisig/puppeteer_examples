const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false, slowMo: 250});
  const page = await browser.newPage();
  await page.goto('https://www.melbpc.org.au/qrcheck/?contact_id=856', {waitUntil: 'networkidle2'});
  const membership = await page.$('table tr:nth-child(3) td:nth-child(2)');
  const boo = await membership.getProperty('textContent');
  const data = await boo.jsonValue();
  console.log(data);
  await browser.close();
})();
