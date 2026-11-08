
// =====================================
// KONFIGURASI UD. SINAR SAKTI 78
// =====================================

const WHATSAPP_NUMBER = "6285292661522";

// =====================================
// FUNGSI WHATSAPP
// =====================================

function sendWhatsApp(message) {
  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}

function orderGeneral() {
  const message =
`Assalamu'alaikum, saya tertarik dengan produk UD. SINAR SAKTI 78.

Saya ingin mendapatkan informasi mengenai:
- Jenis produk
- Harga
- Ketersediaan stok
- Pengiriman

Mohon informasi lebih lanjut. Terima kasih.`;

  sendWhatsApp(message);
}

function orderProduct(productName) {
  const message =
`Assalamu'alaikum, saya tertarik dengan produk UD. SINAR SAKTI 78.

Nama Produk: ${productName}
Jumlah Pesanan:
Lokasi Pengiriman:

Mohon informasi harga dan ketersediaan produk.

Terima kasih.`;

  sendWhatsApp(message);
}

// =====================================
// NAVIGASI MOBILE
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");

  menuToggle.textContent =
    navLinks.classList.contains("active") ? "✕" : "☰";
});

// Tutup menu setelah memilih navigasi

document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// =====================================
// TAHUN COPYRIGHT OTOMATIS
// =====================================

const copyright = document.querySelector(".copyright");

if (copyright) {
  copyright.textContent =
    "© " + new Date().getFullYear() +
    " UD. SINAR SAKTI 78. Hak Cipta Dilindungi.";
}
