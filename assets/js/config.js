/* ==========================================================
   UpskillX — Site configuration
   Edit this file to change contact details, stats and
   what the FAQ says about certificates, refunds, etc.
   ========================================================== */
window.SITE_CONFIG = {
  brand: {
    name: "UpskillX",
    tagline: "Learn Skills. Build Your Future."
  },

  /* ---- Contact (replace with your real details) ---- */
  contact: {
    whatsappNumber: "919999999999",          // country code + number, no "+" or spaces
    whatsappMessage: "Hello UpskillX, I need help with my enrollment.",
    email: "support@upskillx.example",       // replace with your real email
    phoneDisplay: "+91 99999 99999",
    address: "India (online learning platform)"
  },

  /* ---- Payment ---- */
  payment: {
    qrImage: "assets/images/payment-qr.png", // replace this file to change the QR code
    method: "UPI",
    currencySymbol: "₹"
  },

  /* ---- Platform highlights (no unverified claims — edit freely) ---- */
  stats: [
    { value: "70+", label: "Learning Resources", note: "Lessons, notes & practice material", icon: "book" },
    { value: "Hands-on", label: "Practical Projects", note: "Build real, portfolio-ready work", icon: "layers" },
    { value: "Expert-Led", label: "Learning", note: "Structured, guided curriculum", icon: "user" },
    { value: "Career", label: "Focused Courses", note: "Skills aligned with job roles", icon: "target" }
  ],

  /* ---- Only set to true what you genuinely provide ---- */
  offers: {
    certificate: false,
    mentorship: false,
    internship: false,
    refunds: false
  },

  /* Where the legal-page links in the footer should go */
  legalLinks: { terms: "#", privacy: "#", refund: "#" }
};
