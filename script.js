// PRELOADER LOGIC
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const bar = document.getElementById('loader-bar');
    const perc = document.getElementById('loader-perc');
    let w = 0;
    const int = setInterval(() => {
        w += Math.floor(Math.random() * 15);
        if (w >= 100) { w = 100; clearInterval(int); setTimeout(() => loader.classList.add('loader-hidden'), 500); }
        bar.style.width = w + '%'; perc.textContent = w + '%';
    }, 80);
});

// THEME SWITCHER
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light');
    const sun = document.getElementById('sun-icon');
    const moon = document.getElementById('moon-icon');
    if(document.body.classList.contains('light')) {
        sun.style.transform = 'translateY(-2rem)'; moon.style.transform = 'translateY(0)';
    } else {
        sun.style.transform = 'translateY(0)'; moon.style.transform = 'translateY(2rem)';
    }
});

// MAGNETIC SOCIAL ICONS
document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width/2)*0.3}px, ${(e.clientY - r.top - r.height/2)*0.3}px)`;
    });
    el.addEventListener('mouseleave', () => el.style.transform = 'translate(0,0)');
});

// TECH STACK MOUSE GLOW
document.querySelectorAll('.glass-card').forEach(card => {
    const glow = card.querySelector('.glow-point');
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        glow.style.left = `${e.clientX - r.left}px`; glow.style.top = `${e.clientY - r.top}px`;
    });
});

// 3D IMAGE TILT
const tCont = document.querySelector('.tilt-container');
const tCard = document.querySelector('.tilt-card');
if(tCont) {
    tCont.addEventListener('mousemove', e => {
        const r = tCont.getBoundingClientRect();
        const x = (e.clientY - r.top - r.height/2) / -10;
        const y = (e.clientX - r.left - r.width/2) / 10;
        tCard.style.transform = `rotateX(${x}deg) rotateY(${y}deg) scale(1.05)`;
    });
    tCont.addEventListener('mouseleave', () => tCard.style.transform = 'rotateX(0) rotateY(0) scale(1)');
}

// SCROLL ANIMATIONS
const obs = new IntersectionObserver(ents => {
    ents.forEach(en => { if(en.isIntersecting) en.target.classList.replace('opacity-0', 'opacity-100'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal-card').forEach(c => { c.classList.add('opacity-0', 'transition-all', 'duration-1000'); obs.observe(c); });