const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle menu saat hamburger diklik
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tutup menu jika link diklik
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Efek Shadow saat scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }
});

// Jam Digital Sederhana untuk Top Bar
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const clockElement = document.getElementById('clock');
    
    if(clockElement) {
        clockElement.innerText = `${hours}:${minutes}:${seconds}`;
    }
}
setInterval(updateTime, 1000);
updateTime();