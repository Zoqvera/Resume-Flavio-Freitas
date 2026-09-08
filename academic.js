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

const lattesSummary = document.querySelector('p[data-pt^="Doutorando em Estudos Linguísticos"]');
if (lattesSummary) {
  lattesSummary.dataset.pt = 'Doutor em Estudos Linguísticos pelo Programa de Pós-Graduação em Estudos Linguísticos da Universidade Federal de Uberlândia. Mestre em Estudos Linguísticos pelo mesmo programa e bacharel em Tradução (inglês-português) pela Universidade Federal de Uberlândia. Pesquisador membro do Grupo de Estudos e Pesquisa em Tradução, Tecnologias, Ensino e Cienciometria (GETTEC). Temas de interesse: tradução automática de fala; interpretação automática; cienciometria e bibliometria.';
  lattesSummary.dataset.en = "PhD in Linguistic Studies from the Graduate Program in Linguistic Studies at the Federal University of Uberlândia. Master's degree in Linguistic Studies from the same program and bachelor's degree in Translation (English-Portuguese) from the Federal University of Uberlândia. Researcher and member of GETTEC — Research Group on Translation, Technologies, Teaching, and Scientometrics. Research interests: automatic speech translation, machine interpreting, scientometrics, and bibliometrics.";
}

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
