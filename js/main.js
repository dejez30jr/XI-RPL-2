document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);


let currentIndex = 0;
let autoSlideInterval;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    document.querySelector('.slides').style.transform = `translateX(${-currentIndex * 100}%)`;
}


function moveSlide(n) {
    showSlides(currentIndex + n);
    resetAutoSlide();
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlides(currentIndex + 1);
    }, 5000); // Change image every 5 seconds
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}

window.onload = function() {
    showSlides(currentIndex);
    autoSlide();
};

// data bocah rpl
document.querySelectorAll('.navi').forEach(navItem => {
    navItem.addEventListener('click', function(event) {
        event.preventDefault(); // Menghentikan tindakan default dari klik

        // Dapatkan href yang di klik
        const targetId = this.getAttribute('href');

        // Loop melalui semua card-item
        document.querySelectorAll('.card-item').forEach(card => {
            // Jika id card-item sesuai dengan href yang diklik
            if (card.id === targetId.substring(1)) {
                card.classList.remove('hidden'); // Tampilkan card-item
            } else {
                card.classList.add('hidden'); // Sembunyikan card-item lainnya
            }
        });
    });
});

function showAlert() {
    alert("Selamat datang di website saya!");
}

// tag nama kelas
const satu = document.getElementBy
const dua = document.getElementById('2');
const tiga = document.getElementById('3');
const empat = document.getElementById('4');
const lima = document.getElementById('5');
const enam = document.getElementById('6');
const tujuh = document.getElementById('7');
const delapan = document.getElementById('8');
const sembilan = document.getElementById('9');
const sepuluh = document.getElementById('10');
const sebelas = document.getElementById('11');
const duabelas = document.getElementById('12');
const tigabelas = document.getElementById('13');
const empatbelas = document.getElementById('14');
const limabelas = document.getElementById('15');
const enambelas = document.getElementById('16');
const tujuhbelas = document.getElementById('17');
const delapanbelas = document.getElementById('18');
const sembilanbelas = document.getElementById('19');
const duapuluh = document.getElementById('20');
const duasatu = document.getElementById('21');
const duadua = document.getElementById('22');
const duatiga = document.getElementById('23');
const duaempat = document.getElementById('24');
const dualima = document.getElementById('25');
const duaenam = document.getElementById('26');
const duatujuh = document.getElementById('27');
const duadelapan = document.getElementById('28');
const duasembilan = document.getElementById('29');
const tigapuluh = document.getElementById('30');
satu.addEventListener('click', ()=>{
    alert('halo nama saya ahmad kata kata hari ini : kamu cantik')
})
dua.addEventListener('click', ()=>{
    alert('ga ada pesan')
})
tiga.addEventListener('click', ()=>{
    alert("aldiron: Trust The Progress")
})
empat.addEventListener('click', ()=>{
    alert('alvitra: terus membuat website')
})
lima.addEventListener('click', ()=>{
    alert('ga ada pesan')
})
enam.addEventListener('click', ()=>{
    alert('ga ada pesan')
})
tujuh.addEventListener('click', ()=>{
    alert('ga ada pesan')
})
delapan.addEventListener('click', ()=>{
    alert('ga ada pesan')
})
sembilan.addEventListener('click', ()=>{
    alert('ga ada pesan')
})
sepuluh.addEventListener('click', ()=>{
    alert('ga ada pesan')
})
sebelas.addEventListener('click', ()=>{
    alert('deris: setiap kekurangan ada kelebihan dan setiap kelebihan ada kekurangan, jangan anggap remeh seseorang @drriezz')
})
duabelas.addEventListener('click', ()=>{
    alert(' fahri: Kegagalan merupakan peluang agar bisa memulai kembali dengan cerdas" – Henry Ford')
})
tigabelas.addEventListener('click', ()=>{
    alert('ga ada pesan')
})
empatbelas.addEventListener('click', ()=>{
    alert('pitiw: lu mau sukses? Masa muda lu pengen enak? Buang hal yang gak perlu, capek ngab capek, pengen hidup enak pemikiran nye masih sempit, mau contoh? Mikir ndiri')
})
limabelas.addEventListener('click', ()=>{
    alert('ghathfaan: cukup antartika aja yang jauh, antarkita jangan @whos.ghatpan')
})
enambelas.addEventListener('click', ()=>{
    alert("hasan: Aku mati dan hidup dalam keadaan mencintaimu. Aku merasa hina di hadapanmu, dan bersamamu aku mulia أَمُوْتُ وأَحْيَا عَلَى حُبِّكُم. وذُلِّي لَدَيْكُمْ وعِزِّي بِكُمْ")
})
tujuhbelas.addEventListener('click', ()=>{
    alert('ga ada pesan')
})
delapanbelas.addEventListener('click', ()=>{
    alert('ujang: jangan lupa bersyukur')
})
sembilanbelas.addEventListener('click', ()=>{
    alert('ga ada pesan')
})
duapuluh.addEventListener('click', ()=>{
    alert('ga ada pesan')
})
duasatu.addEventListener('click', ()=>{
    alert('ga ada pesan')
})
duadua.addEventListener('click', ()=>{
    alert('ga ada pesan')
})
duatiga.addEventListener('click', ()=>{
    alert('ga ada pesan')
})
duaempat.addEventListener('click', ()=>{
    alert('ga ada pesan')
})
dualima.addEventListener('click', ()=>{
    alert('Rakhi: tidak ada proses yang mudah untuk tujuan yang indah')
})
duaenam.addEventListener('click', ()=>{
    alert('rayfans: Manusia hanyalah alat')
})
duatujuh.addEventListener('click', ()=>{
    alert('rhaysa: perjuangan kita harus terus berlanjut meskipun terhalang berbagai rintangan diri. Ayo bersama membangun kesadaran agar tumbuh lestari.')
})
duadelapan.addEventListener('click', ()=>{
    alert('riski dp: kejar lah cita cita bukan cinta')
})
duasembilan.addEventListener('click', ()=>{
    alert('rizki dy: teruslah berjuang')
})
tigapuluh.addEventListener('click', ()=>{
    alert('wili: jangan lupa sama maha esa')
})
