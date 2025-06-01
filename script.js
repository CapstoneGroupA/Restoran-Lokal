document.addEventListener('DOMContentLoaded', () => {
  // Mode Gelap Otomatis Berdasarkan Waktu
  const hour = new Date().getHours();
  if (hour >= 18 || hour < 6 || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
  }

  // Toggle Manual Mode Gelap
  document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Kirim Form Kontak + Toast
  const form = document.getElementById('formKontak');
  const responseMessage = document.getElementById('responseMessage');
  const toast = document.getElementById('toast');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        responseMessage.textContent = '✅ Terima kasih! Pesananmu telah dikirim.';
        responseMessage.style.color = 'green';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
        form.reset();
      } else {
        responseMessage.textContent = '❌ Terjadi kesalahan saat mengirim pesan.';
        responseMessage.style.color = 'red';
      }
    } catch {
      responseMessage.textContent = '⚠️ Tidak dapat terhubung ke server.';
      responseMessage.style.color = 'orange';
    }
  });

  // Tombol Kembali ke Atas
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Live Search Menu
  const inputCari = document.getElementById('pencarianMenu');
  inputCari?.addEventListener('input', () => {
    const keyword = inputCari.value.toLowerCase();
    document.querySelectorAll('#menu ul li').forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(keyword) ? '' : 'none';
    });
  });
});
