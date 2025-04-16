let currentLang = 'ar';
let translations = {};

export async function loadTranslations(lang = 'ar') {
  try {
    const res = await fetch(`lang/${lang}.json`);
    translations = await res.json();
    currentLang = lang;
    applyTranslations();
  } catch (err) {
    console.error("خطأ في تحميل ملف اللغة:", err);
  }
}

export function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) {
      el.innerText = translations[key];
    }
  });
}

export function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  loadTranslations(lang);
}

export function getCurrentLang() {
  return currentLang;
}