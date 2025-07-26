// simple2.js - Simple Ad Rotator Widget
// Upload file ini ke GitHub dan panggil dari WordPress

document.addEventListener("DOMContentLoaded", function () {
    // Array produk iklan - edit sesuai kebutuhan
    const products = [
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7rase-m3thqomviw9gef.webp", link: "https://s.shopee.co.id/2LNcY44wgJ" },
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
{ image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk2-mag17gdoyw4eda@resize_w640_nl.webp", link: "https://s.shopee.co.id/6KtlJPpiZj" },
        // Tambahkan produk lain di sini
    ];

    let currentIndex = 0;
    let shuffledProducts = [];

    // Fungsi untuk mengacak array (Fisher-Yates shuffle)
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Inisialisasi widget
    function initAdRotator() {
        // Cari container dengan class 'simple-ad-rotator'
        const container = document.querySelector('.simple-ad-rotator');
        if (!container) {
            console.error('Container .simple-ad-rotator tidak ditemukan');
            return;
        }

        // Acak urutan produk
        shuffledProducts = shuffleArray(products);

        // Inject CSS
        injectCSS();

        // Generate HTML
        generateHTML(container);

        // Mulai rotasi
        startRotation();
    }

    // Inject CSS styles
    function injectCSS() {
        const css = `
        .simple-ad-rotator {
            position: relative;
            width: 100%;
            max-width: 300px;
            height: 250px;
            margin: 10px auto;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            background: #f9f9f9;
        }
        
        .ad-slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.6s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            box-sizing: border-box;
        }
        
        .ad-slide.active {
            opacity: 1;
        }
        
        .ad-slide img {
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            object-fit: contain;
            border-radius: 6px;
            transition: transform 0.3s ease;
        }
        
        .ad-slide:hover img {
            transform: scale(1.02);
        }
        
        .ad-slide a {
            display: block;
            text-decoration: none;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        /* Loading indicator */
        .ad-slide img[data-loading="true"] {
            opacity: 0.5;
        }
        
        /* Fade animation untuk smooth transition */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .simple-ad-rotator::before {
            content: '';
            position: absolute;
            top: 5px;
            right: 5px;
            width: 4px;
            height: 4px;
            background: #007cba;
            border-radius: 50%;
            opacity: 0.7;
            z-index: 10;
        }
        `;

        // Cek apakah CSS sudah di-inject
        if (!document.querySelector('#simple-ad-rotator-css')) {
            const style = document.createElement('style');
            style.id = 'simple-ad-rotator-css';
            style.textContent = css;
            document.head.appendChild(style);
        }
    }

    // Generate HTML untuk slides
    function generateHTML(container) {
        container.innerHTML = '';
        
        shuffledProducts.forEach((product, index) => {
            const slide = document.createElement('div');
            slide.className = 'ad-slide';
            if (index === 0) slide.classList.add('active');
            
            slide.innerHTML = `
                <a href="${product.link}" target="_blank" rel="nofollow noopener">
                    <img src="${product.image}" 
                         alt="Produk ${index + 1}" 
                         loading="lazy"
                         onerror="this.style.display='none'"
                         onload="this.removeAttribute('data-loading')"
                         data-loading="true">
                </a>
            `;
            
            container.appendChild(slide);
        });
    }

    // Tampilkan slide berdasarkan index
    function showSlide(index) {
        const slides = document.querySelectorAll('.simple-ad-rotator .ad-slide');
        
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        
        currentIndex = index;
    }

    // Mulai rotasi otomatis
    function startRotation() {
        setInterval(() => {
            const nextIndex = (currentIndex + 1) % shuffledProducts.length;
            showSlide(nextIndex);
            
            // Re-shuffle setiap siklus lengkap untuk keadilan
            if (nextIndex === 0) {
                setTimeout(() => {
                    reshuffleAds();
                }, 1000);
            }
        }, 4500); // 4.5 detik per slide
    }

    // Acak ulang urutan ads
    function reshuffleAds() {
        const container = document.querySelector('.simple-ad-rotator');
        if (container) {
            shuffledProducts = shuffleArray(products);
            generateHTML(container);
            currentIndex = 0;
        }
    }

    // Jalankan inisialisasi
    initAdRotator();

    // Re-shuffle random setiap 45 detik untuk keadilan ekstra
    setInterval(() => {
        if (Math.random() < 0.4) { // 40% kemungkinan
            reshuffleAds();
        }
    }, 45000);
});
