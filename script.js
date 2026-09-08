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

const translations = {
  'Sobre': 'About',
  'Competências': 'Skills',
  'Projetos': 'Projects',
  'Formação': 'Education',
  'Contato': 'Contact',
  'Desenvolvedor de software com foco em aplicações web, inteligência artificial e produtos digitais.': 'Software developer focused on web applications, artificial intelligence, and digital products.',
  'Construo aplicações e experiências digitais do protótipo à publicação, combinando desenvolvimento front-end, integração de serviços, inteligência artificial, bancos de dados, analytics e otimização técnica.': 'I build applications and digital experiences from prototype to deployment, combining front-end development, service integration, artificial intelligence, databases, analytics, and technical optimization.',
  'Ver projetos': 'View projects',
  'Entrar em contato': 'Get in touch',
  'Sua foto profissional': 'Your professional photo',
  'Aberto a oportunidades em tecnologia': 'Open to opportunities in technology',
  'Software, aplicações web, IA e produtos digitais.': 'Software, web applications, AI, and digital products.',
  '01 / PERFIL': '01 / PROFILE',
  'Desenvolvimento orientado a produto, experimentação e entrega.': 'Product-oriented development, experimentation, and delivery.',
  'Atuo na construção de produtos digitais e aplicações web, com experiência prática em interfaces responsivas, versionamento, publicação contínua, integração de métricas, SEO técnico e implementação de funcionalidades orientadas por inteligência artificial.': 'I work on digital products and web applications, with hands-on experience in responsive interfaces, version control, continuous deployment, analytics integration, technical SEO, and AI-driven functionality.',
  'Minha trajetória acadêmica fortaleceu competências de pesquisa, análise, documentação e resolução de problemas complexos. Hoje aplico esse repertório ao desenvolvimento de software, explorando arquiteturas web, automações, bancos de dados, APIs e sistemas apoiados por IA.': 'My academic background strengthened my skills in research, analysis, documentation, and complex problem-solving. I now apply this experience to software development, exploring web architectures, automation, databases, APIs, and AI-powered systems.',
  '02 / COMPETÊNCIAS TÉCNICAS': '02 / TECHNICAL SKILLS',
  'Ferramentas e práticas que utilizo': 'Tools and practices I use',
  'As tecnologias abaixo representam uso prático em projetos próprios e produtos digitais em desenvolvimento.': 'The technologies below reflect hands-on use in my own projects and digital products under development.',
  'Desenvolvimento Front-end': 'Front-end Development',
  'Construção de páginas e interfaces responsivas, componentes de navegação, estados de interface e experiências adaptadas para desktop e mobile.': 'Building responsive pages and interfaces, navigation components, interface states, and experiences adapted for desktop and mobile.',
  'IA aplicada a software': 'AI Applied to Software',
  'Uso de modelos generativos na concepção de funcionalidades, fluxos multi-etapas, prototipação, automação e experimentação de produtos.': 'Using generative models to design features, multi-step workflows, prototypes, automation, and product experiments.',
  'Dados, APIs & Serviços': 'Data, APIs & Services',
  'Integração de aplicações com serviços externos, persistência de dados e infraestrutura gerenciada para protótipos e produtos web.': 'Integrating applications with external services, data persistence, and managed infrastructure for prototypes and web products.',
  'Versionamento, Deploy & Qualidade': 'Version Control, Deployment & Quality',
  'Fluxo de desenvolvimento com controle de versão, publicação web, análise de comportamento e otimização de aspectos técnicos do produto.': 'Development workflows with version control, web deployment, behavior analysis, and optimization of technical product aspects.',
  '03 / PROJETOS': '03 / PROJECTS',
  'Projetos que demonstram execução prática': 'Projects that demonstrate hands-on execution',
  'Produtos próprios e aplicações web que reúnem desenvolvimento, arquitetura de informação, dados, IA, analytics e publicação.': 'Independent products and web applications combining development, information architecture, data, AI, analytics, and deployment.',
  'Plataforma experimental para execução de cenários narrativos com inteligência artificial em diferentes escalas de tempo. O projeto explora múltiplos agentes, persistência de estado, geração periódica de resumos e arquitetura orientada a experimentos de longa duração.': 'Experimental platform for running AI-driven narrative scenarios across different time scales. The project explores multiple agents, state persistence, periodic summary generation, and an architecture designed for long-running experiments.',
  'Plataforma digital de leitura': 'Digital Reading Platform',
  'Aplicação web para conteúdo de longa duração, com paginação global, navegação por capítulos, busca por página, acompanhamento de progresso, responsividade e instrumentação de eventos de uso.': 'Web application for long-form content with global pagination, chapter navigation, page search, reading-progress tracking, responsive design, and usage-event instrumentation.',
  'Sites institucionais e landing pages': 'Business Websites and Landing Pages',
  'Projetos web desenvolvidos para profissionais e negócios, com páginas responsivas, CTAs, integração de métricas, otimização para mecanismos de busca, Open Graph e publicação em infraestrutura estática.': 'Web projects developed for professionals and businesses, featuring responsive pages, CTAs, analytics integration, search-engine optimization, Open Graph metadata, and deployment on static infrastructure.',
  '04 / FORMAÇÃO': '04 / EDUCATION',
  'Pesquisa avançada e transição aplicada para tecnologia': 'Advanced research and an applied transition into technology',
  'FORMAÇÃO ACADÊMICA': 'ACADEMIC BACKGROUND',
  'Doutorado em Estudos Linguísticos': 'PhD in Linguistic Studies',
  'Universidade Federal de Uberlândia — UFU': 'Federal University of Uberlândia — UFU',
  'ÊNFASE ATUAL': 'CURRENT FOCUS',
  'Inteligência Artificial & Desenvolvimento de Software': 'Artificial Intelligence & Software Development',
  'Formação contínua e prática aplicada em desenvolvimento web, IA generativa, automação, bancos de dados, APIs, arquitetura de produtos digitais e ferramentas modernas de desenvolvimento.': 'Continuous learning and applied practice in web development, generative AI, automation, databases, APIs, digital-product architecture, and modern development tools.',
  '05 / ABORDAGEM': '05 / APPROACH',
  'Como desenvolvo': 'How I build',
  'Problema primeiro': 'Problem first',
  'Começo pelo problema, pelo usuário e pelo resultado esperado antes de escolher tecnologia.': 'I start with the problem, the user, and the expected outcome before choosing the technology.',
  'Entrega incremental': 'Incremental delivery',
  'Priorizo protótipos funcionais, validação rápida e evolução contínua do produto.': 'I prioritize functional prototypes, rapid validation, and continuous product evolution.',
  'Decisões rastreáveis': 'Traceable decisions',
  'Uso versionamento, documentação objetiva e organização de requisitos para reduzir ambiguidade.': 'I use version control, concise documentation, and structured requirements to reduce ambiguity.',
  'Pesquisa aplicada': 'Applied research',
  'Transformo investigação, análise de evidências e aprendizagem contínua em decisões técnicas mais consistentes.': 'I turn investigation, evidence analysis, and continuous learning into more consistent technical decisions.',
  '06 / CONTATO': '06 / CONTACT',
  'Disponível para oportunidades em tecnologia.': 'Available for opportunities in technology.',
  'Projetos, colaboração e posições relacionadas a desenvolvimento de software, aplicações web, inteligência artificial e produtos digitais.': 'Projects, collaboration, and positions related to software development, web applications, artificial intelligence, and digital products.',
  'E-mail': 'Email',
  'adicione-seu-email@dominio.com': 'add-your-email@domain.com',
  'adicione seu perfil': 'add your profile',
  'Software • IA • Produtos Digitais': 'Software • AI • Digital Products'
};

