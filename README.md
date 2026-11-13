# ismc 員工入口

線上網址：https://ismc-staff-portal.deed.page/

新新策劃工程顧問有限公司的獨立員工入口網站。純靜態 HTML / CSS / JS，可直接用 GitHub Pages 發布。

## 結構

- 首頁「員工入口」：十個等寬直欄，對應 01 到 10 十個 agent。點進去會到該單位頁。
- 每個單位頁有 10 個 workplace 位置。目前只有 **07 Hook Up** 已接上：
  - 01 PCW：https://hook-up-pcw-07-1.ismc-7100.chatgpt.site
  - 02 CDA：https://hook-up-cda-07-2.ismc-7100.chatgpt.site
  - 03–10：灰色「準備中」
- 其他單位的十個位置目前都是「準備中」。
- 每頁都可回到員工入口。外部連結會另開分頁。

## 如何新增 workplace

編輯 [`js/config.js`](js/config.js)，在對應 agent 的 `workplaces` 陣列加上一筆即可，不必改其他檔案。例如要在 07 Hook Up 加第 3 個 workplace：

```js
{
  id: "07",
  name: "Hook Up",
  image: "assets/agents/07-hookup.jpg",
  imagePosition: "center center",
  workplaces: [
    { id: "01", name: "PCW", url: "https://hook-up-pcw-07-1.ismc-7100.chatgpt.site" },
    { id: "02", name: "CDA", url: "https://hook-up-cda-07-2.ismc-7100.chatgpt.site" },
    { id: "03", name: "VAC", url: "https://example.com" }
  ]
}
```

- `id` 請用兩位數（`01` 到 `10`），會對應畫面上的位置。
- 有 `url` 的項目會變成可點的按鍵；沒有 `url`、或沒寫到的位置，會自動顯示成灰色「準備中」。
- 改完後重新發布網站即可。

## 本機預覽

在專案根目錄開一個靜態伺服器，例如：

```bash
python3 -m http.server 8080
```

然後打開 http://127.0.0.1:8080/

## 照片來源

首頁直欄照片來自 [Pexels](https://www.pexels.com/license/)，已下載到 `assets/agents/`，不依賴外連。

| 欄位 | 檔案 | Pexels 編號 |
| --- | --- | --- |
| 01 ismc CEO | `01-ceo.jpg` | 18824803 |
| 02 ismc COO | `02-coo.jpg` | 31709064 |
| 03 Data Center Design | `03-datacenter.jpg` | 4508751 |
| 04 HVAC Design | `04-hvac.jpg` | 30749458 |
| 05 Electric Design | `05-electric.jpg` | 39639325 |
| 06 Clean Room Design | `06-cleanroom.jpg` | 8442447 |
| 07 Hook Up | `07-hookup.jpg` | 5711732 |
| 08 Engineering Management | `08-engineering.jpg` | 7108783 |
| 09 CAD auto | `09-cad.jpg` | 34573691 |
| 10 Digital twin clean room | `10-digital-twin.jpg` | 13203191 |
