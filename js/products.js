// ===== DANAZONE PRODUCT DATA =====

const PRODUCTS = [
  // Electronics
  { id: 'e1', name: 'Samsung Galaxy A55 5G', cat: 'Electronics', sub: 'Phones & Tablets', emoji: '📱', price: 42000, oldPrice: 55000, rating: 4.7, reviews: 2341, badge: 'sale', desc: '6.6" Super AMOLED, 50MP Camera, 5000mAh Battery, 8GB RAM.' },
  { id: 'e2', name: 'Apple AirPods Pro (2nd Gen)', cat: 'Electronics', sub: 'Audio', emoji: '🎧', price: 28500, oldPrice: 35000, rating: 4.9, reviews: 1876, badge: 'hot', desc: 'Active Noise Cancellation, Adaptive Transparency, H2 chip.' },
  { id: 'e3', name: 'HP Pavilion 15 Laptop', cat: 'Electronics', sub: 'Laptops', emoji: '💻', price: 78000, oldPrice: 95000, rating: 4.5, reviews: 543, badge: 'sale', desc: 'Intel Core i5-13th Gen, 8GB RAM, 512GB SSD, 15.6" FHD.' },
  { id: 'e4', name: 'Sony PlayStation 5 Console', cat: 'Electronics', sub: 'Gaming', emoji: '🎮', price: 68000, oldPrice: 75000, rating: 4.9, reviews: 3210, badge: 'hot', desc: 'Ultra-fast SSD, 4K Gaming, Ray Tracing, Haptic Feedback.' },
  { id: 'e5', name: 'Canon EOS R50 Camera', cat: 'Electronics', sub: 'Cameras', emoji: '📷', price: 89000, oldPrice: 110000, rating: 4.6, reviews: 287, badge: 'new', desc: '24.2MP APS-C sensor, 4K video, Wi-Fi, compact mirrorless.' },
  { id: 'e6', name: 'Xiaomi Smart TV 43"', cat: 'Electronics', sub: 'TV & Display', emoji: '📺', price: 35000, oldPrice: 42000, rating: 4.4, reviews: 892, badge: 'sale', desc: 'Full HD, Android TV, Google Assistant, 3 HDMI ports.' },
  { id: 'e7', name: 'Samsung 65" QLED 4K TV', cat: 'Electronics', sub: 'TV & Display', emoji: '📺', price: 145000, oldPrice: 180000, rating: 4.8, reviews: 432, badge: 'new', desc: 'Quantum Dot, HDR10+, Tizen OS, Smart TV features.' },
  { id: 'e8', name: 'JBL Charge 5 Speaker', cat: 'Electronics', sub: 'Audio', emoji: '🔊', price: 14500, oldPrice: 18000, rating: 4.7, reviews: 1540, badge: 'sale', desc: 'Portable Bluetooth, IP67 waterproof, 20hr battery, powerbank.' },

  // Fashion
  { id: 'f1', name: 'Nike Air Force 1 Sneakers', cat: 'Fashion', sub: 'Shoes', emoji: '👟', price: 12000, oldPrice: 16000, rating: 4.8, reviews: 5432, badge: 'hot', desc: 'Classic court sneaker, leather upper, Nike Air cushioning.' },
  { id: 'f2', name: 'Levi\'s 501 Original Jeans', cat: 'Fashion', sub: 'Men\'s Clothing', emoji: '👖', price: 6500, oldPrice: 9000, rating: 4.6, reviews: 3210, badge: 'sale', desc: 'Iconic straight fit, 100% cotton denim, button fly.' },
  { id: 'f3', name: 'Floral Wrap Midi Dress', cat: 'Fashion', sub: 'Women\'s Clothing', emoji: '👗', price: 3200, oldPrice: 4500, rating: 4.5, reviews: 987, badge: 'new', desc: 'Elegant floral print, wrap style, midi length, versatile wear.' },
  { id: 'f4', name: 'Michael Kors Tote Bag', cat: 'Fashion', sub: 'Bags', emoji: '👜', price: 18000, oldPrice: 25000, rating: 4.7, reviews: 654, badge: 'sale', desc: 'Genuine leather, spacious, magnetic closure, signature hardware.' },
  { id: 'f5', name: 'Fossil Gen 6 Smart Watch', cat: 'Fashion', sub: 'Watches', emoji: '⌚', price: 22000, oldPrice: 32000, rating: 4.5, reviews: 432, badge: 'sale', desc: 'Wear OS, heart rate, GPS, notifications, 3-day battery.' },
  { id: 'f6', name: 'Gold Chain Necklace Set', cat: 'Fashion', sub: 'Jewellery', emoji: '📿', price: 4500, oldPrice: 6000, rating: 4.4, reviews: 765, badge: 'new', desc: '18K gold plated, layered chain set, hypoallergenic.' },

  // Home & Living
  { id: 'h1', name: 'Instant Pot Duo 7-in-1', cat: 'Home & Living', sub: 'Kitchen', emoji: '🫕', price: 12000, oldPrice: 16000, rating: 4.8, reviews: 4321, badge: 'hot', desc: 'Pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt.' },
  { id: 'h2', name: 'L-Shaped Corner Sofa', cat: 'Home & Living', sub: 'Furniture', emoji: '🛋️', price: 85000, oldPrice: 120000, rating: 4.6, reviews: 231, badge: 'sale', desc: 'Premium fabric, chaise lounge, 5-seater, washable covers.' },
  { id: 'h3', name: 'Dyson V15 Detect Vacuum', cat: 'Home & Living', sub: 'Appliances', emoji: '🧹', price: 68000, oldPrice: 82000, rating: 4.9, reviews: 876, badge: 'new', desc: 'Laser dust detection, 60min runtime, HEPA filtration.' },
  { id: 'h4', name: 'Bamboo Bedding Set (King)', cat: 'Home & Living', sub: 'Bedding', emoji: '🛏️', price: 8500, oldPrice: 12000, rating: 4.7, reviews: 543, badge: 'sale', desc: '100% organic bamboo, cooling, hypoallergenic, 400 thread count.' },

  // Beauty
  { id: 'b1', name: 'CeraVe Moisturising Cream', cat: 'Beauty', sub: 'Skincare', emoji: '🧴', price: 2800, oldPrice: 3500, rating: 4.9, reviews: 8765, badge: 'hot', desc: '454g, ceramides, hyaluronic acid, fragrance-free, dermatologist tested.' },
  { id: 'b2', name: 'Dyson Supersonic Hair Dryer', cat: 'Beauty', sub: 'Haircare', emoji: '💇', price: 48000, oldPrice: 60000, rating: 4.8, reviews: 1234, badge: 'sale', desc: 'Fast drying, intelligent heat control, magnetic attachments.' },
  { id: 'b3', name: 'MAC Lipstick Collection (5pc)', cat: 'Beauty', sub: 'Makeup', emoji: '💄', price: 8500, oldPrice: 12000, rating: 4.6, reviews: 2345, badge: 'hot', desc: '5 bestselling shades, matte finish, long-wearing, rich colour.' },
  { id: 'b4', name: 'Chanel No. 5 Perfume 100ml', cat: 'Beauty', sub: 'Fragrances', emoji: '🌹', price: 22000, oldPrice: 28000, rating: 4.9, reviews: 3421, badge: 'new', desc: 'Iconic floral aldehyde fragrance, iconic bottle, EDP formula.' },

  // Sports
  { id: 's1', name: 'Peloton Resistance Bands Set', cat: 'Sports', sub: 'Fitness', emoji: '🏋️', price: 3200, oldPrice: 4500, rating: 4.6, reviews: 2100, badge: 'new', desc: '5-piece set, fabric bands, 10-50lbs resistance, anti-slip.' },
  { id: 's2', name: 'Trek Marlin 7 Mountain Bike', cat: 'Sports', sub: 'Cycling', emoji: '🚵', price: 125000, oldPrice: 155000, rating: 4.8, reviews: 345, badge: 'sale', desc: '29" wheels, 24-speed, hydraulic disc brakes, Alpha Gold Aluminium.' },
  { id: 's3', name: 'Yonex Badminton Racket', cat: 'Sports', sub: 'Team Sports', emoji: '🏸', price: 4500, oldPrice: 6000, rating: 4.5, reviews: 765, badge: 'hot', desc: 'Astrox series, isometric head, graphite shaft, lightweight.' },

  // Food
  { id: 'fo1', name: 'Organic Kenyan Green Tea (500g)', cat: 'Food & Grocery', sub: 'Beverages', emoji: '🍵', price: 850, oldPrice: 1100, rating: 4.7, reviews: 1230, badge: 'new', desc: 'Premium Kenyan highlands, organic certified, antioxidant rich.' },
  { id: 'fo2', name: 'Mixed Nuts Premium Pack 1kg', cat: 'Food & Grocery', sub: 'Snacks', emoji: '🥜', price: 2200, oldPrice: 2800, rating: 4.6, reviews: 876, badge: 'hot', desc: 'Almonds, cashews, walnuts, macadamias — roasted, unsalted.' },

  // Books
  { id: 'bk1', name: 'Atomic Habits — James Clear', cat: 'Books', sub: 'Non-Fiction', emoji: '📚', price: 1800, oldPrice: 2400, rating: 4.9, reviews: 12340, badge: 'hot', desc: 'Build good habits, break bad ones. NY Times #1 bestseller.' },
  { id: 'bk2', name: 'Things Fall Apart — Chinua Achebe', cat: 'Books', sub: 'Fiction', emoji: '📖', price: 900, oldPrice: 1200, rating: 4.8, reviews: 5432, badge: 'new', desc: 'The seminal African novel. Compelling exploration of culture clash.' },

  // Toys
  { id: 't1', name: 'LEGO Technic Ferrari 42143', cat: 'Toys & Kids', sub: 'Educational', emoji: '🧱', price: 18000, oldPrice: 24000, rating: 4.9, reviews: 2341, badge: 'hot', desc: '1:8 scale, 1167 pieces, V8 engine, working steering, 18+ yrs.' },
  { id: 't2', name: 'Baby Learning Activity Cube', cat: 'Toys & Kids', sub: 'Baby', emoji: '🎲', price: 2400, oldPrice: 3200, rating: 4.7, reviews: 876, badge: 'new', desc: 'Non-toxic, 5-side activity, shapes & colours, 6 months+.' },
];

