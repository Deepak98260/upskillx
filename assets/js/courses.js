/* ==========================================================
   UpskillX — Sample course data (local, editable)
   Prices range from ₹14,999 (entry) to ₹60,000 (premium). Durations are sample values.
   ========================================================== */
window.COURSES = [
  {
    id: "data-science-analytics",
    name: "Data Science & Analytics",
    short: "Turn raw data into insight with Python, SQL, statistics and dashboards.",
    long: "Learn the full analytics workflow: data cleaning, exploratory analysis, statistics, visualisation and reporting, applied on guided real-world style projects.",
    level: "Intermediate", duration: "4 Months", price: 34999,
    colors: ["#6D28D9", "#A78BFA"], icon: "chart"
  },
  {
    id: "ai-machine-learning",
    name: "Artificial Intelligence & Machine Learning",
    short: "Build and evaluate ML models, from regression to neural networks.",
    long: "A structured path through machine learning fundamentals, model evaluation, deep learning basics and deployment-ready project work.",
    level: "Advanced", duration: "6 Months", price: 60000,
    colors: ["#4C1D95", "#C084FC"], icon: "brain"
  },
  {
    id: "data-structures-algorithms",
    name: "Data Structures & Algorithms",
    short: "Master problem solving and prepare for coding interviews step by step.",
    long: "Arrays to graphs and dynamic programming, with a focus on problem-solving patterns, complexity analysis and consistent practice.",
    level: "Beginner", duration: "3 Months", price: 19999,
    colors: ["#7C3AED", "#818CF8"], icon: "tree"
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    short: "Create striking visuals, branding and layouts with professional tools.",
    long: "Design principles, typography, colour, branding and layout, applied through projects that grow into a design portfolio.",
    level: "Beginner", duration: "2 Months", price: 14999,
    colors: ["#9333EA", "#F0ABFC"], icon: "pen"
  },
  {
    id: "finance",
    name: "Finance",
    short: "Understand financial statements, markets, budgeting and valuation basics.",
    long: "Core corporate finance and personal finance concepts, financial statement analysis and spreadsheet modelling for practical decisions.",
    level: "Intermediate", duration: "3 Months", price: 29999,
    colors: ["#5B21B6", "#8B5CF6"], icon: "coin"
  },
  {
    id: "video-editing",
    name: "Video Editing",
    short: "Edit, colour-grade and publish engaging videos from scratch.",
    long: "Storytelling, cutting, transitions, audio clean-up, colour grading and exporting for social platforms and long-form content.",
    level: "Beginner", duration: "2 Months", price: 17999,
    colors: ["#A21CAF", "#C4B5FD"], icon: "film"
  },
  {
    id: "cyber-security",
    name: "Cyber Security",
    short: "Learn to find, understand and defend against common security threats.",
    long: "Networking basics, threat models, secure systems and defensive practices, with hands-on labs in safe, practice environments.",
    level: "Advanced", duration: "5 Months", price: 49999,
    colors: ["#3B0764", "#8B5CF6"], icon: "shield"
  },
  {
    id: "software-development",
    name: "Software Development",
    short: "Build modern web applications from front end to back end.",
    long: "HTML, CSS, JavaScript, APIs and databases, plus version control and project workflows to ship complete applications.",
    level: "Intermediate", duration: "5 Months", price: 39999,
    colors: ["#6D28D9", "#60A5FA"], icon: "code"
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    short: "Plan campaigns across SEO, social, email and paid channels.",
    long: "Marketing fundamentals, content and SEO, social media, analytics and campaign planning with practical, measurable exercises.",
    level: "Beginner", duration: "3 Months", price: 24999,
    colors: ["#7E22CE", "#E879F9"], icon: "megaphone"
  },
  {
    id: "devops-cloud",
    name: "DevOps & Cloud Computing",
    short: "Automate, containerise and deploy applications on the cloud.",
    long: "Linux, CI/CD, containers, infrastructure as code and cloud fundamentals, practised through end-to-end deployment projects.",
    level: "Advanced", duration: "5 Months", price: 54999,
    colors: ["#4338CA", "#A78BFA"], icon: "cloud"
  }
];

/* Small, original line icons (24x24 viewBox) used for thumbnails & UI */
window.ICONS = {
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V4a3 3 0 0 0-3 0zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
  tree: '<circle cx="12" cy="5" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M12 7v4M12 11l-6 5M12 11l6 5"/>',
  pen: '<path d="M12 20l-8 1 1-8L16 2l5 5zM14 4l5 5"/>',
  coin: '<circle cx="12" cy="12" r="9"/><path d="M14.5 9a2.5 2 0 0 0-2.5-1.5c-1.5 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1 2-2.5 2A2.5 2 0 0 1 9.5 15M12 6v1.5M12 16.5V18"/>',
  film: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 4v16M16 4v16M3 9h5M16 9h5M3 15h5M16 15h5"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  code: '<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
  megaphone: '<path d="M3 11v2a1 1 0 0 0 1 1h3l8 4V6L7 10H4a1 1 0 0 0-1 1zM19 9a4 4 0 0 1 0 6M7 14l1 5h3l-1-4"/>',
  cloud: '<path d="M7 18a4 4 0 0 1-.5-8A5.5 5.5 0 0 1 17 8.5 4.5 4.5 0 0 1 17 18z"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19a2 2 0 0 1 2-2h13"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<path d="M5 12l5 5 9-10"/>'
};

window.icon = function (name, size) {
  size = size || 24;
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (window.ICONS[name] || "") + "</svg>";
};

/* Original generated thumbnail (gradient + pattern + icon) — no external images */
window.thumbnail = function (c) {
  var id = "g" + c.id.replace(/[^a-z]/g, "");
  return (
    '<svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" role="img" aria-label="' + c.name + ' course thumbnail">' +
    '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="' + c.colors[0] + '"/><stop offset="1" stop-color="' + c.colors[1] + '"/></linearGradient></defs>' +
    '<rect width="400" height="220" fill="url(#' + id + ')"/>' +
    '<circle cx="340" cy="30" r="90" fill="#fff" opacity=".10"/>' +
    '<circle cx="40" cy="210" r="70" fill="#fff" opacity=".10"/>' +
    '<g fill="#fff" opacity=".16"><circle cx="60" cy="40" r="3"/><circle cx="84" cy="40" r="3"/><circle cx="108" cy="40" r="3"/><circle cx="60" cy="64" r="3"/><circle cx="84" cy="64" r="3"/><circle cx="108" cy="64" r="3"/></g>' +
    '<rect x="150" y="60" width="100" height="100" rx="26" fill="#fff" opacity=".2"/>' +
    '<g transform="translate(166 76) scale(3)" color="#fff">' +
    '<g fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + (window.ICONS[c.icon] || "") + "</g></g></svg>"
  );
};

window.formatPrice = function (n) {
  return window.SITE_CONFIG.payment.currencySymbol + Number(n).toLocaleString("en-IN");
};
