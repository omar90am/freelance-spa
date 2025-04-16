let currentLang = localStorage.getItem('lang') || 'ar';
let translations = {};

export async function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  translations = await fetch(`lang/${lang}.json`).then(res => res.json());
  translatePage();
}

export function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) {
      el.innerHTML = translations[key];
    }
  });
}

// initialize translation
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
});