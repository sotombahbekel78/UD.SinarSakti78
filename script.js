
/* =================================================
   UD. SINAR SAKTI 78
   FINAL WEBSITE JAVASCRIPT
================================================= */


/* =================================================
   1. KONFIGURASI WEBSITE
   GANTI NOMOR WHATSAPP DI BAGIAN INI
================================================= */

const CONFIG = {

  namaUsaha: "UD. SINAR SAKTI 78",

  whatsapp: "6285292661522",

  lokasi: "Kaligesing, Purworejo, Jawa Tengah"

};


/* =================================================
   2. DATA PRODUK
   TAMBAH / EDIT PRODUK DI BAGIAN INI
================================================= */

const products = [

  {
    id: 1,

    nama: "Pupuk Etawa Fermentasi",

    kategori: "PUPUK FERMENTASI",

    deskripsi:
      "Pupuk organik berbahan dasar kotoran kambing etawa yang melalui proses fermentasi. Cocok untuk kebutuhan pertanian, perkebunan, dan budidaya tanaman.",

    jenis: "Organik fermentasi",

    bahan: "Kotoran kambing etawa",

    kemasan: "Dapat disesuaikan",

    harga: "Hubungi kami",

    foto: "images/pupuk-fermentasi.jpg",

    keterangan:
      "Informasi harga, ukuran kemasan, dan ketersediaan produk dapat dikonfirmasi melalui WhatsApp."

  },

  {
    id: 2,

    nama: "Pupuk Original Langsung dari Kandang",

    kategori: "PUPUK ORIGINAL",

    deskripsi:
      "Pupuk organik kambing etawa dalam kondisi original, berasal langsung dari kandang tanpa melalui proses fermentasi.",

    jenis: "Organik original",

    bahan: "Kotoran kambing etawa",

    kemasan: "Dapat disesuaikan",

    harga: "Hubungi kami",

    foto: "images/pupuk-original.jpg",

    keterangan:
      "Informasi harga, ukuran kemasan, dan ketersediaan produk dapat dikonfirmasi melalui WhatsApp."

  }

];


/* =================================================
   3. DATA TESTIMONI
   MASUKKAN TESTIMONI ASLI PELANGGAN DI SINI

   KATEGORI:
   - Review Produk
   - Testimoni Pembelian
   - Dokumentasi Pengiriman
   - Repeat Order
================================================= */

const testimonials = [

  /*
  CONTOH FORMAT DATA:

  {
    id: 1,
    nama: "Nama Pelanggan",
    lokasi: "Purworejo",
    produk: "Pupuk Etawa Fermentasi",
    kategori: "Review Produk",
    ulasan: "Masukkan ulasan asli pelanggan.",
    foto: "images/testimoni-1.jpg"
  }

  Hapus tanda komentar jika ingin memasukkan data.
  Jangan menggunakan ulasan contoh sebagai testimoni nyata.
  */

];


/* =================================================
   4. DATA GALERI PRODUKSI
   TAMBAH FOTO / VIDEO DI BAGIAN INI
================================================= */

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
    judul: "Pupuk Etawa Fermentasi",
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


/* =================================================
   5. FUNGSI WHATSAPP
================================================= */

function sendWhatsApp(message) {

  const url =
    "https://wa.me/" +
    CONFIG.whatsapp +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");

}


function orderGeneral() {

  const message =
`Assalamu'alaikum, saya tertarik dengan produk ${CONFIG.namaUsaha}.

Saya ingin mendapatkan informasi mengenai:

- Jenis produk
- Harga produk
- Ketersediaan stok
- Ukuran kemasan
- Pengiriman

Mohon informasi lebih lanjut.

Terima kasih.`

  ;

  sendWhatsApp(message);

}


function orderProduct(id) {

  const product = products.find(item => item.id === id);

  if (!product) return;

  const message =
`Assalamu'alaikum, saya tertarik dengan produk ${CONFIG.namaUsaha}.

Nama Produk: ${product.nama}

Jumlah Pesanan:
Ukuran Kemasan:
Lokasi Pengiriman:

Mohon informasi harga dan ketersediaan produk.

Terima kasih.`

  ;

  sendWhatsApp(message);

}


function detailProduct(id) {

  const product = products.find(item => item.id === id);

  if (!product) return;

  const message =
`Assalamu'alaikum, saya ingin mengetahui informasi lebih lanjut mengenai produk ${CONFIG.namaUsaha}.

Nama Produk: ${product.nama}

Mohon informasi mengenai:

- Detail produk
- Harga
- Ukuran kemasan
- Ketersediaan stok
- Pengiriman

Terima kasih.`

  ;

  sendWhatsApp(message);

}


/* =================================================
   6. RENDER PRODUK
================================================= */

