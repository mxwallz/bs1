// ── SECTION NAV VISIBILITY ──────────────────────────────────────
const hero = document.getElementById('hero');
const sNav = document.getElementById('section-nav');
new IntersectionObserver(([e]) => sNav.classList.toggle('visible', !e.isIntersecting), {threshold:0}).observe(hero);

const navLinks = document.querySelectorAll('#section-nav a[data-section]');
['how-it-works','results','about','faq'].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const a = document.querySelector(`#section-nav a[data-section="${id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, {rootMargin:'-40% 0px -55% 0px'}).observe(el);
});

// ── PROOF EXPAND ────────────────────────────────────────────────
document.querySelectorAll('.proof-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const el = document.getElementById(btn.dataset.target);
    btn.classList.toggle('expanded', el.classList.toggle('open'));
  });
});

// ── FAQ ──────────────────────────────────────────────────────────
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item'), body = item.querySelector('.faq-body'), wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => { i.classList.remove('open'); i.querySelector('.faq-body').classList.remove('open'); });
    if (!wasOpen) { item.classList.add('open'); body.classList.add('open'); }
  });
});

// ── VSL CLICK-TO-PLAY ────────────────────────────────────────────
document.getElementById('play-btn')?.addEventListener('click', () => {
  const overlay = document.getElementById('vsl-overlay');
  const video   = document.getElementById('vsl-video');
  if (video && video.querySelector('source')?.src && video.querySelector('source').src !== window.location.href) {
    overlay.style.display = 'none';
    video.style.display = 'block';
    video.play();
  }
});

// ── FADE IN ───────────────────────────────────────────────────────
const fadeObs = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) e.target.classList.add('vis');
}), {threshold: 0.06});
document.querySelectorAll('.fi').forEach(el => fadeObs.observe(el));

// ── SCROLL: ROUTE LINE + MAP WIDGET ─────────────────────────────
const routeFill    = document.getElementById('route-fill');
const routeCompass = document.getElementById('route-compass');
const mapWidget    = document.getElementById('map-widget');
const mwNeedle     = document.getElementById('mw-needle');
const mwHdg        = document.getElementById('mw-hdg');
const mwTrackFill  = document.getElementById('mw-track-fill');

window.addEventListener('scroll', () => {
  const sy = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const pct = maxScroll > 0 ? Math.min(sy / maxScroll, 1) : 0;

  if (routeFill)    routeFill.style.height = (pct * 100) + '%';
  if (routeCompass) routeCompass.style.top  = (pct * 100) + '%';

  [0, 0.25, 0.5, 0.75, 1].forEach((threshold, i) => {
    const wp = document.getElementById('rwp' + i);
    if (wp) wp.classList.toggle('passed', pct >= threshold);
  });

  if (mapWidget) mapWidget.classList.toggle('vis', sy > 200);
  if (mwTrackFill) mwTrackFill.style.height = (pct * 100) + '%';

  const deg = Math.round(pct * 360);
  if (mwNeedle) mwNeedle.setAttribute('transform', `rotate(${deg}, 16, 16)`);
  if (mwHdg)    mwHdg.textContent = String(deg).padStart(3,'0') + '°';

}, {passive: true});

// ── MAP WIDGET: track active section ────────────────────────────
const mwSections = ['hero','how-it-works','timeline-section','results','apply'];
const mwLinks = document.querySelectorAll('.map-wp[data-mwsec]');
mwSections.forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        mwLinks.forEach(a => a.classList.remove('active'));
        const a = document.querySelector(`.map-wp[data-mwsec="${id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, {rootMargin:'-30% 0px -65% 0px'}).observe(el);
});

// ── STRUCTURE BADGE: dynamic section name ───────────────────────
const badge = document.getElementById('s-badge');
const badgeSections = document.querySelectorAll('[data-badge]');
const badgeObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && badge) {
      const t = document.getElementById('s-badge-text');
      const label = e.target.dataset.badge.replace(/^ATLAS · /,'');
      if (t) t.textContent = label;
    }
  });
}, {rootMargin:'-20% 0px -75% 0px'});
badgeSections.forEach(s => badgeObs.observe(s));

// ── COMPASS ORIENT → continuous spin after settle ────────────────
(function() {
  const heroSvg = document.getElementById('compass-hero-svg');
  if (!heroSvg) return;
  setTimeout(() => {
    heroSvg.style.animation = 'compassSpin 90s linear infinite';
  }, 2400);
})();

