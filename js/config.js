/* 員工入口資料設定
 * 之後要新增 workplace，只要在對應 agent 的 workplaces 陣列裡加一筆即可，例如：
 *   { id: "03", name: "VAC", url: "https://example.com" }
 * id 請用兩位數（01–10）。沒有 url 的項目會顯示成灰色「準備中」。
 * 十個位置若沒寫滿，畫面會自動補上「準備中」。
 */
window.ISMC_PORTAL = {
  company: "ismc 新新策劃工程顧問有限公司",
  agents: [
    {
      id: "01",
      name: "ismc CEO",
      image: "assets/agents/01-ceo.jpg",
      imagePosition: "center center",
      workplaces: []
    },
    {
      id: "02",
      name: "ismc COO",
      image: "assets/agents/02-coo.jpg",
      imagePosition: "center 78%",
      workplaces: []
    },
    {
      id: "03",
      name: "Data Center Design",
      image: "assets/agents/03-datacenter.jpg",
      imagePosition: "center center",
      workplaces: []
    },
    {
      id: "04",
      name: "HVAC Design",
      image: "assets/agents/04-hvac.jpg",
      imagePosition: "center 25%",
      workplaces: []
    },
    {
      id: "05",
      name: "Electric Design",
      image: "assets/agents/05-electric.jpg",
      imagePosition: "center center",
      workplaces: []
    },
    {
      id: "06",
      name: "Clean Room Design",
      image: "assets/agents/06-cleanroom.jpg",
      imagePosition: "center 30%",
      workplaces: []
    },
    {
      id: "07",
      name: "Hook Up",
      image: "assets/agents/07-hookup.jpg",
      imagePosition: "center center",
      workplaces: [
        { id: "01", name: "PCW", url: "https://hook-up-pcw-07-1.ismc-7100.chatgpt.site" },
        { id: "02", name: "CDA", url: "https://hook-up-cda-07-2.ismc-7100.chatgpt.site" }
      ]
    },
    {
      id: "08",
      name: "Engineering Management",
      image: "assets/agents/08-engineering.jpg",
      imagePosition: "center center",
      workplaces: []
    },
    {
      id: "09",
      name: "CAD auto",
      image: "assets/agents/09-cad.jpg",
      imagePosition: "center 55%",
      workplaces: []
    },
    {
      id: "10",
      name: "Digital twin clean room",
      image: "assets/agents/10-digital-twin.jpg",
      imagePosition: "center 40%",
      workplaces: [
        { id: "01", name: "數位孿生無塵室", url: "https://ismc-cleanroom-twin-10.ismc-7100.chatgpt.site" }
      ]
    }
  ]
};
