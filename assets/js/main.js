
// Year
document.getElementById('year').textContent = new Date().getFullYear();

// loader

window.addEventListener('load', () => { const el = document.getElementById('pageLoader'); if (!el) return; el.style.opacity = '0'; el.style.transition = 'opacity .900s ease'; setTimeout(() => el.remove(), 500); });


// Back to top
document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Typed roles (basic)
const roles = ['Web Developer', 'Software Developer', 'Frontend Developer', 'Java + MySQL', 'JavaScript Enthusiast'];
let idx = 0;
const typed = document.getElementById('typedRoles');
setInterval(() => {
    idx = (idx + 1) % roles.length;
    typed.textContent = roles[idx];
}, 800);

// Minimal Vanilla Tilt (inline) – based on vanilla-tilt usage guidelines
function initTilt() {
    document.querySelectorAll('[data-tilt]').forEach(el => {
        let cx = 0, cy = 0;
        const rect = () => el.getBoundingClientRect();
        el.addEventListener('mousemove', (ev) => {
            const r = rect();
            const x = ev.clientX - r.left, y = ev.clientY - r.top;
            const rx = (y - r.height / 2) / (r.height / 2) * -8;
            const ry = (x - r.width / 2) / (r.width / 2) * 8;
            el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        });
        el.addEventListener('mouseleave', () => { el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)'; });
    });
}
initTilt();

// project section 


const modalEl = document.getElementById('projectModal');
const titleEl = document.getElementById('projectModalLabel');
const descEl = document.getElementById('projectDesc');
const imgsEl = document.getElementById('projectImages');

document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-bs-target="#projectModal"]');
    if (!btn) return;

    const title = btn.getAttribute('data-title') || 'Project';
    const desc = btn.getAttribute('data-desc') || '';
    let images = [];
    try {
        images = JSON.parse(btn.getAttribute('data-images') || '[]');
    } catch {
        images = [];
    }

    titleEl.textContent = title;
    descEl.textContent = desc;
    imgsEl.innerHTML = images.map(src => `
    <img src="${src}" alt="${title} screenshot">
        `).join('') || '<div class="text-secondary small">No images provided.</div>';
});


