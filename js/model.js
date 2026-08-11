/* =====================================================================
   MODEL — the data and state of the app. Never touches the DOM.
   Edit your content here: featured projects, skills, image overrides.
   ===================================================================== */

const Model = {

  githubUser: "Dokja-pvt",

  // Where the contact form delivers (via formsubmit.co relay)
  contactEmail: "mabbpl1@gmail.com",

  // App state (read/written by the Controller, displayed by the View)
  state: {
    screen: "home",        // which screen is showing
    menuIndex: 0,          // selected item on the home menu
    reposLoaded: false,
    skillsBuilt: false,
  },

  // ---- Featured projects (hand-written, shown above the GitHub feed) ----
  featured: [
    {
      title: "Persona5 Style portfolio",
      tag: "UI/UX & Frontend", color: "#ffffff",
      url: "https://github.com/Dokja-pvt/Persona5_Style_Portfolio", cta: "View on GitHub →",
      img: "assets/projects/portfolio.png",
      desc: "An interactive, video game-inspired portfolio built from scratch with HTML, CSS, and Vanilla JavaScript. Features hardware-accelerated animations, custom transitions, and a fully responsive grid system.",
    },
    {
      title: "medvision-ai",
      tag: "Multimodal AI", color: "#3dff6e",
      url: "https://github.com/Dokja-pvt/medvision-ai", cta: "View on GitHub →",
      img: "assets/projects/medvision.png",
      desc: "A multimodal pharmaceutical assistant powered by Gemini 2.5 Flash. It reads medication labels and prescriptions straight from a photo and returns clinical insights, dosages, and drug-interaction warnings in real time.",
    },
    {
      title: "Credit Risk Project",
      tag: "ML · Finance", color: "#3178c6",
      url: "https://github.com/Dokja-pvt/Credit_Risk_Project", cta: "View on GitHub →",
      img: "assets/projects/creditrisk.png",
      desc: "An end-to-end Machine Learning Engineering pipeline that scores loan applicants for default risk and automates credit underwriting decisions, from feature engineering through to a deployable model.",
    },
    {
      title: "E-commerce Recommender Engine",
      tag: "Recommender System", color: "#f1e05a",
      url: "https://github.com/Dokja-pvt/Ecommerce-recommender-engine", cta: "View on GitHub →",
      img: "assets/projects/recommender.png",
      desc: "A hybrid product recommendation engine blending collaborative filtering (SVD matrix factorization) with content-based filtering (NLP TF-IDF vectorization). Built with Python and Streamlit.",
    },
  ],

  // Repos already shown in "featured" get hidden from the GitHub feed
  featuredRepoNames: [
    "medvision-ai",
    "Credit_Risk_Project",
    "Ecommerce-recommender-engine",
  ],

  // Shown if the GitHub API can't be reached
  fallbackRepos: [
    {
      name: "Portfolio", language: "TypeScript", stargazers_count: 0,
      html_url: "https://github.com/Dokja-pvt/Portfolio",
      description: "Need to know about me, click and find out.",
    },
    {
      name: "Fake-Job-Post-Detection", language: "Jupyter Notebook", stargazers_count: 0,
      html_url: "https://github.com/Dokja-pvt/Fake-Job-Post-Detection",
      description: "Fraud job posting detection built with TF-IDF, Random Forest and Streamlit.",
    },
    {
      name: "medvision-ai", language: "JavaScript", stargazers_count: 0,
      html_url: "https://github.com/Dokja-pvt/medvision-ai",
      description: "Multimodal pharmaceutical assistant using Gemini 2.5 Flash.",
    },
    {
      name: "Credit_Risk_Project", language: "Python", stargazers_count: 0,
      html_url: "https://github.com/Dokja-pvt/Credit_Risk_Project",
      description: "End-to-end MLE pipeline for loan default risk and credit underwriting.",
    },
    {
      name: "Ecommerce-recommender-engine", language: "Python", stargazers_count: 0,
      html_url: "https://github.com/Dokja-pvt/Ecommerce-recommender-engine",
      description: "Hybrid recommender engine blending SVD collaborative filtering and TF-IDF content-based filtering.",
    },
  ],

  // Optional thumbnail overrides: repo name → image path.
  // Anything not listed is looked up at assets/projects/<RepoName>.png
  projectImages: {
    // "Fake-Job-Post-Detection": "assets/projects/fakejob.png",
  },

  langColors: {
    JavaScript: "#f1e05a", TypeScript: "#3178c6", Python: "#3572A5",
    PHP: "#4F5D95", CSS: "#663399", HTML: "#e34c26",
    "Jupyter Notebook": "#DA5B0B", MATLAB: "#e16737", Java: "#b07219", C: "#555", "C++": "#f34b7d",
  },

  // ---- Skills screen ----
  skills: [
    { group: "Data Science · ML", items: [
      ["Python · Pandas · NumPy", 90], ["Scikit-learn", 84],
      ["Statistical Modeling · EDA", 82], ["Data Visualization", 80],
    ]},
    { group: "Web Development", items: [
      ["HTML · CSS · JavaScript", 86], ["Chart.js", 78],
      ["C · C++", 68], ["Streamlit", 80],
    ]},
    { group: "UI/UX & Design", items: [
      ["UI/UX Design · Prototyping", 88], ["Wireframing · Figma", 86],
      ["Visual & Brand Design", 90], ["Canva · Adobe Illustrator", 84],
    ]},
    { group: "Tools & Workflow", items: [
      ["Git & GitHub", 80], ["VS Code", 85],
    ]},
  ],

  // ---- Data fetching ----
  async fetchRepos() {
    const skip = new Set(this.featuredRepoNames);
    try {
      const res = await fetch(
        `https://api.github.com/users/${this.githubUser}/repos?per_page=100&sort=updated`
      );
      if (!res.ok) throw new Error(res.status);
      const repos = (await res.json()).filter(r => !r.fork && !skip.has(r.name));
      return { repos, live: true };
    } catch {
      return { repos: this.fallbackRepos.filter(r => !skip.has(r.name)), live: false };
    }
  },
};
