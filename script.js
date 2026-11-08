/* =================================
   KONFIGURASI WEBSITE
================================= */

const CONFIG = {
  namaUsaha: "UD. SINAR SAKTI 78",
  whatsapp: "6285292661522",
  akunTikTok: "https://www.tiktok.com/@ud.sinarsakti78"
};


/* =================================
   DATA PRODUK
================================= */

const products = [
  {
    id: 1,
    nama: "Pupuk Kohe Kambing Etawa Organik",
    kategori: "PUPUK ORGANIK",
    deskripsi:
      "Pupuk organik berbahan dasar kohe kambing etawa (kohe) dalam kondisi original. Dikemas menggunakan karung beras ukuran 50 kg. Angka tersebut menunjukkan ukuran karung, bukan berat isi kohe.",
    jenis: "Pupuk organik",
    bahan: "Kohe kambing etawa",
    kemasan: "Karung beras ukuran 50 kg (ukuran karung)",
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
      "Pupuk organik berbahan dasar kohe kambing etawa yang melalui proses penggilingan dan fermentasi. Dikemas menggunakan karung beras ukuran 25 kg. Angka tersebut menunjukkan ukuran karung, bukan berat isi kohe.",
    jenis: "Pupuk organik",
    bahan: "Kohe kambing etawa",
    kemasan: "Karung beras ukuran 25 kg (ukuran karung)",
    harga: "Hubungi No. WhatsApp",
    foto: "UD-Fermentasi.jpg",
    keterangan:
      "Pupuk kohe kambing etawa yang telah melalui proses penggilingan dan fermentasi.",
    stok: "Tersedia",
    distribusi: "Khusus Pulau Jawa, antar sampai lokasi"
  }
];


/* =================================
   DATA AKTIVITAS TIKTOK
================================= */

const activities = [
  {
    judul: "Aktivitas Peternakan",
    kategori: "Peternakan",
    deskripsi: "Kegiatan peternakan kambing etawa.",
    link: "https://vt.tiktok.com/ZSpSaeuoT/"
  },
  {
    judul: "Proses Pengolahan Pupuk",
    kategori: "Produksi",
    deskripsi: "Proses pengolahan pupuk organik.",
    link: "https://vt.tiktok.com/ZSpS5bHVx/"
  }
];


/* =================================
   WHATSAPP
================================= */

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


/* =================================
   TAMPILKAN PRODUK
================================= */

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
        <span class="fertilizer-category">${product.kategori}</span>
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

        <p class="fertilizer-note">${product.keterangan}</p>

        <div class="fertilizer-actions">
          <span class="fertilizer-price">${product.harga}</span>
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


/* =================================
   VALIDASI LINK TIKTOK
================================= */

function getTikTokVideoId(url) {
  try {
    const parsedUrl = new URL(url);
    const match = parsedUrl.pathname.match(/\/video\/(\d+)/);
    return match ? match[1] : null;
  } catch (error) {
    return null;
  }
}


/* =================================
   TAMPILKAN AKTIVITAS TIKTOK
================================= */

function renderActivities() {
  const container = document.getElementById("activity-list");

  if (!container) return;

  if (!activities.length) {
    container.innerHTML = `
      <div class="activity-empty">
        <strong>Dokumentasi Aktivitas Produksi</strong>
        Video aktivitas produksi akan ditampilkan di sini.
        Silakan tambahkan link video TikTok pada bagian
        <strong>activities</strong> di file script.js.
      </div>
    `;
    return;
  }

  container.innerHTML = activities.map(item => {
    const videoId = getTikTokVideoId(item.link);
    let videoElement = "";

    if (videoId) {
      videoElement = `
        <div class="activity-video">
          <iframe
            src="https://www.tiktok.com/player/v1/${videoId}?autoplay=0"
            title="${item.judul}"
            loading="lazy"
            allow="fullscreen"
            allowfullscreen>
          </iframe>
        </div>
      `;
    } else {
      videoElement = `
        <a
          class="activity-link-preview"
          href="${item.link}"
          target="_blank"
          rel="noopener noreferrer">
          <span class="tiktok-play">▶</span>
          <strong>Tonton video di TikTok</strong>
          <small>Klik untuk membuka video</small>
        </a>
      `;
    }

    return `
      <article class="activity-card">
        ${videoElement}
        <div class="activity-content">
          <span class="activity-category">${item.kategori}</span>
          <h3>${item.judul}</h3>
          <p>${item.deskripsi || ""}</p>
          <a
            href="${item.link}"
            target="_blank"
            rel="noopener noreferrer"
            class="activity-link">
            Tonton di TikTok ↗
          </a>
        </div>
      </article>
    `;
  }).join("");
}


/* =================================
   TOMBOL WHATSAPP
================================= */

function initWhatsAppButtons() {
  document.querySelectorAll("[data-whatsapp-general]").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      orderGeneral();
    });
  });
}


/* =================================
   MENU MOBILE
================================= */

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


/* =================================
   TAHUN FOOTER
================================= */

function updateCopyright() {
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}


/* =================================
   INISIALISASI WEBSITE
================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderActivities();
  initMobileMenu();
  initWhatsAppButtons();
  updateCopyright();
});
