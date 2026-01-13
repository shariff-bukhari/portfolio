// Scroll Reveal Animation logic
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// Simple Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 10%';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    } else {
        nav.style.padding = '1.5rem 10%';
        nav.style.boxShadow = 'none';
    }
});