function renderProducts() {

  const container = document.getElementById("product-list");

  if (!container) return;

  container.innerHTML = "";

  if (products.length === 0) {

    container.innerHTML = `
      <div class="testimonial-empty">
        Produk belum tersedia.
      </div>
    `;

    return;

  }

  products.forEach(product => {

    const card = document.createElement("article");

    card.className = "fertilizer-card";

    card.innerHTML = `

      <div class="fertilizer-image">

        <img
          src="${product.foto}"
          alt="${product.nama}"
          loading="lazy"
        >

      </div>

      <div class="fertilizer-content">

        <span class="fertilizer-label">
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
            <span>Bahan Dasar</span>
            <strong>${product.bahan}</strong>
          </div>

          <div class="fertilizer-detail">
            <span>Kemasan</span>
            <strong>${product.kemasan}</strong>
          </div>

          <div class="fertilizer-detail">
            <span>Harga</span>
            <strong>${product.harga}</strong>
          </div>

        </div>

        <div class="fertilizer-note">
          ${product.keterangan}
        </div>

        <div class="fertilizer-actions">

          <button
            type="button"
            class="btn-product-detail"
            data-detail="${product.id}"
          >
            Detail Produk
          </button>

          <button
            type="button"
            class="btn-product-order"
            data-order="${product.id}"
          >
            Pesan via WhatsApp →
          </button>

        </div>

      </div>

    `;

    const image = card.querySelector("img");

    image.addEventListener("error", () => {
      image.alt = "Foto produk belum tersedia";
    });

    container.appendChild(card);

  });


  // Event tombol detail dan pesan

  container.querySelectorAll("[data-order]").forEach(button => {

    button.addEventListener("click", () => {

      orderProduct(Number(button.dataset.order));

    });

  });


  container.querySelectorAll("[data-detail]").forEach(button => {

    button.addEventListener("click", () => {

      detailProduct(Number(button.dataset.detail));

    });

  });

}


/* =================================================
   7. RENDER TESTIMONI
================================================= */

function renderTestimonials() {

  const container =
    document.getElementById("testimonial-list");

  if (!container) return;

  container.innerHTML = "";

  if (testimonials.length === 0) {

    container.innerHTML = `

      <div class="testimonial-empty">

        <strong>Dokumentasi pelanggan segera hadir.</strong>

        <p>
          Testimoni asli pelanggan akan ditampilkan
          di bagian ini.
        </p>

      </div>

    `;

    return;

  }

  testimonials.forEach(item => {

    const card = document.createElement("article");

    card.className = "testimonial-card";

    card.innerHTML = `

      <img
        class="testimonial-photo"
        src="${item.foto}"
        alt="Dokumentasi pelanggan ${item.nama}"
        loading="lazy"
      >

      <div class="testimonial-body">

        <span class="testimonial-category">
          ${item.kategori}
        </span>

        <h3>${item.nama}</h3>

        <p class="testimonial-location">
          ${item.lokasi}
        </p>

        <p class="testimonial-review">
          "${item.ulasan}"
        </p>

        <div class="testimonial-product">
          Produk: ${item.produk}
        </div>

      </div>

    `;

    container.appendChild(card);

  });

}


/* =================================================
   8. RENDER GALERI
================================================= */

function renderGallery() {

  const container = document.getElementById("gallery-list");

  if (!container) return;

  container.innerHTML = "";

  gallery.forEach((item, index) => {

    const card = document.createElement("div");

    card.className = "gallery-item";

    card.innerHTML = `

      <img
        src="${item.foto}"
        alt="${item.judul}"
        loading="lazy"
      >

      <span class="gallery-caption">
        ${item.judul}
      </span>

    `;

    card.addEventListener("click", () => {

      openLightbox(item.foto, item.judul);

    });

    container.appendChild(card);

  });

}


/* =================================================
   9. LIGHTBOX GALERI
================================================= */

function openLightbox(image, caption) {

  const lightbox = document.getElementById("lightbox");

  const lightboxImage = document.getElementById("lightbox-image");

  const lightboxCaption = document.getElementById("lightbox-caption");

  if (!lightbox || !lightboxImage) return;

  lightboxImage.src = image;

  lightboxCaption.textContent = caption;

  lightbox.classList.add("active");

  lightbox.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

}


function closeLightbox() {

  const lightbox = document.getElementById("lightbox");

  if (!lightbox) return;

  lightbox.classList.remove("active");

  lightbox.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

}


const lightboxClose = document.getElementById("lightbox-close");

if (lightboxClose) {

  lightboxClose.addEventListener("click", closeLightbox);

}


const lightbox = document.getElementById("lightbox");

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


/* =================================================
   10. NAVBAR MOBILE
================================================= */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

  menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", String(isOpen));

  });


  navMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("active");

      menuToggle.textContent = "☰";

      menuToggle.setAttribute("aria-expanded", "false");

    });

  });

}


/* =================================================
   11. COPYRIGHT OTOMATIS
================================================= */

function updateCopyright() {

  const copyright = document.querySelector(".copyright");

  if (!copyright) return;

  copyright.textContent =
    `© ${new Date().getFullYear()} ${CONFIG.namaUsaha}. Hak Cipta Dilindungi.`;

}


/* =================================================
   12. INISIALISASI WEBSITE
================================================= */

document.addEventListener("DOMContentLoaded", () => {

  renderProducts();

  renderTestimonials();

  renderGallery();

  updateCopyright();

});
