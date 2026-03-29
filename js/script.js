document.addEventListener("DOMContentLoaded", () => {

  /* ======================
   *  Smooth Scroll (me offset për navbar)
   = *===================== */
  const nav = document.querySelector("nav");
  const navHeight = nav ? nav.offsetHeight : 0;

  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);

      if (!target) return;

      const targetPosition = target.offsetTop - navHeight - 10;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    });
  });

  /* ======================
   *  Navbar Toggle (Mobile)
   = *===================== */
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navLinks");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  /* ======================
   *  Chart (vetëm një herë)
   = *===================== */
  const canvas = document.getElementById("problemsChart");

  if (canvas) {
    new Chart(canvas, {
      type: "bar",
      data: {
        labels: [
          "PC nuk ndizet",
          "Mbinxehje",
          "Nuk ka display",
          "Ngadalësim",
          "Crash / BSOD",
          "Zhurmë ventilatorësh"
        ],
        datasets: [{
          label: "Frekuenca (%)",
              data: [20, 25, 15, 18, 12, 10],
              borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        animation: {
          duration: 1200
        },
        plugins: {
          legend: {
            display: true
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: value => value + "%"
            }
          }
        }
      }
    });
  }

});
