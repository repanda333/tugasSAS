function initThemeToggle() {
    const themeBtn = document.querySelector('#toggleTheme');
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        themeBtn.textContent = '☀️ Mode Terang';
    }
    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            themeBtn.textContent = '☀️ Mode Terang';
            localStorage.setItem('theme', 'dark');
        } else {
            themeBtn.textContent = '🌙 Mode Gelap';
            localStorage.setItem('theme', 'light');
        }
    });
}

function initSkillAnimations() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
        });
        skill.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function initInfoAnimations() {
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
}

function showWelcomeMessage() {
    const nama = document.querySelector('.value');
    const defaultText = 'Isi dengan nama kamu';
    if (nama && nama.textContent.includes(defaultText)) {
        setTimeout(() => {
            alert('Selamat datang! Jangan lupa isi biodata kamu ya 😉');
        }, 1000);
    }
}

function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
}

function initRealTimeClock() {
    const footer = document.querySelector('.copyright');
    function updateTime() {
        const now = new Date();
        const time = now.toLocaleTimeString('id-ID');
        const date = now.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        footer.innerHTML = `© 2025 Biodata Saya | ${date} ${time}`;
    }
    updateTime();
    setInterval(updateTime, 1000);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            document.querySelector('#toggleTheme').click();
        }
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

function detectDevice() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const deviceInfo = isMobile ? 'Mobile' : 'Desktop';
    console.log(`Device: ${deviceInfo}`);
    console.log(`Browser: ${navigator.userAgent}`);
    console.log(`screen: ${window.innerWidth}x${window.innerHeight}`);
}

window.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Website biodata berhasil dimuat!');
    initThemeToggle();
    initSkillAnimations();
    initInfoAnimations();
    showWelcomeMessage();
    initScrollAnimations();
    initRealTimeClock();
    initKeyboardShortcuts();
    detectDevice();
    console.log('✅ Semua fitur interaktif sudah aktif!');
});