const metaDescriptions = {
  pt: 'Currículo e portfólio de Flávio Freitas, com foco em desenvolvimento de software, aplicações web, inteligência artificial e produtos digitais.',
  en: 'Resume and portfolio of Flávio Freitas, focused on software development, web applications, artificial intelligence, and digital products.'
};

const navWrap = document.querySelector('.nav-wrap');
const languageSwitcher = document.createElement('div');
languageSwitcher.className = 'language-switcher';
languageSwitcher.setAttribute('aria-label', 'Language / Idioma');
languageSwitcher.innerHTML = `
  <button type="button" class="language-button" data-lang="pt" aria-label="Português">PT</button>
  <span aria-hidden="true">/</span>
  <button type="button" class="language-button" data-lang="en" aria-label="English">EN</button>
`;

const languageStyles = document.createElement('style');
languageStyles.textContent = `
  .language-switcher {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-left: auto;
    margin-right: 22px;
    padding: 5px 8px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(255,255,255,.035);
    color: var(--muted);
    font-family: 'JetBrains Mono', monospace;
    font-size: .72rem;
  }
  .language-button {
    appearance: none;
    border: 0;
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    padding: 3px 5px;
    border-radius: 999px;
    font: inherit;
    transition: color .2s ease, background .2s ease;
  }
  .language-button:hover { color: var(--text); }
  .language-button.active {
    color: var(--bg);
    background: var(--text);
    font-weight: 700;
  }
  @media (min-width: 721px) {
    .nav { margin-left: auto; }
  }
  @media (max-width: 720px) {
    .language-switcher { margin-left: auto; margin-right: 10px; }
  }
`;
document.head.appendChild(languageStyles);

if (navWrap && menuButton) {
  navWrap.insertBefore(languageSwitcher, menuButton);
} else if (navWrap) {
  navWrap.appendChild(languageSwitcher);
}

const translatableElements = [];
document.querySelectorAll('body *').forEach((element) => {
  if (element.children.length === 0) {
    const original = element.textContent.trim();
    if (translations[original]) {
      element.dataset.ptText = original;
      element.dataset.enText = translations[original];
      translatableElements.push(element);
    }
  }
});

const photoInstruction = document.querySelector('.photo-placeholder span');
if (photoInstruction) {
  photoInstruction.dataset.ptHtml = 'Substitua por <code>assets/profile.jpg</code>';
  photoInstruction.dataset.enHtml = 'Replace with <code>assets/profile.jpg</code>';
}

const brand = document.querySelector('.brand');
const mainNav = document.querySelector('.nav');

function applyLanguage(lang) {
  const isEnglish = lang === 'en';

  document.documentElement.lang = isEnglish ? 'en' : 'pt-BR';
  document.title = isEnglish
    ? 'Flávio Freitas | Software Developer'
    : 'Flávio Freitas | Desenvolvedor de Software';

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', metaDescriptions[lang]);

  translatableElements.forEach((element) => {
    element.textContent = isEnglish ? element.dataset.enText : element.dataset.ptText;
  });

  if (photoInstruction) {
    photoInstruction.innerHTML = isEnglish ? photoInstruction.dataset.enHtml : photoInstruction.dataset.ptHtml;
  }

  if (brand) brand.setAttribute('aria-label', isEnglish ? 'Go to top' : 'Ir para o início');
  if (mainNav) mainNav.setAttribute('aria-label', isEnglish ? 'Main navigation' : 'Navegação principal');
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

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.getElementById('year').textContent = new Date().getFullYear();
