document.addEventListener("DOMContentLoaded", () => {

  /* ======================
   *  Smooth Scroll
   = *===================== */
  const nav = document.querySelector("nav");
  const navHeight = nav ? nav.offsetHeight : 0;

  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      window.scrollTo({
        top: target.offsetTop - navHeight - 10,
        behavior: "smooth"
      });
    });
  });

  /* ======================
   *  Navbar Toggle
   = *===================== */
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navLinks");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  /* ======================
   *  Tabs
   = *===================== */
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");

      loadCharts(tab.dataset.tab);
    });
  });

  /* ======================
   *  Chart Loader
   = *===================== */
  const loadedCharts = new Set();

  function loadCharts(tabName) {
    if (loadedCharts.has(tabName)) return;
    loadedCharts.add(tabName);

    const charts = chartsConfig[tabName];
    if (!charts) return;

    charts.forEach(cfg => {
      const canvas = document.getElementById(cfg.id);
      if (!canvas) return;

      new Chart(canvas, {
        type: cfg.type,
        data: {
          labels: cfg.labels,
          datasets: [{
            data: cfg.data,
            backgroundColor: [
              "#4cafef",
              "#8bc34a",
              "#ffc107",
              "#ff5722"
            ],
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          animation: { duration: 1200 }
        }
      });
    });
  }

  /* ======================
   *  Config
   = *===================== */
  const chartsConfig = {
    n1: [
      {
        id: "chart1",
        type: "pie",
        labels: [
          "Çdo ditë > 2h",
          "Çdo ditë < 2h",
          "Disa herë në javë",
          "Rrallë"
        ],
        data: [40, 30, 20, 10]
      }
    ],

    n2: [
      {
        id: "chart2",
        type: "pie",
        labels: [
          "Shume me teper",
          "Pak me teper",
          "Jo shume",
          "Aspak"
        ],
        data: [45, 25, 20, 10]
      }
    ],

    n3: [
      {
        id: "chart3",
        type: "bar",
        labels: [
          "Humbja e kohes",
          "Permbajtje jo cilesore",
          "Veshtiresi ne perdorim",
          "Nuk has probleme"
        ],
        data: [7, 6, 3, 4]
      }
    ],

    n4: [
      {
        id: "chart4",
        type: "bar",
        labels: [
          "Shume shpesh",
          "Ndonjehere",
          "Rralle",
          "Asnjehere"
        ],
        data: [6, 8, 4, 2]
      }
    ],

    n5: [
      {
        id: "chart5",
        type: "bar",
        labels: [
          "Shume shpesh",
          "Ndonjehere",
          "Rralle",
          "Asnjehere"
        ],
        data: [3, 7, 6, 4]
      }
    ],

    n6: [
      {
        id: "chart6",
        type: "bar",
        labels: [
          "Shume",
          "Jo shume",
          "Rralle",
          "Aspak"
        ],
        data: [8, 6, 4, 2]
      }
    ],

    n7: [
      {
        id: "chart7",
        type: "bar",
        labels: [
          "Shume keq",
          "Keq",
          "Mire",
          "Shume mire"
        ],
        data: [2, 4, 9, 5]
      }
    ],

    n8: [
      {
        id: "chart8",
        type: "bar",
        labels: [
          "Shume shpesh",
          "Ndonjehere",
          "Rralle",
          "Asnjehere"
        ],
        data: [4, 7, 6, 3]
      }
    ],

    n9: [
      {
        id: "chart9",
        type: "pie",
        labels: [
          "Shume e veshtire",
          "E veshtire",
          "E lehte",
          "Shume e lehte"
        ],
        data: [10, 25, 40, 25]
      }
    ],

    n10: [
      {
        id: "chart10",
        type: "pie",
        labels: [
          "Shume",
          "Jo shume",
          "Rralle",
          "Aspak"
        ],
        data: [30, 35, 50, 10]
      }
    ]
  };

  /* ======================
   *  Load default
   = *===================== */
  loadCharts("n1");
  loadCharts("n2");
  loadCharts("n3");
  loadCharts("n4");
  loadCharts("n5");
  loadCharts("n6");
  loadCharts("n7");
  loadCharts("n8");
  loadCharts("n9");
  loadCharts("n10");

});
