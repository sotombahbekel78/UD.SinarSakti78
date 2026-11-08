
// =====================================================
// UD. SINAR SAKTI 78
// WEBSITE JAVASCRIPT
// =====================================================


// 1. KONFIGURASI WEBSITE

const CONFIG = {
  namaUsaha: "UD. SINAR SAKTI 78",
  whatsapp: "6285292661522",
  lokasi: "Kaligesing, Purworejo, Jawa Tengah"
};


// 2. DATA PRODUK

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

    foto: "images/pupuk-original.jpg",

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

    foto: "images/pupuk-fermentasi.jpg",

    keterangan:
      "Pupuk kohe kambing etawa yang telah melalui proses penggilingan dan fermentasi.",

    stok: "Tersedia",
    distribusi: "Khusus Pulau Jawa, antar sampai lokasi"
  }

];


// 3. DATA TESTIMONI
// Tambahkan testimoni pelanggan asli di bagian ini.

const testimonials = [

  /*
  {
    nama: "Nama Pelanggan",
    lokasi: "Yogyakarta",
    pesan: "Tuliskan ulasan pelanggan di sini.",
    foto: "images/testimoni-1.jpg"
  }
  */

];


// 4. DATA GALERI

const gallery = [

  {
    judul: "Peternakan Kambing Etawa",
    foto: "images/kandang.jpg"
  },

  {
    judul: "Proses Produksi Pupuk",
    foto: "images/produksi.jpg"
  },

  {
    judul: "Pupuk Kohe Original",
    foto: "images/pupuk-original.jpg"
  },

  {
    judul: "Pupuk Kohe Giling Fermentasi",
    foto: "images/pupuk-fermentasi.jpg"
  },

  {
    judul: "Pengemasan Produk",
    foto: "images/pengemasan.jpg"
  },

  {
    judul: "Persiapan Pengiriman",
    foto: "images/pengiriman.jpg"
  }

];


// 5. FUNGSI WHATSAPP

function sendWhatsApp(message) {

  const url =
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

}


// Pesan umum

function orderGeneral() {

  const message =
    `Halo ${CONFIG.namaUsaha}, saya tertarik dengan produk pupuk organik kambing etawa.

Mohon informasi mengenai:

1. Harga pupuk kohe organik kemasan ±50 kg.
2. Harga pupuk kohe giling fermentasi kemasan ±25 kg.
3. Ketersediaan stok.
4. Biaya pengiriman ke lokasi saya.

Lokasi pengiriman:

Mohon informasi lebih lanjut. Terima kasih.`;

  sendWhatsApp(message);

}


// Pesan produk tertentu

function orderProduct(id) {

  const product = products.find(item => item.id === id);

  if (!product) return;

  const message =
    `Halo ${CONFIG.namaUsaha}, saya ingin memesan produk berikut:

Nama produk: ${product.nama}
Jenis produk: ${product.jenis}
Kemasan: ${product.kemasan}
Harga: ${product.harga}
Status stok: ${product.stok}

Mohon informasi harga dan biaya pengiriman ke lokasi saya.

Terima kasih.`;

  sendWhatsApp(message);

}


// Pertanyaan produk

function detailProduct(id) {

  const product = products.find(item => item.id === id);

  if (!product) return;

  const message =
    `Halo ${CONFIG.namaUsaha}, saya ingin bertanya mengenai produk:

${product.nama}

Kemasan: ${product.kemasan}
Jenis: ${product.jenis}

Mohon informasi lebih lanjut mengenai harga, penggunaan, ketersediaan, dan pengiriman.

Terima kasih.`;

  sendWhatsApp(message);

}


