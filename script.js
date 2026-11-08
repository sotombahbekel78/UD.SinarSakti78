/* KONFIGURASI */
const CONFIG = {
  namaUsaha: "UD. SINAR SAKTI 78",
  whatsapp: "6285292661522"
};


/* DATA PRODUK */
const products = [
  {
    id: 1,
    nama: "Pupuk Kohe Kambing Etawa Organik",
    kategori: "PUPUK ORGANIK",
    deskripsi:
      "Pupuk organik berbahan dasar kotoran kambing etawa (kohe) dalam kondisi original. Dikemas menggunakan karung beras dengan ukuran kurang lebih 50 kg.",
    jenis: "Pupuk organik",
    bahan: "Kotoran kambing etawa",
    kemasan: "Karung beras ±50 kg",
    harga: "Hubungi No. WhatsApp",
    foto: "UD-Original.jpg",
    keterangan:
      "Pupuk kohe kambing etawa dalam kondisi original, langsung dari kandang.",
    stok: "Tersedia",
    distribusi: "Khusus Pulau Jawa, antar sampai lokasi"
  },
  {
    id: 2,
    nama: "Pupuk Kohe Giling Fermentasi",
    kategori: "PUPUK ORGANIK",
    deskripsi:
      "Pupuk organik berbahan dasar kotoran kambing etawa yang melalui proses penggilingan dan fermentasi. Dikemas menggunakan karung beras dengan ukuran kurang lebih 25 kg.",
    jenis: "Pupuk organik",
    bahan: "Kotoran kambing etawa",
    kemasan: "Karung beras ±25 kg",
    harga: "Hubungi No. WhatsApp",
    foto: "UD-Fermentasi.jpg",
    keterangan:
      "Pupuk kohe kambing etawa yang telah melalui proses penggilingan dan fermentasi.",
    stok: "Tersedia",
    distribusi: "Khusus Pulau Jawa, antar sampai lokasi"
  }
];


/* WHATSAPP */
function sendWhatsApp(message) {
  const url =
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

function orderGeneral() {
  const message =
    `Halo ${CONFIG.namaUsaha}, saya ingin bertanya mengenai produk pupuk organik kambing etawa.

Mohon informasi harga, stok, dan pengiriman.

Terima kasih.`;

  sendWhatsApp(message);
}

function orderProduct(id) {
  const product = products.find(item => item.id === id);

  if (!product) return;

  const message =
    `Halo ${CONFIG.namaUsaha}, saya tertarik dengan produk berikut:

Nama produk: ${product.nama}
Kemasan: ${product.kemasan}

Mohon informasi harga, ketersediaan stok, dan biaya pengiriman.

Terima kasih.`;

  sendWhatsApp(message);
}


/* TAMPILKAN PRODUK */
function renderProducts() {
  const container = document.getElementById("product-list");

  if (!container) return;

  container.innerHTML = products.map(product => `
    <article class="fertilizer-card">

      <div class="fertilizer-image">
        <img
          src="${product.foto}"
          alt="${product.nama}"
          loading="lazy"
          onerror="this.style.display='none'; this.parentElement.innerHTML='<p class=\\'image-error\\'>Foto produk belum tersedia</p>';">
      </div>

      <div class="fertilizer-content">

        <span class="fertilizer-category">
          ${product.kategori}
        </span>

        <h3>${product.nama}</h3>

        <p>${product.deskripsi}</p>

        <div class="fertilizer-details">

          <div class="fertilizer-detail">
            <span>Jenis Produk</span>
            <strong>${product.jenis}</strong>
          </div>

          <div class="fertilizer-detail">
            <span>Bahan</span>
            <strong>${product.bahan}</strong>
          </div>

          <div class="fertilizer-detail">
            <span>Kemasan</span>
            <strong>${product.kemasan}</strong>
          </div>

          <div class="fertilizer-detail">
            <span>Ketersediaan</span>
            <strong>${product.stok}</strong>
          </div>

          <div class="fertilizer-detail">
            <span>Harga</span>
            <strong>${product.harga}</strong>
          </div>

          <div class="fertilizer-detail">
            <span>Distribusi</span>
            <strong>${product.distribusi}</strong>
          </div>

        </div>

        <p class="fertilizer-note">
          ${product.keterangan}
        </p>

        <div class="fertilizer-actions">

          <span class="fertilizer-price">
            ${product.harga}
          </span>

          <button
            type="button"
            class="btn btn-primary"
            onclick="orderProduct(${product.id})">
            Tanya Produk via WhatsApp
          </button>

        </div>

      </div>
    </article>
  `).join("");
}


/* MENU MOBILE */
function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");

    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu" : "Buka menu"
    );
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Buka menu");
    });
  });

  document.addEventListener("click", event => {
    const clickedInsideMenu =
      nav.contains(event.target) ||
      toggle.contains(event.target);

    if (!clickedInsideMenu) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Buka menu");
    }
  });
}


/* TOMBOL WHATSAPP */
function initWhatsAppButtons() {
  document.querySelectorAll("[data-whatsapp-general]").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      orderGeneral();
    });
  });
}


/* TAHUN FOOTER */
function updateCopyright() {
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}


/* INISIALISASI */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initMobileMenu();
  initWhatsAppButtons();
  updateCopyright();
});
