/* ========================================
   DANAZONE - Shared Components
   ======================================== */

// ===== HEADER =====
function renderHeader(activePage = '') {
  const categories = [
    { name: 'Electronics', sub: ['Phones & Tablets', 'Laptops', 'Audio', 'Cameras', 'Gaming', 'Accessories'] },
    { name: 'Fashion', sub: ['Men\'s Clothing', 'Women\'s Clothing', 'Shoes', 'Bags', 'Watches', 'Jewellery'] },
    { name: 'Home & Living', sub: ['Furniture', 'Kitchen', 'Bedding', 'Decor', 'Garden', 'Lighting'] },
    { name: 'Beauty', sub: ['Skincare', 'Haircare', 'Makeup', 'Fragrances', 'Men\'s Grooming'] },
    { name: 'Sports', sub: ['Fitness', 'Outdoor', 'Team Sports', 'Cycling', 'Swim & Water'] },
    { name: 'Food & Grocery', sub: ['Fresh Produce', 'Beverages', 'Snacks', 'Organic', 'International'] },
    { name: 'Books', sub: ['Fiction', 'Non-Fiction', 'Academic', 'Children\'s', 'Business'] },
    { name: 'Toys & Kids', sub: ['Baby', 'Toddler', 'Educational', 'Outdoor Toys', 'Board Games'] },
  ];

  return `
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-links">
        <a href="seller.html">Sell on DanaZone</a>
        <a href="track-order.html">Track Your Order</a>
        <a href="contact.html">Help Centre</a>
        <a href="#">Nairobi, KE</a>
      </div>
      <div class="top-bar-promo">
        <span>⚡</span> FREE delivery on orders over KES 2,000
      </div>
      <div class="top-bar-links">
        <a href="#">Download App</a>
        <a href="#">EN | KES</a>
      </div>
    </div>
  </div>

  <header class="header">
    <div class="container">
      <div class="header-main">
        <a href="index.html" class="logo">Dana<span>Zone</span><sup>™</sup></a>
        <div class="search-bar">
          <select class="search-select">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home & Living</option>
            <option>Beauty</option>
            <option>Sports</option>
            <option>Food & Grocery</option>
            <option>Books</option>
            <option>Toys & Kids</option>
          </select>
          <input class="search-input" type="text" placeholder="Search products, brands and more..." id="searchInput">
          <button class="search-btn" onclick="doSearch()">🔍</button>
        </div>
        <div class="header-actions">
          <button class="header-action-btn" onclick="window.location='account.html'">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
            Account
          </button>
          <button class="header-action-btn" onclick="toggleWishlist()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            Wishlist
          </button>
          <button class="header-action-btn" onclick="openCart()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            Cart
            <span class="badge-count" id="cartCount">0</span>
          </button>
        </div>
      </div>
    </div>
    <nav class="main-nav">
      <div class="container">
        ${categories.map(c => `
        <div class="nav-item">
          <a href="products.html?cat=${c.name.toLowerCase().replace('&','').replace(' ','-')}" class="nav-link ${activePage === c.name ? 'active' : ''}">
            ${c.name}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </a>
          <div class="dropdown">
            ${c.sub.map(s => `<a href="products.html?sub=${s.toLowerCase().replace(/\s/g,'-')}">${s}</a>`).join('')}
          </div>
        </div>`).join('')}
        <div class="nav-item">
          <a href="deals.html" class="nav-link nav-deals">⚡ Flash Deals</a>
        </div>
      </div>
    </nav>
  </header>

  <div class="ticker-wrap">
    <div class="ticker" id="ticker">
      <span class="ticker-item"><span class="ticker-dot">★</span> Up to 60% OFF Electronics</span>
      <span class="ticker-item"><span class="ticker-dot">★</span> FREE delivery on orders over KES 2,000</span>
      <span class="ticker-item"><span class="ticker-dot">★</span> Flash Sale: Fashion starts at KES 500</span>
      <span class="ticker-item"><span class="ticker-dot">★</span> New arrivals in Beauty — shop now</span>
      <span class="ticker-item"><span class="ticker-dot">★</span> Pay later with M-Pesa Fanikiwa</span>
      <span class="ticker-item"><span class="ticker-dot">★</span> Same-day delivery in Nairobi</span>
      <span class="ticker-item"><span class="ticker-dot">★</span> Up to 60% OFF Electronics</span>
      <span class="ticker-item"><span class="ticker-dot">★</span> FREE delivery on orders over KES 2,000</span>
      <span class="ticker-item"><span class="ticker-dot">★</span> Flash Sale: Fashion starts at KES 500</span>
      <span class="ticker-item"><span class="ticker-dot">★</span> New arrivals in Beauty — shop now</span>
      <span class="ticker-item"><span class="ticker-dot">★</span> Pay later with M-Pesa Fanikiwa</span>
      <span class="ticker-item"><span class="ticker-dot">★</span> Same-day delivery in Nairobi</span>
    </div>
  </div>`;
}

