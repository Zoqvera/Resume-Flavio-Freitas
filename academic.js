const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

const SEO = {
  canonicalUrl: 'https://zoqvera.github.io/Resume-Flavio-Freitas/academic.html',
  imageUrl: 'https://zoqvera.github.io/Resume-Flavio-Freitas/assets/profile_picture.png',
  title: {
    pt: 'Flávio Freitas | Currículo Acadêmico e Pesquisa',
    en: 'Flávio Freitas | Academic CV and Research'
  },
  description: {
    pt: 'Currículo acadêmico de Flávio de Sousa Freitas: formação, pesquisa, publicações, bibliometria, interpretação automática, produção técnica e eventos.',
    en: 'Academic CV of Flávio de Sousa Freitas: education, research, publications, bibliometrics, machine interpreting, technical output, and events.'
  }
};

function createOrUpdateMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });

  return element;
}

function ensureCanonical() {
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = SEO.canonicalUrl;
}

function ensureStructuredData() {
  if (document.head.querySelector('#academic-person-schema')) return;

  const schema = document.createElement('script');
  schema.id = 'academic-person-schema';
  schema.type = 'application/ld+json';
  schema.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Flávio de Sousa Freitas',
    alternateName: 'Flávio Freitas',
    url: SEO.canonicalUrl,
    image: SEO.imageUrl,
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universidade Federal de Uberlândia'
    },
    sameAs: [
      'https://orcid.org/0000-0002-8972-5870',
      'http://lattes.cnpq.br/7428463010998872',
      'https://github.com/Zoqvera'
    ],
    knowsAbout: [
      'Estudos Linguísticos',
      'Interpretação automática',
      'Tradução automática de fala',
      'Bibliometria',
      'Cienciometria'
    ]
  });
  document.head.appendChild(schema);
}

function ensureSemanticHeading() {
  const headline = document.querySelector('.academic-hero .headline');
  if (!headline || headline.tagName === 'H1') return;

  const heading = document.createElement('h1');
  heading.className = headline.className;
  [...headline.attributes].forEach((attribute) => {
    if (attribute.name !== 'class') heading.setAttribute(attribute.name, attribute.value);
  });
  heading.innerHTML = headline.innerHTML;
  headline.replaceWith(heading);
}

function configureSeo(lang) {
  const title = SEO.title[lang];
  const description = SEO.description[lang];

  document.title = title;
  ensureCanonical();
  ensureStructuredData();

  createOrUpdateMeta('meta[name="description"]', { name: 'description', content: description });
  createOrUpdateMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' });
  createOrUpdateMeta('meta[name="author"]', { name: 'author', content: 'Flávio de Sousa Freitas' });

  createOrUpdateMeta('meta[property="og:type"]', { property: 'og:type', content: 'profile' });
  createOrUpdateMeta('meta[property="og:locale"]', { property: 'og:locale', content: lang === 'en' ? 'en_US' : 'pt_BR' });
  createOrUpdateMeta('meta[property="og:title"]', { property: 'og:title', content: title });
  createOrUpdateMeta('meta[property="og:description"]', { property: 'og:description', content: description });
  createOrUpdateMeta('meta[property="og:url"]', { property: 'og:url', content: SEO.canonicalUrl });
  createOrUpdateMeta('meta[property="og:image"]', { property: 'og:image', content: SEO.imageUrl });
  createOrUpdateMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'Retrato profissional de Flávio Freitas' });

  createOrUpdateMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
  createOrUpdateMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
  createOrUpdateMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
  createOrUpdateMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: SEO.imageUrl });
}

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

const lattesSummary = document.querySelector('p[data-pt^="Doutorando em Estudos Linguísticos"]');
if (lattesSummary) {
  lattesSummary.dataset.pt = 'Doutor em Estudos Linguísticos pelo Programa de Pós-Graduação em Estudos Linguísticos da Universidade Federal de Uberlândia. Mestre em Estudos Linguísticos pelo mesmo programa e bacharel em Tradução (inglês-português) pela Universidade Federal de Uberlândia. Pesquisador membro do Grupo de Estudos e Pesquisa em Tradução, Tecnologias, Ensino e Cienciometria (GETTEC). Temas de interesse: tradução automática de fala; interpretação automática; cienciometria e bibliometria.';
  lattesSummary.dataset.en = "PhD in Linguistic Studies from the Graduate Program in Linguistic Studies at the Federal University of Uberlândia. Master's degree in Linguistic Studies from the same program and bachelor's degree in Translation (English-Portuguese) from the Federal University of Uberlândia. Researcher and member of GETTEC — Research Group on Translation, Technologies, Teaching, and Scientometrics. Research interests: automatic speech translation, machine interpreting, scientometrics, and bibliometrics.";
}

function applyLanguage(lang) {
  const isEnglish = lang === 'en';
  document.documentElement.lang = isEnglish ? 'en' : 'pt-BR';
  configureSeo(lang);

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

ensureSemanticHeading();
const savedLanguage = localStorage.getItem('resume-language');
applyLanguage(savedLanguage === 'en' ? 'en' : 'pt');

document.getElementById('year').textContent = new Date().getFullYear();
