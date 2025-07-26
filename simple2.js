// promo-widget.js

document.addEventListener("DOMContentLoaded", function () {
  // 1. Definisikan array 'products' di sini (pastikan ini adalah array yang ingin Anda acak)
  const products = [
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0h-mc56q55c0m6451.webp", link: "https://s.shopee.co.id/BJ7y5DC4u" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7r98x-lvwnlvnmblikdf.webp", link: "https://s.shopee.co.id/zhlmDpPt" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0r-mc1r4jy60f2147.webp", link: "https://s.shopee.co.id/VvyMhBvP0" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk6-m864xkw2jb42cb.webp", link: "https://s.shopee.co.id/LcYAOCYjz" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7rasg-m3yg1o0qxl2a36@resize_w640_nl.webp", link: "https://s.shopee.co.id/qYolJAej6" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7rasd-m0wtxcefsy6c08@resize_w640_nl.webp", link: "https://s.shopee.co.id/10sExcA1OB" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7r992-lscp2yyxi1c913@resize_w640_nl.webp", link: "https://s.shopee.co.id/40VqX7ybIn" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7rase-m1gigd5k1zg16c.webp", link: "https://s.shopee.co.id/4VS782whHu" },
{ image: "https://down-id.img.susercontent.com/file/id-11134201-7rbk6-ma40nqikn94r36@resize_w640_nl.webp", link: "https://s.shopee.co.id/4L8gvjxKct" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk2-matho2f1vt0920@resize_w640_nl.webp", link: "https://s.shopee.co.id/4q4xWevQc0" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7r98t-lvdo82ao3cege8@resize_w640_nl.webp", link: "https://s.shopee.co.id/4flXKLw3wz" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7rasb-m53sbylag07q84@resize_w640_nl.webp", link: "https://s.shopee.co.id/5AhnvGu9w6" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk2-m8rdj83qak1n55@resize_w640_nl.webp", link: "https://s.shopee.co.id/50ONixunH5" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-luud0lhejo954e@resize_w640_nl.webp", link: "https://s.shopee.co.id/2qJt8z32fg" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7rbkb-m9ixk2dxayhpf6@resize_w640_nl.webp", link: "https://s.shopee.co.id/2g0Swg3g0f" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk5-m8adpm8nozd7d4@resize_w640_nl.webp", link: "https://s.shopee.co.id/3AwjXb1lzm" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7rbkc-m9b9096hxkw241.webp", link: "https://s.shopee.co.id/30dJLI2PKl" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk5-m77ejgpa45nr7c.webp", link: "https://s.shopee.co.id/3VZZwD0VJs" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lsvgeceu6x1p7c@resize_w640_nl.webp", link: "https://s.shopee.co.id/3LG9ju18er" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk3-m67s0i4c2j6gcb.webp", link: "https://s.shopee.co.id/6pq1uKnoYa" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7qukz-lgpzzbx8aehm04.webp", link: "https://s.shopee.co.id/6fWbi1oRtZ" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7r98q-lnmhtnpykyfv23.webp", link: "https://s.shopee.co.id/709S6dnBDf" },
{ image: "https://down-id.img.susercontent.com/file/19bfd9a89514d0ad9b5587c3531b897c@resize_w640_nl.webp", link: "https://s.shopee.co.id/7V5ihYlHCm" },
{ image: "https://down-id.img.susercontent.com/file/c29c7efddb6226d61eb34e464961a7d5@resize_w640_nl.webp", link: "https://s.shopee.co.id/7KmIVFluXl" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lx1znkr4jxql03.webp", link: "https://s.shopee.co.id/7fP8trkdrr" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7r98y-lls48g73os5of2.webp", link: "https://s.shopee.co.id/5VKeJsstGS" },
{ image: "https://down-id.img.susercontent.com/file/047b407f83bb66da6ac572190a2d645d@resize_w640_nl.webp", link: "https://s.shopee.co.id/5pxUiUrcaY" },
{ image: "https://down-id.img.susercontent.com/file/67b8b6c126db18a74a7ff537690a0ba2@resize_w640_nl.webp", link: "https://s.shopee.co.id/5fe4WBsFvX" },
{ image: "https://down-id.img.susercontent.com/file/id-11134211-7r98x-ls0opd0p1pllff@resize_w640_nl.webp", link: "https://s.shopee.co.id/6AaL76qLue" },
{ image: "https://down-id.img.susercontent.com/file/eedd3797cebf1f12c77d8380e4844150@resize_w640_nl.webp", link: "https://s.shopee.co.id/60GuunqzFd" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7qul4-li71cgcrtzak66.webp", link: "https://s.shopee.co.id/6VDBVip5Ek" },
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk2-mag17gdoyw4eda@resize_w640_nl.webp", link: "https://s.shopee.co.id/6KtlJPpiZj" }
  ];

  // 2. Deklarasikan variabel dan elemen DOM
  let index = 0;
  const image = document.getElementById('thumb-image');
  const link = document.getElementById('thumb-link');
  const container = document.getElementById('affiliate-widget-thumb');

  // 3. Fungsi untuk mengacak (shuffle) array
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // ES6 destructuring swap
    }
  }

  // 4. Lakukan pengacakan pada array 'products' **setelah didefinisikan**
  shuffleArray(products);

  // 5. Fungsi untuk menampilkan gambar dan link produk berikutnya
  function showNext() {
    // Pastikan elemen ditemukan sebelum mencoba mengakses propertinya
    if (image && link) {
      const p = products[index];
      image.src = p.image;
      link.href = p.link;
      index = (index + 1) % products.length; // Lanjut ke indeks berikutnya, kembali ke 0 jika sudah di akhir
    } else {
        console.error("Elemen 'thumb-image' atau 'thumb-link' tidak ditemukan. Pastikan ID HTML sudah benar.");
        clearInterval(interval); // Hentikan interval jika elemen tidak ditemukan
    }
  }

  // 6. Tampilkan gambar pertama (setelah di-shuffle) segera
  showNext();

  // 7. Atur interval untuk mengganti gambar setiap 5 detik
  let interval = setInterval(showNext, 5000);

  // 8. Jeda otomatis saat kursor di atas container
  if (container) {
    container.addEventListener('mouseenter', () => clearInterval(interval));

    // 9. Lanjutkan otomatis saat kursor meninggalkan container, dengan interval 4 detik
    container.addEventListener('mouseleave', () => {
      interval = setInterval(showNext, 4000);
    });
  } else {
    console.warn("Elemen 'affiliate-widget-thumb' tidak ditemukan. Fitur jeda/lanjut saat hover tidak akan berfungsi.");
  }
});