// ===== FOOTER =====
function renderFooter() {
  return `
  <div class="trust-bar">
    <div class="container">
      <div class="trust-grid">
        <div class="trust-item">
          <span class="trust-icon">🚚</span>
          <div><div class="trust-title">Free Delivery</div><div class="trust-sub">On orders over KES 2,000</div></div>
        </div>
        <div class="trust-item">
          <span class="trust-icon">🔄</span>
          <div><div class="trust-title">Easy Returns</div><div class="trust-sub">30-day return policy</div></div>
        </div>
        <div class="trust-item">
          <span class="trust-icon">🔒</span>
          <div><div class="trust-title">Secure Payment</div><div class="trust-sub">M-Pesa, Visa, PayPal</div></div>
        </div>
        <div class="trust-item">
          <span class="trust-icon">🎧</span>
          <div><div class="trust-title">24/7 Support</div><div class="trust-sub">Always here to help</div></div>
        </div>
      </div>
    </div>
  </div>

  <div class="newsletter">
    <div class="container">
      <h2>Get Exclusive Deals First</h2>
      <p>Join 500,000+ smart shoppers. No spam, ever. Unsubscribe anytime.</p>
      <div class="newsletter-form">
        <input class="newsletter-input" type="email" placeholder="Enter your email address...">
        <button class="newsletter-btn" onclick="subscribeNewsletter(this)">Subscribe</button>
      </div>
    </div>
  </div>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo">Dana<span>Zone</span><sup>™</sup></a>
          <p>Your premier online marketplace in Kenya. Millions of products delivered fast and safely to your door. Shop everything you love.</p>
          <div class="footer-socials">
            <a class="social-btn" href="#" title="Facebook">f</a>
            <a class="social-btn" href="#" title="Instagram">📷</a>
            <a class="social-btn" href="#" title="Twitter">𝕏</a>
            <a class="social-btn" href="#" title="TikTok">♪</a>
            <a class="social-btn" href="#" title="YouTube">▶</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Customer Service</h4>
          <a href="contact.html">Help Centre</a>
          <a href="track-order.html">Track Your Order</a>
          <a href="returns.html">Returns & Refunds</a>
          <a href="shipping.html">Shipping Policy</a>
          <a href="contact.html">Report a Problem</a>
          <a href="#">FAQs</a>
        </div>
        <div class="footer-col">
          <h4>DanaZone</h4>
          <a href="about.html">About Us</a>
          <a href="seller.html">Sell on DanaZone</a>
          <a href="#">Advertise</a>
          <a href="#">DanaZone Blog</a>
          <a href="#">Careers</a>
          <a href="#">Press Room</a>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <a href="privacy.html">Privacy Policy</a>
          <a href="terms.html">Terms & Conditions</a>
          <a href="returns.html">Return Policy</a>
          <a href="shipping.html">Shipping Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} DanaZone™. All rights reserved. Registered in Kenya.</span>
        <div class="payment-icons">
          <span class="payment-icon">M-PESA</span>
          <span class="payment-icon">VISA</span>
          <span class="payment-icon">MASTERCARD</span>
          <span class="payment-icon">PAYPAL</span>
          <span class="payment-icon">AIRTEL</span>
        </div>
      </div>
    </div>
  </footer>`;
}

