import './stimulus_bootstrap.js';
import './styles/app.css';

console.log('AssetMapper loaded');

// ===== Slider (sans classe, simple) =====
function initSlider() {
  const container = document.getElementById('slidesContainer');
  const next = document.getElementById('nextBtn');
  const prev = document.getElementById('prevBtn');

  if (!container || !next || !prev) return;

  const slides = Array.from(container.children);
  if (slides.length === 0) return;

  let index = 0;

  const render = () => {
    container.style.transform = `translateX(-${index * 100}%)`;
  };

  next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    render();
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    render();
  });
}

// ===== Hover services (optionnel si tu relies tout au CSS) =====
function initServiceHover() {
  document.querySelectorAll('.service').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-6px)';
      card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
  });
}

// ===== Modal APK =====
function initApkModal() {
  const modal = document.getElementById('apkModal');
  const closeBtn = document.getElementById('apkClose');
  const directLink = document.getElementById('apkDirectLink');
  const title = document.getElementById('apkModalTitle');

  if (!modal || !directLink || !title) return;

  const open = (apk, appTitle) => {
    title.textContent = appTitle || 'Télécharger l’application';
    directLink.href = apk;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  };

  const close = () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  };

  document.querySelectorAll('.apk-download-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const apk = btn.dataset.apk;
      const appTitle = btn.dataset.title;
      if (!apk) return;
      open(apk, appTitle);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initServiceHover();
  initApkModal();
});

function initCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  const btn = document.getElementById('cookieAcceptBtn');
  if (!banner || !btn) return;

  const key = 'acceptCookie';
  const accepted = document.cookie.split('; ').some(c => c.startsWith(`${key}=`));

  if (!accepted) {
    banner.hidden = false;
  }

  btn.addEventListener('click', () => {
    // cookie 180 jours
    document.cookie = `${key}=1; Max-Age=${60 * 60 * 24 * 180}; Path=/; SameSite=Lax`;
    banner.hidden = true;
  });
}

// function initMobileNav() {
//   const btn = document.getElementById('navToggle');
//   const nav = document.getElementById('mainNav');
//   if (!btn || !nav) return;

//   btn.addEventListener('click', () => {
//     const open = nav.classList.toggle('is-open');
//     btn.setAttribute('aria-expanded', open ? 'true' : 'false');
//   });

//   // si on clique un lien => on ferme (mobile)
//   nav.querySelectorAll('a').forEach(a => {
//     a.addEventListener('click', () => {
//       nav.classList.remove('is-open');
//       btn.setAttribute('aria-expanded', 'false');
//     });
//   });
// }

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initServiceHover();
  initApkModal();
  initCookieBanner();
});