// ── COUNT-UP ──────────────────────────────────────────────────────
function runCountUp(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const dur = 1000; const t0 = performance.now();
  (function tick(now) {
    const p = Math.min((now - t0) / dur, 1);
    const v = Math.round((1 - Math.pow(1 - p, 3)) * target);
    el.textContent = prefix + (v >= 1000 ? v.toLocaleString() : v) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}
const cntObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { runCountUp(e.target); cntObs.unobserve(e.target); } });
}, {threshold: 0.6});
document.querySelectorAll('[data-countup]').forEach(el => cntObs.observe(el));

// ── TIMELINE DRAW ────────────────────────────────────────────────
const tlWrapper = document.getElementById('tl-wrapper');
if (tlWrapper) {
  let drawn = false;
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !drawn) {
      drawn = true;
      const line  = document.getElementById('tl-line');
      // target the named nodes in the nodes-row
      const nodes = [
        document.getElementById('tl-n0'),
        document.getElementById('tl-n1'),
        document.getElementById('tl-n2'),
      ].filter(Boolean);
      requestAnimationFrame(() => {
        if (line) line.classList.add('drawn');
        nodes.forEach((n, i) => setTimeout(() => n.classList.add('lit'), 300 + i * 580));
      });
    }
  }, {threshold: 0.2}).observe(tlWrapper);
}

// ── PROOF MODAL ───────────────────────────────────────────────────
const modalOverlay = document.getElementById('proof-modal-overlay');

function openModal(id) {
  // hide all panels first
  document.querySelectorAll('.proof-modal-content').forEach(el => el.style.display = 'none');
  const panel = document.getElementById('modal-' + id);
  if (panel) panel.style.display = 'block';
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.proof-trigger').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.modal));
});

// close on overlay click or any close button
modalOverlay?.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
document.querySelectorAll('.pm-close').forEach(btn => btn.addEventListener('click', closeModal));

// close on Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── ATLAS NETWORK MAP ─────────────────────────────────────────────
const atlasCard = document.getElementById('atlas-network-card');
if (atlasCard) {
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting) {
      const map = document.getElementById('atlas-map');
      if (map) map.style.opacity = '1';
      document.querySelectorAll('.city-node').forEach((node, i) => {
        setTimeout(() => {
          const dot  = node.querySelector('.city-dot');
          const ring = node.querySelector('.city-ring-anim');
          if (dot)  { dot.style.opacity = '1'; dot.style.transition = 'opacity .3s ease'; }
          if (ring) ring.classList.add('pulsing');
        }, 250 + i * 280);
      });
    }
  }, {threshold: 0.35}).observe(atlasCard);
}

// ── RESULTS CAROUSEL (mobile arrows) ────────────────────────────
(function() {
  const grid = document.querySelector('.results-card-grid');
  if (!grid) return;
  const cardWidth = () => grid.querySelector('div')?.offsetWidth + 12 || window.innerWidth * 0.82 + 12;
  document.querySelector('.carousel-prev')?.addEventListener('click', () => grid.scrollBy({ left: -cardWidth(), behavior: 'smooth' }));
  document.querySelector('.carousel-next')?.addEventListener('click', () => grid.scrollBy({ left:  cardWidth(), behavior: 'smooth' }));
})();

// ── RESULTS SWIPE CAROUSEL ───────────────────────────────────────
(function() {
  const track = document.getElementById('rs-track');
  const dotsEl = document.getElementById('rs-dots');
  if (!track) return;
  const slides = track.querySelectorAll('.rs-slide');
  let cur = 0;

  // build dots
  slides.forEach((_,i) => {
    const d = document.createElement('span');
    d.className = 'rs-dot' + (i===0?' active':'');
    d.addEventListener('click', () => goTo(i));
    dotsEl?.appendChild(d);
  });

  function goTo(i) {
    cur = Math.max(0, Math.min(i, slides.length-1));
    if (window.innerWidth <= 640) {
      const w = slides[0].offsetWidth + 12;
      track.scrollTo({ left: cur * w, behavior:'smooth' });
    }
    dotsEl?.querySelectorAll('.rs-dot').forEach((d,j) => d.classList.toggle('active', j===cur));
  }

  document.querySelector('.rs-prev')?.addEventListener('click', () => goTo(cur-1));
  document.querySelector('.rs-next')?.addEventListener('click', () => goTo(cur+1));

  track.addEventListener('scroll', () => {
    if (!slides[0]) return;
    const w = slides[0].offsetWidth + 12;
    cur = Math.round(track.scrollLeft / w);
    dotsEl?.querySelectorAll('.rs-dot').forEach((d,j) => d.classList.toggle('active', j===cur));
  }, {passive:true});
})();
