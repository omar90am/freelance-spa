import { routes } from './router.js';
import { loadTranslations, setLanguage } from './utils/i18n.js';

async function loadPage(name) {
  const app = document.getElementById('app');
  app.innerHTML = '<div class="loader">جارٍ التحميل...</div>';
  try {
    const res = await fetch(`pages/${name}.html`);
    if (!res.ok) throw new Error("Page not found");
    const html = await res.text();
    app.innerHTML = html;
    loadTranslations(localStorage.getItem("lang") || "ar");
  } catch (e) {
    app.innerHTML = '<h2>عذرًا، الصفحة غير موجودة.</h2>';
  }
}

function router() {
  const path = location.pathname;
  const page = routes[path] || "home";
  loadPage(page);
}

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
  router();

  document.body.addEventListener("click", e => {
    if (e.target.matches("a[data-link]")) {
      e.preventDefault();
      history.pushState(null, "", e.target.href);
      router();
    }

    if (e.target.matches("[data-lang]")) {
      e.preventDefault();
      setLanguage(e.target.dataset.lang);
    }
  });
});