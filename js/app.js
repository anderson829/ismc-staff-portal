(function () {
  const SLOT_COUNT = 10;
  const app = document.getElementById("app");
  const data = window.ISMC_PORTAL;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function findAgent(id) {
    return data.agents.find(function (agent) {
      return agent.id === id;
    });
  }

  function route() {
    const hash = (location.hash || "#/").replace(/^#/, "");
    const parts = hash.split("/").filter(Boolean);
    if (parts.length === 0) {
      renderHome();
      return;
    }
    const agent = findAgent(parts[0]);
    if (!agent) {
      renderHome();
      return;
    }
    renderAgent(agent);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderHome() {
    document.title = "員工入口｜" + data.company;
    const columns = data.agents
      .map(function (agent) {
        const pos = agent.imagePosition || "center center";
        return (
          '<a class="agent-col" href="#/' +
          encodeURIComponent(agent.id) +
          '">' +
          '<span class="agent-col-bg" style="background-image: url(\'' +
          agent.image +
          "'); background-position: " +
          pos +
          ';"></span>' +
          '<span class="agent-col-shade"></span>' +
          '<span class="agent-col-label">' +
          '<span class="agent-col-num">' +
          escapeHtml(agent.id) +
          "</span>" +
          '<span class="agent-col-name">' +
          escapeHtml(agent.name) +
          "</span>" +
          "</span>" +
          "</a>"
        );
      })
      .join("");

    app.className = "view-home";
    app.innerHTML =
      '<section class="columns" aria-label="員工入口十個單位">' +
      columns +
      "</section>";
  }

  function workplacesFor(agent) {
    const byId = {};
    (agent.workplaces || []).forEach(function (item) {
      byId[item.id] = item;
    });
    const slots = [];
    for (let i = 1; i <= SLOT_COUNT; i += 1) {
      const id = pad(i);
      const item = byId[id] || { id: id, name: "準備中" };
      const ready = Boolean(item.url);
      slots.push({
        id: id,
        name: item.name || "準備中",
        url: item.url || "",
        ready: ready
      });
    }
    return slots;
  }

  function renderAgent(agent) {
    document.title = agent.id + " " + agent.name + "｜" + data.company;
    const slots = workplacesFor(agent)
      .map(function (slot) {
        if (slot.ready) {
          return (
            '<a class="workplace-card is-ready" href="' +
            escapeHtml(slot.url) +
            '" target="_blank" rel="noopener noreferrer">' +
            '<span class="workplace-num">' +
            escapeHtml(slot.id) +
            "</span>" +
            '<span class="workplace-name">' +
            escapeHtml(slot.name) +
            "</span>" +
            '<span class="workplace-hint">另開分頁</span>' +
            "</a>"
          );
        }
        return (
          '<div class="workplace-card is-pending" aria-disabled="true">' +
          '<span class="workplace-num">' +
          escapeHtml(slot.id) +
          "</span>" +
          '<span class="workplace-name">' +
          escapeHtml(slot.name) +
          "</span>" +
          '<span class="workplace-hint">準備中</span>' +
          "</div>"
        );
      })
      .join("");

    app.className = "view-agent";
    app.innerHTML =
      '<section class="agent-page">' +
      '<a class="back-link" href="#/">← 返回員工入口</a>' +
      "<header class=\"agent-heading\">" +
      '<p class="agent-kicker">Workplace</p>' +
      "<h1><span>" +
      escapeHtml(agent.id) +
      "</span> " +
      escapeHtml(agent.name) +
      "</h1>" +
      "</header>" +
      '<div class="workplace-grid">' +
      slots +
      "</div>" +
      "</section>";
  }

  window.addEventListener("hashchange", route);
  route();
})();
