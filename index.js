const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
      headless: false //브라우저를 잠깐 열어줌
      // defaultViewport: 
  }).then(async browser => {
    const page = await browser.newPage();
    await page.goto("http://127.0.0.1:5500/index.html", {waitUntil: "networkidle2"});

    page.waitForNavigation(), //해당페이지 탐색이 완료되면 클릭 이벤트 실행
    page.click('a.btn-btn');
    page.screenshot({path: "it.png"});
  });
})();