// 6. RENDER PRODUK

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
        >

      </div>

      <div class="fertilizer-content">

        <span class="fertilizer-category">
          ${product.kategori}
        </span>

        <h3>${product.nama}</h3>

        <p class="fertilizer-description">
          ${product.deskripsi}
        </p>

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
            <span>Ukuran Kemasan</span>
            <strong>${product.kemasan}</strong>
          </div>

          <div class="fertilizer-detail">
            <span>Harga Produk</span>
            <strong>${product.harga}</strong>
          </div>

          <div class="fertilizer-detail">
            <span>Ketersediaan Stok</span>
            <strong>${product.stok}</strong>
          </div>

          <div class="fertilizer-detail">
            <span>Pengiriman</span>
            <strong>${product.distribusi}</strong>
          </div>

        </div>

        <p class="fertilizer-note">
          ${product.keterangan}
        </p>

        <div class="fertilizer-actions">

          <button
            class="btn-primary"
            onclick="orderProduct(${product.id})"
          >
            Pesan via WhatsApp
          </button>

          <button
            class="btn-secondary"
            onclick="detailProduct(${product.id})"
          >
            Tanya Produk
          </button>

        </div>

      </div>

    </article>

  `).join("");

}


// 7. RENDER TESTIMONI

function renderTestimonials() {

  const container =
    document.getElementById("testimonial-list");

  if (!container) return;

  if (testimonials.length === 0) {

    container.innerHTML = `
      <div class="testimonial-empty">
        Testimoni pelanggan akan ditampilkan di sini.
      </div>
    `;

    return;

  }

  container.innerHTML = testimonials.map(item => `

    <article class="testimonial-card">

      ${
        item.foto
          ? `
            <img
              src="${item.foto}"
              alt="Testimoni ${item.nama}"
              class="testimonial-image"
              loading="lazy"
            >
          `
          : ""
      }

      <div class="testimonial-content">

        <p class="testimonial-message">
          "${item.pesan}"
        </p>

        <h4>${item.nama}</h4>

        <span>${item.lokasi || ""}</span>

      </div>

    </article>

  `).join("");

}


// 8. RENDER GALERI

function renderGallery() {

  const container =
    document.getElementById("gallery-list");

  if (!container) return;

  container.innerHTML = gallery.map((item, index) => `

    <div
      class="gallery-item"
      onclick="openLightbox(${index})"
    >

      <img
        src="${item.foto}"
        alt="${item.judul}"
        loading="lazy"
      >

      <div class="gallery-caption">
        <h4>${item.judul}</h4>
      </div>

    </div>

  `).join("");

}


// 9. LIGHTBOX GALERI

function openLightbox(index) {

  const item = gallery[index];

  if (!item) return;

  const lightbox =
    document.getElementById("lightbox");

  const image =
    document.getElementById("lightbox-image");

  const caption =
    document.getElementById("lightbox-caption");

  if (!lightbox || !image) return;

  image.src = item.foto;
  image.alt = item.judul;

  if (caption) {
    caption.textContent = item.judul;
  }

  lightbox.classList.add("active");

  document.body.style.overflow = "hidden";

}


function closeLightbox() {

  const lightbox =
    document.getElementById("lightbox");

  if (!lightbox) return;

  lightbox.classList.remove("active");

  document.body.style.overflow = "";

}


function initLightbox() {

  const lightbox =
    document.getElementById("lightbox");

  const closeButton =
    document.getElementById("lightbox-close");

  if (closeButton) {

    closeButton.addEventListener("click", closeLightbox);

  }

  if (lightbox) {

    lightbox.addEventListener("click", event => {

      if (event.target === lightbox) {
        closeLightbox();
      }

    });

  }

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeLightbox();
    }

  });

}


// 10. NAVIGASI MOBILE

function initMobileMenu() {

  const menuToggle =
    document.querySelector(".menu-toggle");

  const navLinks =
    document.querySelector(".nav-links");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {

    const isOpen =
      navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });

  navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");

      menuToggle.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");

    });

  });

}


// 11. TAHUN OTOMATIS FOOTER

function updateCopyright() {

  const yearElement =
    document.getElementById("current-year");

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }

}


// 12. INISIALISASI WEBSITE

document.addEventListener("DOMContentLoaded", () => {

  renderProducts();

  renderTestimonials();

  renderGallery();

  initMobileMenu();

  initLightbox();

  updateCopyright();

});
