// promo-widget.js

document.addEventListener("DOMContentLoaded", function () {
  // 1. Definisikan array 'products' di sini (pastikan ini adalah array yang ingin Anda acak)
  const products = [
    { image: "https://down-zl-id.img.susercontent.com/id-11134207-7rbk8-m6xd1h7o4f5960.webp", link: "https://s.shopee.co.id/3LG4ElPfKU" },
    { image: "https://down-zl-id.img.susercontent.com/id-11134207-7r98x-lzvd53ts1xl17c.webp", link: "https://s.shopee.co.id/9zmyB3eJTV" },
    { image: "https://down-zl-id.img.susercontent.com/id-11134207-7rbkc-m8zauqj69qttb6.webp", link: "https://s.shopee.co.id/4L8bQfLPbg" },
    { image: "https://down-zl-id.img.susercontent.com/id-11134207-7r98o-lkwi9l4fg2pgbe.webp", link: "https://s.shopee.co.id/4flRpIrQLl" },
    { image: "https://down-zl-id.img.susercontent.com/id-11134201-23030-2bjng2mxnfovaf.webp", link: "https://s.shopee.co.id/gFJ3yPDnR" },
    { image: "https://down-zl-id.img.susercontent.com/id-11134207-7rasd-m4kjwh5va7w891.webp", link: "https://s.shopee.co.id/8fHaahk7yU" },
    { image: "https://down-zl-id.img.susercontent.com/id-11134207-7r990-m09lueizfknq59.webp", link: "https://s.shopee.co.id/7ASmnxz3gh" },
    { image: "https://down-zl-id.img.susercontent.com/id-11134207-7rasj-m2wk0dwrm4fh6b.webp", link: "https://s.shopee.co.id/6AaFc9gkKm" },
    { image: "https://down-zl-id.img.susercontent.com/id-11134207-7r992-m09y4308yttq90.webp", link: "https://s.shopee.co.id/6ppwPP48N1" },
    { image: "https://down-zl-id.img.susercontent.com/id-11134207-7rasj-m2zhutrlcy7vf9.webp", link: "https://s.shopee.co.id/BJ2TBF5t3" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk4-m9in5ss4dgy55b.webp", link: "https://s.shopee.co.id/7KmEls3py9" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lyavkn4y0vql4f.webp", link: "https://s.shopee.co.id/1LV1cgz6Un" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk6-m7nz81gzt3rk67@resize_w640_nl.webp", link: "https://s.shopee.co.id/10sBE9LATr" },
    { image: "https://down-id.img.susercontent.com/file/sg-11134201-7ravg-maqy6coj914j91.webp", link: "https://s.shopee.co.id/8pb2VIktEP" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98q-lwpixll6jyx91f.webp", link: "https://s.shopee.co.id/VvugIJfmR" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk4-m8zk5pz8rq1ec8@resize_w640_nl.webp", link: "https://s.shopee.co.id/5fe0moABLv" },
    { image: "https://down-id.img.susercontent.com/file/sg-11134201-7rbm5-lmii8lkpsbax7f@resize_w640_nl.webp", link: "https://s.shopee.co.id/LcUQIUf1E" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasa-m4zowhl0yepy61.webp", link: "https://s.shopee.co.id/BJ4ERX7BK" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk6-maxwqgzevcl463@resize_w640_nl.webp", link: "https://s.shopee.co.id/801vVlo3vI" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98y-lrd7k1pwgkpl95.webp", link: "https://s.shopee.co.id/801vZ61Icb" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98s-lyvxjxgvagcl07.webp", link: "https://s.shopee.co.id/4L8dCJcGJx" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r991-ltb8s4ztbd556d.webp", link: "https://s.shopee.co.id/7piVMn1vwF" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rase-m3ohnlhhfyzed3.webp", link: "https://s.shopee.co.id/1LV1cqQg9R" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ras9-m2u6v4zpw3ua0b@resize_w640_nl.webp", link: "https://s.shopee.co.id/2qJpPbKy65" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk0-m93xrk4xhtshbe.webp", link: "https://s.shopee.co.id/7ASoW4QTb9" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98q-lo9dyb5jdkosa7.webp", link: "https://s.shopee.co.id/6VD7mNoXhY" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0n-mc62iqd57li972@resize_w640_nl.webp", link: "https://s.shopee.co.id/7KmEiNPqGC" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lpbjro0ysmpj93.webp", link: "https://s.shopee.co.id/2B48fqFe7m" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7qula-libdr3b4ol3yf8@resize_w640_nl.webp", link: "https://s.shopee.co.id/Vvud3VqVM" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasd-m3yx2ay4di7s99.webp", link: "https://s.shopee.co.id/4q4tqhK2iJ" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk5-ma2gt77jcin2b8.webp", link: "https://s.shopee.co.id/5pxQyrBXgu" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk2-m9ztcg2avink8b@resize_w640_nl.webp", link: "https://s.shopee.co.id/3fswP5eneq" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lzbsxzm8g2sof5.webp", link: "https://s.shopee.co.id/2g0PDFibgk" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbkb-m89zfzemiodp3b@resize_w640_nl.webp", link: "https://s.shopee.co.id/9zn00C0NEo" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98s-lm3s7qetd8y410.webp", link: "https://s.shopee.co.id/4q4tnC6Zgf" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7qukx-lguqtgvktyhmdd.webp", link: "https://s.shopee.co.id/50OK2Z2Xec" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lwrdqzjowdi3c0.webp", link: "https://s.shopee.co.id/7fP5ARPZYn" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98y-lx3f5s6zwiod32@resize_w640_nl.webp", link: "https://s.shopee.co.id/10sBDyTwUX" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mba8bhaazvcod7@resize_w640_nl.webp", link: "https://s.shopee.co.id/2qJpM6gyO9" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7qukw-lkhtyrge3vhm49.webp", link: "https://s.shopee.co.id/20kiPrjPSW" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r992-lueu5vjnlc440a.webp", link: "https://s.shopee.co.id/3AwfnxLh68" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7qul7-lk0zvd2hwz277b@resize_w640_nl.webp", link: "https://s.shopee.co.id/gFKpMVDAV" },
    { image: "https://down-id.img.susercontent.com/file/sg-11134201-22120-rzx7kt8bpqkve6@resize_w640_nl.webp", link: "https://s.shopee.co.id/8zuSnunJWk" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0m-mbbt4my4prhb0a.webp", link: "https://s.shopee.co.id/2g0PGiSI74" },
    { image: "https://down-id.img.susercontent.com/file/48aa473540c42a64dbc864f9cd405f30.webp", link: "https://s.shopee.co.id/4q4tqG3AzZ" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-ly99julp7ba3e0@resize_w640_nl.webp", link: "https://s.shopee.co.id/2qJpTAoHY0" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasi-m3k6nkx1in6c25.webp", link: "https://s.shopee.co.id/30dFfKR1R6" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk7-m7ovh9so8nvdd6@resize_w640_nl.webp", link: "https://s.shopee.co.id/5VKadU0dds" },
    { image: "https://down-id.img.susercontent.com/file/14e8395f72d590b20eba7bb8417bf7c5@resize_w640_nl.webp", link: "https://s.shopee.co.id/7piVJINwFL" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbkd-m9ofmiuayxoi75@resize_w640_nl.webp", link: "https://s.shopee.co.id/4L8dCMFG3G" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasc-m2p11n5fkmv8e0.webp", link: "https://s.shopee.co.id/1LV1gGXMoQ" },
    { image: "https://down-id.img.susercontent.com/file/id-11134601-7r991-lt3sv1lklapp6b@resize_w640_nl.webp", link: "https://s.shopee.co.id/10sBEBox57" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk8-mb0wftpj6bz8de.webp", link: "https://s.shopee.co.id/LcUQvNhpn" },
    { image: "https://down-id.img.susercontent.com/file/id-11134201-7rasd-m58k4tx9btzs4a@resize_w640_nl.webp", link: "https://s.shopee.co.id/gFKt2ZuAM" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbke-m96p1shheozx48.webp", link: "https://s.shopee.co.id/7fP59m2k8K" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbkd-m7m3nuq1fkwg19@resize_w640_nl.webp", link: "https://s.shopee.co.id/AUjGb6yTDt" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk4-ma0h4irxruky5e@resize_w640_nl.webp", link: "https://s.shopee.co.id/9pTZnRk8q7" },
    { image: "https://down-id.img.susercontent.com/file/id-11134211-7r98z-lsh4keymerec84.webp", link: "https://s.shopee.co.id/3LG5xC5pNo" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasm-m60pbup7s39e9e.webp", link: "https://s.shopee.co.id/4L8dFmLwjE" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasa-m5xvxtyip3y852@resize_w640_nl.webp", link: "https://s.shopee.co.id/5L1AO9YSHW" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98z-lz1es77l18h47b.webp", link: "https://s.shopee.co.id/40VmnXbnPd" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasc-m3zrygsvl7qw8a.webp", link: "https://s.shopee.co.id/1g7s4sW68S" },
    { image: "https://down-id.img.susercontent.com/file/id-11134601-7ra0k-mc7ivvdww3zw5d@resize_w640_nl.webp", link: "https://s.shopee.co.id/9UqjLqvaZk" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasa-m156ff1y4mjpce.webp", link: "https://s.shopee.co.id/9UqjPH2HFn" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbkd-m7khw9nfk3wke2.webp", link: "https://s.shopee.co.id/9UqjIWiLsT" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasc-m2f0u34zyr1f3f.webp", link: "https://s.shopee.co.id/1BBbQUoJj7" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98t-lq31ybug6dl15e.webp", link: "https://s.shopee.co.id/qYl4uIP6P" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasj-m61xk5p431naf1@resize_w640_nl.webp", link: "https://s.shopee.co.id/9pTZkSuJsp" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk1-m9fkqkg67e9ne1@resize_w640_nl.webp", link: "https://s.shopee.co.id/2g0PDILbR2" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk6-ma9aytcgs0owb6@resize_w640_nl.webp", link: "https://s.shopee.co.id/1g7s1PmPjB" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk2-m7rhdnv7z8zoef@resize_w640_nl.webp", link: "https://s.shopee.co.id/60GrBQ8ug1" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasc-m1p062jhrfbw09.webp", link: "https://s.shopee.co.id/6AaHNj8HL2" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk0-m7vwzae2r94y17@resize_w640_nl.webp", link: "https://s.shopee.co.id/3fswS77cME" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rase-m27xe3o17glc0d@resize_w640_nl.webp", link: "https://s.shopee.co.id/9ADsxCJrVR" },
    { image: "https://down-id.img.susercontent.com/file/sg-11134201-22110-y038va3utgkvf0@resize_w640_nl.webp", link: "https://s.shopee.co.id/LcUTzKJ7O" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ras9-m30ia1uw8m8hc4@resize_w640_nl.webp", link: "https://s.shopee.co.id/3VZWGFP7QB" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk8-m9fkqkg60dffa9.webp", link: "https://s.shopee.co.id/qYkybFLSb" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk4-m8a5jcfi9a7h4e@resize_w640_nl.webp", link: "https://s.shopee.co.id/709ONG56e3" },
    { image: "https://down-id.img.susercontent.com/file/sg-11134201-7rdx8-m0chbv5hvhxgb8.webp", link: "https://s.shopee.co.id/1VoRp9Q2nR" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbke-m9qr5huwprsy51.webp", link: "https://s.shopee.co.id/8UyCA0zOah" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbkb-m9qr5huwr6de15.webp", link: "https://s.shopee.co.id/4flTayDzNM" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk6-m9gnjel2c6j515.webp", link: "https://s.shopee.co.id/40Vmqj6LgS" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk8-ma2hv9hee1p926.webp", link: "https://s.shopee.co.id/50OJzV5wMl" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mc93owop1ae1e7.webp", link: "https://s.shopee.co.id/4VS3LL1O11" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0j-mc054u10es6xc8.webp", link: "https://s.shopee.co.id/9ADt0f3Xvl" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk3-m8a5q159vrpp01.webp", link: "https://s.shopee.co.id/1g7ry8CAli" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r990-lz24exlsbrk534.webp", link: "https://s.shopee.co.id/10sBHnvGGV" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk8-m9jvdwwt5oim21@resize_w640_nl.webp", link: "https://s.shopee.co.id/7ASoZWRTYj" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk0-m9nvktn9ay6q37@resize_w640_nl.webp", link: "https://s.shopee.co.id/1qRIDgHzmw" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbkd-m9nvdiutwl7i10@resize_w640_nl.webp", link: "https://s.shopee.co.id/1qRIARBXQl" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasm-m30ia1uvvz4h28@resize_w640_nl.webp", link: "https://s.shopee.co.id/3fswSYOU5A" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbkc-m9nugqfr9j8206@resize_w640_nl.webp", link: "https://s.shopee.co.id/3AwfoAghfp" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbka-m9nv7dwhk2ct61@resize_w640_nl.webp", link: "https://s.shopee.co.id/2B48Z3AGkj" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk6-m9nvktn9nlaq44@resize_w640_nl.webp", link: "https://s.shopee.co.id/1VoRlpCo6f" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasj-m2kkl8z1eci982.webp", link: "https://s.shopee.co.id/4flTdx3oKW" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbkc-m9nv1w8cpg5766@resize_w640_nl.webp", link: "https://s.shopee.co.id/VvudJTqpP" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk0-m9jkl0819vql50@resize_w640_nl.webp", link: "https://s.shopee.co.id/3Awfkt6Sit" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbke-m9nv7dwheg31f9@resize_w640_nl.webp", link: "https://s.shopee.co.id/1BBbNDE4mh" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasl-m2lu498hsyw079@resize_w640_nl.webp", link: "https://s.shopee.co.id/2qJpSaAn37" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk0-m9nvrmvwted736@resize_w640_nl.webp", link: "https://s.shopee.co.id/30dFbrhL1p" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk6-m9nugqfrm6c20e@resize_w640_nl.webp", link: "https://s.shopee.co.id/3Awfo8Cv5a" },
    { image: "https://down-id.img.susercontent.com/file/ce3c7288aeadfd5155df9cbc62f7836e.webp", link: "https://s.shopee.co.id/5L1ARB1Gyr" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0p-mcm8r34z94if26@resize_w640_nl.webp", link: "https://s.shopee.co.id/1BBbTWH8QV" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbkd-m8p5eiwn924bfb@resize_w640_nl.webp", link: "https://s.shopee.co.id/2B48fnUC7X" },
    { image: "https://down-id.img.susercontent.com/file/dc26a89e1520ec3eb85e9a61a8825cbb@resize_w640_nl.webp", link: "https://s.shopee.co.id/qYl1spaQ6" },
    { image: "https://down-id.img.susercontent.com/file/sg-11134201-7rdx9-lya7u19m4038eb@resize_w640_nl.webp", link: "https://s.shopee.co.id/60GrBGhL2H" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasd-m0k0ybsufgvrf3@resize_w640_nl.webp", link: "https://s.shopee.co.id/1LV1gPtzab" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98x-lvu3hal98gi2c0@resize_w640_nl.webp", link: "https://s.shopee.co.id/9UqjOplPW1" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbke-m8w6gfcgehleef.webp", link: "https://s.shopee.co.id/9ADt0DmgBn" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasf-m3u8wx7o7js319.webp", link: "https://s.shopee.co.id/3VZW9KeR2L" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasc-m2na57tz58lfbc.webp", link: "https://s.shopee.co.id/8fHcPIoaCe" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0u-mcg2ywuevmmd79@resize_w640_nl.webp", link: "https://s.shopee.co.id/3LG63V8t28" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasf-m5uatrsbv7h9e7.webp", link: "https://s.shopee.co.id/5VKaaVAogq" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasc-m31cqdqbfmj9c5.webp", link: "https://s.shopee.co.id/8ALLlRiCJi" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rash-m0mt5gqkiznwa4@resize_w640_nl.webp", link: "https://s.shopee.co.id/4VS3Oa7qNi" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasm-m0eoleeczn2605.webp", link: "https://s.shopee.co.id/4q4tnHDM2P" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasm-m5vhmm7rxaiqad.webp", link: "https://s.shopee.co.id/7ASoczB9z3" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasl-m2qn6g3j9byce0.webp", link: "https://s.shopee.co.id/8fHcMJylGn" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk8-m6xd1h7o4f5960.webp", link: "https://s.shopee.co.id/6ppyENCQf1" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasm-m4423ipadswa42.webp", link: "https://s.shopee.co.id/BJ4I7boBL" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbka-ma9fe8baat7k05.webp", link: "https://s.shopee.co.id/7V5exT3NTL" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lt11p9hii8na8f.webp", link: "https://s.shopee.co.id/2g0P9y8Mjk" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98q-lqy7sm2q9u4t97@resize_w640_nl.webp", link: "https://s.shopee.co.id/8Kem186ice" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7qukz-li4vpouoi6xl73.webp", link: "https://s.shopee.co.id/9pTZjkuUjx" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lzpxuraedhyg1c.webp", link: "https://s.shopee.co.id/3LG60Z0b8E" },
    { image: "https://down-id.img.susercontent.com/file/sg-11134201-7rd3q-m6w5jq0yk0i183.webp", link: "https://s.shopee.co.id/9zmztRgRrU" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasd-m3uqrzgcmumo89.webp", link: "https://s.shopee.co.id/3Awfrj1xus" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasd-m4kjwh5va7w891.webp", link: "https://s.shopee.co.id/2LNYnyN2xo" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r990-m08khqjgkx92f7.webp", link: "https://s.shopee.co.id/6ppyAx5jyy" },
    { image: "https://down-id.img.susercontent.com/file/sg-11134201-7rfgx-m3uc37idfm1se1.webp", link: "https://s.shopee.co.id/5AhkBtC5MV" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk9-maxzcc6xgddgcc@resize_w640_nl.webp", link: "https://s.shopee.co.id/2qJpMH7jOn" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98t-lmguogmyq1e65b.webp", link: "https://s.shopee.co.id/2Vgz0HMPcr" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lxi5rrmu29al5b.webp", link: "https://s.shopee.co.id/8zuShbkFtS" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rase-m5e6plfck2qw61@resize_w640_nl.webp", link: "https://s.shopee.co.id/10sBEH9Ts0" },
    { image: "https://down-id.img.susercontent.com/file/id-11134211-7ra0s-mckd3mqjeg1k05@resize_w640_nl.webp", link: "https://s.shopee.co.id/20kiMkAu5g" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk7-m8a5jcfi3nxp24@resize_w640_nl.webp", link: "https://s.shopee.co.id/BJ4EhV7VJ" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma2hv9he5mal00@resize_w640_nl.webp", link: "https://s.shopee.co.id/AKPqI3fBCd" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk2-m8a5xngink9q79@resize_w640_nl.webp", link: "https://s.shopee.co.id/VvudGqr53" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasb-m4zu83fyuo0693@resize_w640_nl.webp", link: "https://s.shopee.co.id/zdz4IW9U" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasg-m3a5t6y4fm5qfb@resize_w640_nl.webp", link: "https://s.shopee.co.id/9zmzwltgYv" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbka-m9fkqkg68su3e1.webp", link: "https://s.shopee.co.id/ze2JOyVh" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk2-ma2hv9he9tzxa4@resize_w640_nl.webp", link: "https://s.shopee.co.id/6VD7mIU0uf" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lyqcrwh3ixnfa9@resize_w640_nl.webp", link: "https://s.shopee.co.id/2g0P9nhbj6" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk3-mam88pogibnc5b@resize_w640_nl.webp", link: "https://s.shopee.co.id/8fHcPk5Rwg" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk7-m9fkqkg6a7ejb6@resize_w640_nl.webp", link: "https://s.shopee.co.id/AA6Q5kfoWX" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk2-m8h1d1g6klyw84@resize_w640_nl.webp", link: "https://s.shopee.co.id/2g0PDDEp6T" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasd-m3am7oj8vo65f4@resize_w640_nl.webp", link: "https://s.shopee.co.id/7V5f1b9tJ5" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasm-m26fkj7tpf2i72.webp", link: "https://s.shopee.co.id/AA6Q94t3Dw" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98s-lsmmizqimyav6e.webp", link: "https://s.shopee.co.id/1LV1caSfoh" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0i-mc78qm1bsxtfd5@resize_w640_nl.webp", link: "https://s.shopee.co.id/2Vgyxf904p" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk2-m7uowaf4fv4g1a.webp", link: "https://s.shopee.co.id/1VoRp4JGSq" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk5-ma3yuwydvod904.webp", link: "https://s.shopee.co.id/8pb2bbnwsi" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk8-m75w2iujh5r5a8@resize_w640_nl.webp", link: "https://s.shopee.co.id/7KmEoqtevJ" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0k-mc1j92ls7tchc7@resize_w640_nl.webp", link: "https://s.shopee.co.id/AUjGafhbUB" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lz1x4ij6p6pxf6.webp", link: "https://s.shopee.co.id/8zuSoVQo1n" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ras9-m0k4sxlulxyvee@resize_w640_nl.webp", link: "https://s.shopee.co.id/gFKtBwWwP" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0q-mbjgfpe9e6j402.webp", link: "https://s.shopee.co.id/30dFetA9iA" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mckrvafgffvzbf.webp", link: "https://s.shopee.co.id/9ADt0DmgCo" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasm-m3n57prrvhzu92.webp", link: "https://s.shopee.co.id/50OK30JPNI" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk1-m66hhqywlfh42e@resize_w640_nl.webp", link: "https://s.shopee.co.id/20kiPoQ8St" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98q-lmmxo6rd31free@resize_w640_nl.webp", link: "https://s.shopee.co.id/9KXJ8pwOks" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lqfywezk2zvie9.webp", link: "https://s.shopee.co.id/2g0P9y8Mkn" },
    { image: "https://down-id.img.susercontent.com/file/sg-11134201-7rdyh-lxudwufjc1b3b4@resize_w640_nl.webp", link: "https://s.shopee.co.id/qYl5UvtbQ" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasc-m3y5zc1d7zz687.webp", link: "https://s.shopee.co.id/3AwfoDJhQB" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-23030-u939olwq76nvc5@resize_w640_nl.webp", link: "https://s.shopee.co.id/6VD7pJwpc2" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbkd-m7k3cdi526qda6@resize_w640_nl.webp", link: "https://s.shopee.co.id/8KelxkhYyj" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbkc-m8py0hpvafpea1@resize_w640_nl.webp", link: "https://s.shopee.co.id/1LV1ZWDRRc" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0j-mbg9wku4mjxg6a.webp", link: "https://s.shopee.co.id/3qCMeQ6z1H" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98q-lve5vrj0bt1f53.webp", link: "https://s.shopee.co.id/7KmElA40oI" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lkwpudj49ul49b@resize_w640_nl.webp", link: "https://s.shopee.co.id/60GrBL28LJ" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7qul5-lk0jxutvcdgb57.webp", link: "https://s.shopee.co.id/1VoRs8Frkj" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lp6u3mjm88su1a@resize_w640_nl.webp", link: "https://s.shopee.co.id/7piVPlrktP" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasl-m3mz8n6fzkkufd@resize_w640_nl.webp", link: "https://s.shopee.co.id/qYl1vSa9V" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasj-m2kty5aj5ec538.webp", link: "https://s.shopee.co.id/7ASoZTxgyU" },
    { image: "https://down-id.img.susercontent.com/file/sg-11134201-7rfhr-m9u12lqnicye45.webp", link: "https://s.shopee.co.id/2Vgz3yC3it" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbke-m9fkqkg5yyuzf3@resize_w640_nl.webp", link: "https://s.shopee.co.id/gFKpXMR9l" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbke-mamh19s9zy4y9e@resize_w640_nl.webp", link: "https://s.shopee.co.id/5fe0pn00Hu" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasa-m4odf2tfe7py71.webp", link: "https://s.shopee.co.id/60GrAi95Vu" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasd-m0lqyfi3mp32d6.webp", link: "https://s.shopee.co.id/4flTeOKg3G" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98u-lyn3jxyjsqzx5f.webp", link: "https://s.shopee.co.id/6ppyDvvYwG" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ras9-m0ihdv3ocd2v3d@resize_w640_nl.webp", link: "https://s.shopee.co.id/3LG60RCHkX" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbkc-makyn2q2pn1540.webp", link: "https://s.shopee.co.id/2qJpT1Rem7" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk7-m9nu5r69sw0t5e@resize_w640_nl.webp", link: "https://s.shopee.co.id/VvuZzGc8d" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk7-m9nu5r69yial0f@resize_w640_nl.webp", link: "https://s.shopee.co.id/AUjGUMeXqd" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk2-m6dup9uvdbmyda@resize_w640_nl.webp", link: "https://s.shopee.co.id/3LG5x1f4NI" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0t-mc1tgur6l7ax9a@resize_w640_nl.webp", link: "https://s.shopee.co.id/6Kthd0xSx1" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk4-m8a62vwiqdema8@resize_w640_nl.webp", link: "https://s.shopee.co.id/ze2RDHtu" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r98q-lpfp084xqyq557@resize_w640_nl.webp", link: "https://s.shopee.co.id/7fP5DSsOEM" },
    { image: "https://down-id.img.susercontent.com/file/sg-11134201-7rdwu-m01g76qud5fe1f.webp", link: "https://s.shopee.co.id/9ADswWx25l" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rase-m2hynhqjvq2o08.webp", link: "https://s.shopee.co.id/6fWY1cwCHF" },
    { image: "https://down-id.img.susercontent.com/file/sg-11134201-23010-ynewpog5zpmv67@resize_w640_nl.webp", link: "https://s.shopee.co.id/1VoRsZWjTT" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7r991-lz1x4ijglzhkb9.webp", link: "https://s.shopee.co.id/LcUUZxncJ" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasc-m0g2kk36fja437@resize_w640_nl.webp", link: "https://s.shopee.co.id/7V5eugPCvF" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasm-m0fjorpoqzpj1b.webp", link: "https://s.shopee.co.id/709OQEuvaI" },
    { image: "https://down-id.img.susercontent.com/file/id-11134207-7rasl-m2g32ex2frur27.webp", link: "https://s.shopee.co.id/9fA9b8kmB4" },
    { image: "https://down-zl-id.img.susercontent.com/id-11134207-7rbk1-m66hhqywlfh42e.webp", link: "https://s.shopee.co.id/7V5dCgvAUJ" }
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
