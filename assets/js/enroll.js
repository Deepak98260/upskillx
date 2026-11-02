/* ==========================================================
   UpskillX — Enrollment page logic
   Course is chosen via ?course=<id> (falls back to last choice
   saved in sessionStorage, then to the first course).
   ========================================================== */
(function () {
  var C = window.SITE_CONFIG, courses = window.COURSES, icon = window.icon;
  var $ = function (id) { return document.getElementById(id); };

  function getInitial() {
    var id = new URLSearchParams(location.search).get("course");
    try { if (!id) id = sessionStorage.getItem("upskillx_course"); } catch (e) {}
    return courses.find(function (c) { return c.id === id; }) || courses[0];
  }
  var current = getInitial();

  /* Icons */
  $("ico-course").innerHTML = icon("book", 20);
  $("ins1").innerHTML = icon("check", 18);
  $("ins2").innerHTML = icon("shield", 18);
  $("modal-ico").innerHTML = icon("check", 32);

  /* Course dropdown */
  $("course-select").innerHTML = courses.map(function (c) {
    return '<option value="' + c.id + '">' + c.name + " — " + window.formatPrice(c.price) + "</option>";
  }).join("");

  /* QR image (replace assets/images/payment-qr.png to change it) */
  var qr = $("qr-img");
  qr.src = C.payment.qrImage;
  qr.addEventListener("error", function () { qr.style.display = "none"; $("qr-fallback").style.display = "block"; });

  /* Support links */
  function supportMsg() {
    return "Hello UpskillX, I have completed the payment for \"" + current.name + "\" (" + window.formatPrice(current.price) +
      "). Please verify my enrollment. My name: ____ | UPI transaction ID: ____";
  }
  function mailHref(subject, body) {
    return "mailto:" + C.contact.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }

  function update() {
    var c = current;
    $("course-select").value = c.id;
    $("sum-thumb").innerHTML = window.thumbnail(c);
    $("sum-name").textContent = c.name;
    $("sum-duration").textContent = c.duration;
    $("sum-level").textContent = c.level;
    $("sum-fee").textContent = window.formatPrice(c.price);
    $("pay-amount").textContent = window.formatPrice(c.price);
    $("pi-name").textContent = c.name;
    $("pi-amount").textContent = window.formatPrice(c.price);
    $("pi-method").textContent = C.payment.method;
    $("wa-btn").href = window.waLink("Hello UpskillX, I need help enrolling in \"" + c.name + "\".");
    $("mail-btn").href = mailHref("Enrollment help: " + c.name, "Hello UpskillX,\n\nI need help enrolling in \"" + c.name + "\".\n");
    document.title = "Enroll in " + c.name + " — UpskillX";
    try { sessionStorage.setItem("upskillx_course", c.id); } catch (e) {}
  }

  $("course-select").addEventListener("change", function (e) {
    current = courses.find(function (c) { return c.id === e.target.value; });
    history.replaceState(null, "", "?course=" + current.id);
    update();
  });

  /* "I Have Completed Payment" — no fake verification */
  var modal = $("paid-modal");
  $("paid-btn").addEventListener("click", function () {
    $("modal-ref").innerHTML = "<b>Course:</b> " + current.name + "<br><b>Amount:</b> " + window.formatPrice(current.price) +
      "<br><b>Send:</b> your name, payment screenshot / UPI transaction ID";
    $("modal-wa").href = window.waLink(supportMsg());
    $("modal-mail").href = mailHref("Payment confirmation: " + current.name, supportMsg());
    modal.classList.add("open");
  });
  function close() { modal.classList.remove("open"); }
  $("modal-close").addEventListener("click", close);
  modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

  update();
})();
