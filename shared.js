// ─── Shared: language persistence (one choice for every page) ──────────────
const LANG_KEY = 'llm-sim-lang';

function initialLanguage(dict) {
    try {
        const saved = localStorage.getItem(LANG_KEY);
        if (saved && dict[saved]) return saved;
    } catch (e) {}
    return (navigator.language || '').toLowerCase().startsWith('pl') ? 'pl' : 'en';
}

function saveLanguage(l) {
    try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
}

// ─── Shared: auto-hiding header (slides away on scroll down, back on scroll up) ─
function autoHideHeader(header, threshold = 6) {
    let lastY = window.scrollY;
    let ticking = false;
    const setHidden = hidden => {
        header.classList.toggle('is-hidden', hidden);
        header.dataset.hidden = hidden;
    };
    const update = () => {
        ticking = false;
        const y = window.scrollY;
        const delta = y - lastY;
        if (Math.abs(delta) < threshold) return;        // ignore jitter
        setHidden(delta > 0 && y > header.offsetHeight);  // down past the bar → hide; any scroll up → show
        lastY = y;
    };
    header.classList.add('autohide');
    setHidden(false);
    window.addEventListener('scroll', () => {
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    header.addEventListener('focusin', () => setHidden(false));   // keyboard users always reach the menu
}
