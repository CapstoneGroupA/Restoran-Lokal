// Tombol kembali ke atas
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// EmailJS pengiriman form
document.getElementById("formKontak").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("service_restoran", "template_uw8bcyr", this)
    .then(() => {
      alert("✅ Pesan berhasil dikirim!");
      this.reset();
    })
    .catch(error => {
      console.error("❌ Gagal mengirim:", error);
      alert("❌ Terjadi kesalahan. Silakan coba lagi.");
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const waButton = document.getElementById("waButton");
  const waChatbox = document.getElementById("waChatbox");

  let visible = false;

  waButton.addEventListener("click", () => {
    visible = !visible;
    waChatbox.style.display = visible ? "block" : "none";
  });
});
