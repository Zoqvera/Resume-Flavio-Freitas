const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const metaDescriptions = {
  pt: 'Currículo acadêmico de Flávio de Sousa Freitas: formação, pesquisa, publicações, produção técnica e eventos.',
  en: 'Academic CV of Flávio de Sousa Freitas: education, research, publications, technical output, and events.'
};

function applyLanguage(lang) {
  const isEnglish = lang === 'en';
  document.documentElement.lang = isEnglish ? 'en' : 'pt-BR';
  document.title = isEnglish ? 'Flávio Freitas | Academic CV' : 'Flávio Freitas | Currículo Acadêmico';

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', metaDescriptions[lang]);

  document.querySelectorAll('[data-pt][data-en]').forEach((element) => {
    element.textContent = isEnglish ? element.dataset.en : element.dataset.pt;
  });

  const brand = document.querySelector('.brand');
  if (brand) brand.setAttribute('aria-label', isEnglish ? 'Back to main resume' : 'Voltar ao currículo principal');
  if (nav) nav.setAttribute('aria-label', isEnglish ? 'Main navigation' : 'Navegação principal');
  if (menuButton) menuButton.setAttribute('aria-label', isEnglish ? 'Open menu' : 'Abrir menu');

  document.querySelectorAll('.language-button').forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  localStorage.setItem('resume-language', lang);
}

document.querySelectorAll('.language-button').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

const savedLanguage = localStorage.getItem('resume-language');
applyLanguage(savedLanguage === 'en' ? 'en' : 'pt');

document.getElementById('year').textContent = new Date().getFullYear();
