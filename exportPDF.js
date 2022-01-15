// uses puppeteer to save resume as PDF (required for formatting reasons)
const puppeteer = require("puppeteer");
const path = require("path");
const concurrently = require("concurrently");
const chalk = require("chalk");

const exportCmd = "npm run export:html";

(async () => {
  try {
    // generate html using script
    const { result: resultPromise } = concurrently([exportCmd]);
    const [{ command }] = await resultPromise;
    if (command == null || command.killed || command.index != 0) {
      throw "Error running: " + exportCmd;
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file:///${path.resolve("./resume.html")}`);
    const pdfPath = path.resolve("./resume.pdf");
    await page.pdf({ path: pdfPath });
    await page.close();
    await browser.close();
    console.log(
      chalk.green(`Done! Resume successfully exported as PDF at:\n  ${pdfPath}`)
    );
  } catch (err) {
    console.error(err);
  }
})();
