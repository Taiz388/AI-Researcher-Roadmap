const buttons = [...document.querySelectorAll('[data-language]')];
const views = {
  en: document.querySelector('#roadmap-en'),
  zh: document.querySelector('#roadmap-zh'),
};

function setLanguage(language) {
  for (const [key, view] of Object.entries(views)) view.hidden = key !== language;
  for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.language === language));
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = language === 'zh' ? 'AI Researcher Roadmap｜人工智能研究者学习路线' : 'AI Researcher Roadmap';
  window.scrollTo({ top: 0, behavior: 'auto' });
}

for (const button of buttons) button.addEventListener('click', () => setLanguage(button.dataset.language));
