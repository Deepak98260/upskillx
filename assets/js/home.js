/* ==========================================================
   UpskillX — Home page logic
   ========================================================== */
(function () {
  var C = window.SITE_CONFIG, icon = window.icon;

  /* Stats */
  document.getElementById("stats-grid").innerHTML = C.stats.map(function (s) {
    return '<div class="stat reveal"><div class="ico">' + icon(s.icon, 26) + "</div><div><b>" + s.value +
      "</b><span>" + s.label + "</span><small>" + s.note + "</small></div></div>";
  }).join("");

  /* Course cards */
  var grid = document.getElementById("course-grid");
  var filters = document.getElementById("filters");
  var levels = ["All", "Beginner", "Intermediate", "Advanced"];

  filters.innerHTML = levels.map(function (l, i) {
    return '<button class="chip' + (i === 0 ? " active" : "") + '" data-level="' + l + '">' + l + "</button>";
  }).join("");

  function render(level) {
    var list = window.COURSES.filter(function (c) { return level === "All" || c.level === level; });
    grid.innerHTML = list.map(function (c) {
      return '<article class="card reveal">' +
        '<div class="thumb">' + window.thumbnail(c) + '<span class="badge ' + c.level + '">' + c.level + "</span></div>" +
        '<div class="card-body"><h3>' + c.name + "</h3><p>" + c.short + "</p>" +
        '<div class="meta"><span class="dur">' + icon("clock", 16) + c.duration + '</span><span class="price">' + window.formatPrice(c.price) + "</span></div>" +
        '<div class="card-actions"><button class="btn btn-ghost btn-sm" data-details="' + c.id + '">View Details</button>' +
        '<a class="btn btn-primary btn-sm" href="enroll.html?course=' + c.id + '">Enroll Now</a></div></div></article>';
    }).join("");
    window.initReveal();
  }
  filters.addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    filters.querySelectorAll(".chip").forEach(function (x) { x.classList.remove("active"); });
    b.classList.add("active"); render(b.dataset.level);
  });
  render("All");

  /* Course details modal */
  var modal = document.getElementById("details-modal");
  var box = document.getElementById("details-box");
  grid.addEventListener("click", function (e) {
    var b = e.target.closest("[data-details]"); if (!b) return;
    var c = window.COURSES.find(function (x) { return x.id === b.dataset.details; });
    box.innerHTML =
      '<div class="thumb" style="border-radius:18px;margin-bottom:18px">' + window.thumbnail(c) + "</div>" +
      "<h3>" + c.name + "</h3><p>" + c.long + "</p>" +
      '<div class="modal-ref"><b>Level:</b> ' + c.level + " &nbsp;•&nbsp; <b>Duration:</b> " + c.duration +
      " &nbsp;•&nbsp; <b>Fee:</b> " + window.formatPrice(c.price) + "</div>" +
      '<div class="support-btns"><a class="btn btn-primary" href="enroll.html?course=' + c.id + '">Enroll Now</a>' +
      '<button class="btn btn-ghost" data-close-details>Close</button></div>';
    modal.classList.add("open");
  });
  modal.addEventListener("click", function (e) {
    if (e.target === modal || e.target.closest("[data-close-details]")) modal.classList.remove("open");
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") modal.classList.remove("open"); });

  /* Explore Courses buttons smooth-scroll (anchor handles it, this adds focus polish) */
  document.querySelectorAll('a[href="#courses"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
    });
  });

  /* FAQ — certificates/mentorship/internships/refunds only claimed if enabled in config */
  var o = C.offers;
  var faqs = [
    ["How can I enroll in a course?", "Choose a course, click Enroll Now, scan the UPI QR code on the enrollment page to pay, then tap “I Have Completed Payment” and contact us so the team can verify your enrollment."],
    ["How will I access my course?", "After your payment is verified by the administrator, you will be given access details by the support team on WhatsApp or email."],
    ["Are courses beginner-friendly?", "Every course shows a Beginner, Intermediate or Advanced badge so you can pick the right starting point. Beginner courses assume no prior experience."],
    ["Will I receive a certificate?", o.certificate ? "Yes. Learners who complete the course requirements receive a certificate of completion." : "Certificate details vary by course. Please contact support before enrolling to confirm what is included."],
    ["How can I contact support?", "Use the WhatsApp or email buttons on the enrollment page, or the contact details in the footer. We aim to reply as soon as possible."],
    ["What is the refund policy?", o.refunds ? "Refunds are handled according to our Refund Policy linked in the footer." : "Please contact support before paying to understand the refund terms that apply to your course."]
  ];
  var list = document.getElementById("faq-list");
  list.innerHTML = faqs.map(function (f, i) {
    return '<div class="faq reveal"><button class="faq-q" aria-expanded="false" aria-controls="fa' + i + '"><span>' + f[0] +
      '</span><span class="plus">+</span></button><div class="faq-a" id="fa' + i + '"><div><p>' + f[1] + "</p></div></div></div>";
  }).join("");
  list.addEventListener("click", function (e) {
    var q = e.target.closest(".faq-q"); if (!q) return;
    var item = q.parentElement, open = !item.classList.contains("open");
    list.querySelectorAll(".faq").forEach(function (x) {
      x.classList.remove("open"); x.querySelector(".faq-q").setAttribute("aria-expanded", "false");
    });
    if (open) { item.classList.add("open"); q.setAttribute("aria-expanded", "true"); }
  });

  window.initReveal();
})();