// Helper: get products by category
function getProductsByCategory(cat) {
  return PRODUCTS.filter(p => p.cat === cat);
}

// Helper: get featured products (mix)
function getFeaturedProducts(count = 8) {
  return PRODUCTS.filter(p => p.badge === 'hot' || p.badge === 'sale').slice(0, count);
}

// Helper: get new arrivals
function getNewArrivals(count = 8) {
  return PRODUCTS.filter(p => p.badge === 'new').slice(0, count);
}

// Helper: search products
function searchProducts(query) {
  const q = query.toLowerCase();
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.cat.toLowerCase().includes(q) ||
    p.sub.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q)
  );
}

// Helper: render product card
function renderProductCard(p) {
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));
  return `
  <div class="product-card" onclick="window.location='product.html?id=${p.id}'">
    <div class="product-img-wrap">
      ${p.emoji || '📦'}
      <div class="product-badge-wrap">
        ${p.badge ? `<span class="badge badge-${p.badge}">${p.badge}</span>` : ''}
      </div>
      <div class="product-actions">
        <button class="product-action-btn" onclick="event.stopPropagation();showNotif('❤️','Added to wishlist!')" title="Wishlist">❤️</button>
        <button class="product-action-btn" onclick="event.stopPropagation();addToCart({id:'${p.id}',name:'${p.name.replace(/'/g,"\\'")}',price:${p.price},emoji:'${p.emoji||'📦'}'})" title="Quick add">🛒</button>
      </div>
    </div>
    <div class="product-body">
      <div class="product-cat">${p.sub}</div>
      <div class="product-title">${p.name}</div>
      <div class="product-rating">
        <span class="stars">${stars}</span>
        <span class="rating-count">${p.rating} (${p.reviews.toLocaleString()})</span>
      </div>
      <div class="product-price">
        <span class="price-current">KES ${p.price.toLocaleString()}</span>
        ${p.oldPrice ? `<span class="price-old">KES ${p.oldPrice.toLocaleString()}</span><span class="price-discount">-${discount}%</span>` : ''}
      </div>
      <button class="add-to-cart" onclick="event.stopPropagation();addToCart({id:'${p.id}',name:'${p.name.replace(/'/g,"\\'")}',price:${p.price},emoji:'${p.emoji||'📦'}'})">
        🛒 Add to Cart
      </button>
    </div>
  </div>`;
}
