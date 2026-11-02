/* ==========================================================
   UpskillX — Shared UI: navbar, footer, login modal, reveal
   ========================================================== */
(function () {
  var C = window.SITE_CONFIG;
  var page = document.body.dataset.page || "home";

  function waLink(msg) {
    return "https://wa.me/" + C.contact.whatsappNumber + "?text=" + encodeURIComponent(msg || C.contact.whatsappMessage);
  }
  window.waLink = waLink;

  /* ---------- Navbar ---------- */
  var links = [
    { label: "Home", href: "index.html", key: "home" },
    { label: "Explore Courses", href: "index.html#courses" },
    { label: "About Us", href: "index.html#about" },
    { label: "Contact", href: "index.html#contact" }
  ];
  var linkHtml = links.map(function (l) {
    return '<a href="' + l.href + '"' + (l.key === page ? ' class="active"' : "") + ">" + l.label + "</a>";
  }).join("");

  var nav = document.getElementById("site-nav");
  if (nav) {
    nav.className = "nav";
    nav.innerHTML =
      '<div class="container nav-inner">' +
      '<a class="logo" href="index.html" aria-label="' + C.brand.name + ' home"><span class="logo-mark">U</span>' + C.brand.name + "</a>" +
      '<nav class="nav-links" aria-label="Main">' + linkHtml + "</nav>" +
      '<div class="nav-actions"><button class="btn btn-ghost btn-sm" data-open-login>Login</button>' +
      '<a class="btn btn-primary btn-sm" href="enroll.html">Enroll Now</a></div>' +
      '<button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span></span></button>' +
      "</div>";

    var menu = document.createElement("div");
    menu.className = "mobile-menu"; menu.id = "mobile-menu";
    menu.innerHTML = linkHtml +
      '<button class="btn btn-ghost" data-open-login>Login</button>' +
      '<a class="btn btn-primary" href="enroll.html">Enroll Now</a>';
    document.body.appendChild(menu);

    var burger = nav.querySelector(".burger");
    var toggle = function (open) {
      var o = typeof open === "boolean" ? open : !menu.classList.contains("open");
      menu.classList.toggle("open", o);
      burger.setAttribute("aria-expanded", o);
    };
    burger.addEventListener("click", function () { toggle(); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a, button")) toggle(false); });
    window.addEventListener("scroll", function () { nav.classList.toggle("scrolled", window.scrollY > 8); }, { passive: true });
  }

  /* ---------- Footer ---------- */
  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "footer";
    var courseLinks = window.COURSES.slice(0, 6).map(function (c) {
      return '<li><a href="enroll.html?course=' + c.id + '">' + c.name + "</a></li>";
    }).join("");
    footer.innerHTML =
      '<div class="container"><div class="footer-grid">' +
      '<div><a class="logo" href="index.html"><span class="logo-mark">U</span>' + C.brand.name + "</a>" +
      '<p style="margin-top:14px;max-width:320px"><b style="color:#fff">About ' + C.brand.name + '</b><br>' + C.brand.name +
      " is an online learning platform offering structured, career-focused courses with practical projects. " + C.brand.tagline + "</p></div>" +
      '<div><h4>Explore Courses</h4><ul>' + courseLinks + '<li><a href="index.html#courses">View all courses →</a></li></ul></div>' +
      '<div id="contact"><h4>Contact Information</h4><ul>' +
      "<li>Email: <a href=\"mailto:" + C.contact.email + '">' + C.contact.email + "</a></li>" +
      "<li>WhatsApp: <a href=\"" + waLink() + '" target="_blank" rel="noopener">' + C.contact.phoneDisplay + "</a></li>" +
      "<li>" + C.contact.address + "</li></ul></div>" +
      '<div><h4>Policies</h4><ul>' +
      '<li><a href="' + C.legalLinks.terms + '">Terms &amp; Conditions</a></li>' +
      '<li><a href="' + C.legalLinks.privacy + '">Privacy Policy</a></li>' +
      '<li><a href="' + C.legalLinks.refund + '">Refund Policy</a></li></ul></div>' +
      "</div>" +
      '<div class="footer-bottom"><span>© ' + new Date().getFullYear() + " " + C.brand.name + ". All rights reserved.</span>" +
      "<span>" + C.brand.tagline + "</span></div></div>";
  }

  /* ---------- Login modal (UI only) ---------- */
  var login = document.createElement("div");
  login.className = "modal"; login.id = "login-modal";
  login.setAttribute("role", "dialog"); login.setAttribute("aria-modal", "true"); login.setAttribute("aria-label", "Login");
  login.innerHTML =
    '<div class="modal-box" style="text-align:left">' +
    '<div class="modal-ico" style="margin-left:0">' + window.icon("user", 28) + "</div>" +
    "<h3>Welcome back</h3><p>Log in to continue learning with " + C.brand.name + ".</p>" +
    '<form id="login-form" novalidate style="display:grid;gap:12px;margin-top:14px">' +
    '<input class="course-select" style="margin:0;font-weight:500" type="email" placeholder="Email address" required aria-label="Email address">' +
    '<input class="course-select" style="margin:0;font-weight:500" type="password" placeholder="Password" required aria-label="Password">' +
    '<button class="btn btn-primary btn-block" type="submit">Login</button>' +
    '<p id="login-msg" class="notice" style="display:none;margin:0"></p></form>' +
    '<button class="btn btn-ghost btn-block" style="margin-top:10px" data-close-login>Close</button></div>';
  document.body.appendChild(login);

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-open-login]")) login.classList.add("open");
    if (e.target.closest("[data-close-login]") || e.target === login) login.classList.remove("open");
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") login.classList.remove("open"); });
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var m = document.getElementById("login-msg");
    m.style.display = "block";
    m.textContent = "Login is a UI preview only — student accounts are not active on this website yet. Please contact support to access your course.";
  });

  /* ---------- Scroll reveal ---------- */
  window.initReveal = function () {
    var els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: .12 });
    els.forEach(function (el, i) { el.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(el); });
  };
})();
