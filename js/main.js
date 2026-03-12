/* =============================================
   DANAZONE™ — Main JavaScript
   ============================================= */

// ── Countdown Timer ──────────────────────────
function initCountdown() {
  const end = new Date();
  end.setHours(end.getHours() + 11);
  end.setMinutes(end.getMinutes() + 47);
  end.setSeconds(end.getSeconds() + 33);

  function update() {
    const now = new Date();
    const diff = end - now;
    if (diff <= 0) return;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');
    document.querySelectorAll('[data-countdown]').forEach(el => {
      const type = el.dataset.countdown;
      el.textContent = pad(type === 'h' ? h : type === 'm' ? m : s);
    });
  }
  update();
  setInterval(update, 1000);
}

// ── Cart ─────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('dz_cart') || '[]');

function saveCart() {
  localStorage.setItem('dz_cart', JSON.stringify(cart));
}

function updateCartCount() {
  const count = cart.reduce((a, b) => a + b.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function addToCart(id, name, price, img) {
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, name, price, img, qty: 1 });
  }
  saveCart();
  updateCartCount();
  showToast(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`, `<strong>${name}</strong> added to cart`);
}

// ── Wishlist ──────────────────────────────────
let wishlist = JSON.parse(localStorage.getItem('dz_wish') || '[]');

function toggleWishlist(id, name, btn) {
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    btn && btn.classList.add('wished');
    showToast(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`, `<strong>${name}</strong> added to wishlist`);
  } else {
    wishlist.splice(idx, 1);
    btn && btn.classList.remove('wished');
  }
  localStorage.setItem('dz_wish', JSON.stringify(wishlist));
}

// ── Toast ─────────────────────────────────────
function showToast(iconHtml, message) {
  let wrap = document.querySelector('.toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.className = 'toast-wrap';
    document.body.appendChild(wrap);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = iconHtml + `<span>${message}</span>`;
  wrap.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateY(8px)'; toast.style.transition = 'all .3s'; setTimeout(() => toast.remove(), 300); }, 2800);
}

// ── Tabs ──────────────────────────────────────
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabs => {
    tabs.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        tabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.tab;
        const section = tabs.closest('section') || tabs.parentElement;
        section.querySelectorAll('.tab-panel').forEach(p => p.style.display = 'none');
        const panel = section.querySelector(`[data-panel="${target}"]`);
        if (panel) panel.style.display = '';
      });
    });
  });
}

// ── Sticky Header Shadow ──────────────────────
function initScroll() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ── Search Suggestions ────────────────────────
function initSearch() {
  const input = document.querySelector('.search-input');
  if (!input) return;
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = input.value.trim();
      if (q) {
        showToast(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`, `Searching for "<strong>${q}</strong>"…`);
      }
    }
  });
}

// ── Newsletter ────────────────────────────────
function initNewsletter() {
  const form = document.querySelector('.nl-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('.nl-input').value.trim();
    if (!email) return;
    showToast(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`, `You're subscribed! Check your inbox.`);
    form.querySelector('.nl-input').value = '';
  });
}

// ── Animate on Scroll ─────────────────────────
function initAOS() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.aos').forEach(el => obs.observe(el));
}

// ── Mobile Nav ────────────────────────────────
function initMobileNav() {
  document.querySelectorAll('.mnav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mnav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// ── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  updateCartCount();
  initTabs();
  initScroll();
  initSearch();
  initNewsletter();
  initAOS();
  initMobileNav();

  // Add to cart buttons
  document.querySelectorAll('[data-add-cart]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const card = btn.closest('[data-product-id]');
      if (card) {
        addToCart(
          card.dataset.productId,
          card.dataset.productName,
          card.dataset.productPrice,
          card.dataset.productImg || ''
        );
      }
    });
  });

  // Wishlist buttons
  document.querySelectorAll('[data-wish]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const card = btn.closest('[data-product-id]');
      if (card) toggleWishlist(card.dataset.productId, card.dataset.productName, btn);
    });
  });
});

// ── AOS CSS ───────────────────────────────────
const aosStyle = document.createElement('style');
aosStyle.textContent = `.aos{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}.aos.visible{opacity:1;transform:none}.aos-d1{transition-delay:.1s}.aos-d2{transition-delay:.2s}.aos-d3{transition-delay:.3s}.aos-d4{transition-delay:.4s}.header.scrolled{box-shadow:0 4px 30px rgba(0,0,0,.4)}.wished svg{fill:var(--gold)!important;color:var(--gold)!important}`;
document.head.appendChild(aosStyle);