// ===== CART DRAWER =====
function renderCartDrawer() {
  return `
  <div class="cart-overlay" id="cartOverlay" onclick="closeCart()"></div>
  <div class="cart-drawer" id="cartDrawer">
    <div class="cart-drawer-header">
      <h3>🛒 Your Cart (<span id="drawerCartCount">0</span>)</h3>
      <span class="cart-close" onclick="closeCart()">✕</span>
    </div>
    <div class="cart-drawer-items" id="cartDrawerItems">
      <div style="text-align:center;padding:40px;color:var(--gray-400)">
        <div style="font-size:48px;margin-bottom:12px">🛒</div>
        <div style="font-weight:600;margin-bottom:6px">Your cart is empty</div>
        <div style="font-size:13px">Add items to get started</div>
      </div>
    </div>
    <div class="cart-drawer-footer" id="cartDrawerFooter" style="display:none">
      <div style="display:flex;justify-content:space-between;font-size:15px;font-weight:700;margin-bottom:14px">
        <span>Total</span>
        <span id="cartTotal" style="color:var(--teal)">KES 0</span>
      </div>
      <button class="checkout-btn" onclick="window.location='checkout.html'">Proceed to Checkout →</button>
      <button onclick="closeCart()" style="width:100%;margin-top:10px;padding:10px;border:none;background:transparent;color:var(--gray-600);font-size:13px;cursor:pointer">Continue Shopping</button>
    </div>
  </div>`;
}

// ===== NOTIFICATION =====
function renderNotification() {
  return `
  <div class="notification" id="notification">
    <span class="notification-icon" id="notifIcon">✅</span>
    <span id="notifMessage">Item added to cart!</span>
    <span class="notification-close" onclick="closeNotif()">✕</span>
  </div>`;
}

// ===== CART LOGIC =====
let cart = JSON.parse(localStorage.getItem('danazone-cart') || '[]');

function saveCart() {
  localStorage.setItem('danazone-cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  showNotif('✅', `"${product.name}" added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCartItems();
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + (i.qty || 1), 0);
  document.querySelectorAll('#cartCount, #drawerCartCount').forEach(el => el.textContent = count);
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cartDrawerItems');
  const footer = document.getElementById('cartDrawerFooter');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:40px;color:var(--gray-400)"><div style="font-size:48px;margin-bottom:12px">🛒</div><div style="font-weight:600;margin-bottom:6px">Your cart is empty</div><div style="font-size:13px">Add items to get started</div></div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  const total = cart.reduce((s, i) => s + (i.price * (i.qty || 1)), 0);
  container.innerHTML = cart.map(item => `
    <div class="cart-item-drawer">
      <div class="cart-item-img-sm" style="overflow:hidden;padding:0;background:var(--gray-100)">${item.img ? `<img src="${item.img}" style="width:100%;height:100%;object-fit:cover" alt="${item.name}">` : `<span style="font-size:30px;display:flex;align-items:center;justify-content:center;height:100%">${item.emoji||'📦'}</span>`}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price-sm">KES ${(item.price * (item.qty||1)).toLocaleString()}</div>
        <div style="font-size:12px;color:var(--gray-400)">Qty: ${item.qty||1} <span onclick="removeFromCart('${item.id}')" style="color:var(--red);cursor:pointer;margin-left:8px">Remove</span></div>
      </div>
    </div>`).join('');

  if (footer) {
    footer.style.display = 'block';
    document.getElementById('cartTotal').textContent = `KES ${total.toLocaleString()}`;
  }
}

function openCart() {
  document.getElementById('cartDrawer')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function toggleWishlist() {
  showNotif('❤️', 'Wishlist feature coming soon!');
}

// ===== NOTIFICATION =====
let notifTimer;
function showNotif(icon, msg) {
  const el = document.getElementById('notification');
  if (!el) return;
  document.getElementById('notifIcon').textContent = icon;
  document.getElementById('notifMessage').textContent = msg;
  el.classList.add('show');
  clearTimeout(notifTimer);
  notifTimer = setTimeout(() => el.classList.remove('show'), 3000);
}
function closeNotif() {
  document.getElementById('notification')?.classList.remove('show');
}

// ===== SEARCH =====
function doSearch() {
  const q = document.getElementById('searchInput')?.value;
  if (q) window.location = `products.html?q=${encodeURIComponent(q)}`;
}
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.activeElement?.id === 'searchInput') doSearch();
});

// ===== COUNTDOWN =====
function startCountdown(endMs, hhId, mmId, ssId) {
  function tick() {
    const diff = Math.max(0, endMs - Date.now());
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');
    if (document.getElementById(hhId)) document.getElementById(hhId).textContent = pad(h);
    if (document.getElementById(mmId)) document.getElementById(mmId).textContent = pad(m);
    if (document.getElementById(ssId)) document.getElementById(ssId).textContent = pad(s);
  }
  tick();
  setInterval(tick, 1000);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  // Countdown ends in ~6 hours from now
  startCountdown(Date.now() + 6 * 3600000, 'cdH', 'cdM', 'cdS');
});
