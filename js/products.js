// ===== DANAZONE PRODUCT DATA =====
// Images: Unsplash Source API (no key needed, free commercial use)
// Format: https://source.unsplash.com/400x400/?keyword

const PRODUCTS = [
  // ===== ELECTRONICS =====
  {
    id: 'e1', name: 'Samsung Galaxy A55 5G', cat: 'Electronics', sub: 'Phones & Tablets',
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80&auto=format&fit=crop',
    price: 42000, oldPrice: 55000, rating: 4.7, reviews: 2341, badge: 'sale',
    desc: '6.6" Super AMOLED, 50MP Camera, 5000mAh Battery, 8GB RAM, 128GB Storage.'
  },
  {
    id: 'e2', name: 'Apple AirPods Pro (2nd Gen)', cat: 'Electronics', sub: 'Audio',
    img: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&q=80&auto=format&fit=crop',
    price: 28500, oldPrice: 35000, rating: 4.9, reviews: 1876, badge: 'hot',
    desc: 'Active Noise Cancellation, Adaptive Transparency, H2 chip, 30hr total battery.'
  },
  {
    id: 'e3', name: 'HP Pavilion 15 Laptop', cat: 'Electronics', sub: 'Laptops',
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80&auto=format&fit=crop',
    price: 78000, oldPrice: 95000, rating: 4.5, reviews: 543, badge: 'sale',
    desc: 'Intel Core i5-13th Gen, 8GB RAM, 512GB SSD, 15.6" FHD IPS Display.'
  },
  {
    id: 'e4', name: 'Sony PlayStation 5 Console', cat: 'Electronics', sub: 'Gaming',
    img: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&q=80&auto=format&fit=crop',
    price: 68000, oldPrice: 75000, rating: 4.9, reviews: 3210, badge: 'hot',
    desc: 'Ultra-fast SSD, 4K Gaming, Ray Tracing, Haptic Feedback DualSense controller.'
  },
  {
    id: 'e5', name: 'Canon EOS R50 Camera', cat: 'Electronics', sub: 'Cameras',
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80&auto=format&fit=crop',
    price: 89000, oldPrice: 110000, rating: 4.6, reviews: 287, badge: 'new',
    desc: '24.2MP APS-C sensor, 4K video, Wi-Fi connectivity, compact mirrorless body.'
  },
  {
    id: 'e6', name: 'Xiaomi Smart TV 43"', cat: 'Electronics', sub: 'TV & Display',
    img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80&auto=format&fit=crop',
    price: 35000, oldPrice: 42000, rating: 4.4, reviews: 892, badge: 'sale',
    desc: 'Full HD 1080p, Android TV, Google Assistant, 3 HDMI ports, Dolby Audio.'
  },
  {
    id: 'e7', name: 'Samsung 65" QLED 4K TV', cat: 'Electronics', sub: 'TV & Display',
    img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=80&auto=format&fit=crop',
    price: 145000, oldPrice: 180000, rating: 4.8, reviews: 432, badge: 'new',
    desc: 'Quantum Dot, HDR10+, Tizen OS, Smart Hub, 4K upscaling.'
  },
  {
    id: 'e8', name: 'JBL Charge 5 Speaker', cat: 'Electronics', sub: 'Audio',
    img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80&auto=format&fit=crop',
    price: 14500, oldPrice: 18000, rating: 4.7, reviews: 1540, badge: 'sale',
    desc: 'Portable Bluetooth, IP67 waterproof, 20hr battery, built-in powerbank.'
  },

  // ===== FASHION =====
  {
    id: 'f1', name: 'Nike Air Force 1 Sneakers', cat: 'Fashion', sub: 'Shoes',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80&auto=format&fit=crop',
    price: 12000, oldPrice: 16000, rating: 4.8, reviews: 5432, badge: 'hot',
    desc: 'Classic court sneaker, full-grain leather upper, Nike Air cushioning unit.'
  },
  {
    id: 'f2', name: "Levi's 501 Original Jeans", cat: 'Fashion', sub: "Men's Clothing",
    img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80&auto=format&fit=crop',
    price: 6500, oldPrice: 9000, rating: 4.6, reviews: 3210, badge: 'sale',
    desc: 'Iconic straight fit, 100% cotton denim, button fly, original Levi\'s quality.'
  },
  {
    id: 'f3', name: 'Floral Wrap Midi Dress', cat: 'Fashion', sub: "Women's Clothing",
    img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&q=80&auto=format&fit=crop',
    price: 3200, oldPrice: 4500, rating: 4.5, reviews: 987, badge: 'new',
    desc: 'Elegant floral print, wrap-style, midi length, versatile for any occasion.'
  },
  {
    id: 'f4', name: 'Michael Kors Tote Bag', cat: 'Fashion', sub: 'Bags',
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80&auto=format&fit=crop',
    price: 18000, oldPrice: 25000, rating: 4.7, reviews: 654, badge: 'sale',
    desc: 'Genuine leather, spacious interior, magnetic closure, signature MK hardware.'
  },
  {
    id: 'f5', name: 'Fossil Gen 6 Smart Watch', cat: 'Fashion', sub: 'Watches',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80&auto=format&fit=crop',
    price: 22000, oldPrice: 32000, rating: 4.5, reviews: 432, badge: 'sale',
    desc: 'Wear OS by Google, heart rate monitor, GPS, 3-day battery, swim-proof.'
  },
  {
    id: 'f6', name: 'Gold Chain Necklace Set', cat: 'Fashion', sub: 'Jewellery',
    img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80&auto=format&fit=crop',
    price: 4500, oldPrice: 6000, rating: 4.4, reviews: 765, badge: 'new',
    desc: '18K gold plated, 3-piece layered chain set, hypoallergenic, gift box included.'
  },

  // ===== HOME & LIVING =====
  {
    id: 'h1', name: 'Instant Pot Duo 7-in-1', cat: 'Home & Living', sub: 'Kitchen',
    img: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&q=80&auto=format&fit=crop',
    price: 12000, oldPrice: 16000, rating: 4.8, reviews: 4321, badge: 'hot',
    desc: 'Pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker.'
  },
  {
    id: 'h2', name: 'L-Shaped Corner Sofa', cat: 'Home & Living', sub: 'Furniture',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80&auto=format&fit=crop',
    price: 85000, oldPrice: 120000, rating: 4.6, reviews: 231, badge: 'sale',
    desc: 'Premium fabric, chaise lounge included, 5-seater, removable washable covers.'
  },
  {
    id: 'h3', name: 'Dyson V15 Detect Vacuum', cat: 'Home & Living', sub: 'Appliances',
    img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=80&auto=format&fit=crop',
    price: 68000, oldPrice: 82000, rating: 4.9, reviews: 876, badge: 'new',
    desc: 'Laser dust detection, 60min runtime, whole-machine HEPA filtration.'
  },
  {
    id: 'h4', name: 'Bamboo Bedding Set (King)', cat: 'Home & Living', sub: 'Bedding',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80&auto=format&fit=crop',
    price: 8500, oldPrice: 12000, rating: 4.7, reviews: 543, badge: 'sale',
    desc: '100% organic bamboo, cooling properties, hypoallergenic, 400 thread count.'
  },

  // ===== BEAUTY =====
  {
    id: 'b1', name: 'CeraVe Moisturising Cream', cat: 'Beauty', sub: 'Skincare',
    img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80&auto=format&fit=crop',
    price: 2800, oldPrice: 3500, rating: 4.9, reviews: 8765, badge: 'hot',
    desc: '454g tub, ceramides & hyaluronic acid, fragrance-free, dermatologist tested.'
  },
  {
    id: 'b2', name: 'Dyson Supersonic Hair Dryer', cat: 'Beauty', sub: 'Haircare',
    img: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&q=80&auto=format&fit=crop',
    price: 48000, oldPrice: 60000, rating: 4.8, reviews: 1234, badge: 'sale',
    desc: 'Fast drying, intelligent heat control, 5 magnetic styling attachments.'
  },
  {
    id: 'b3', name: 'MAC Lipstick Collection (5pc)', cat: 'Beauty', sub: 'Makeup',
    img: 'https://images.unsplash.com/photo-1586495777744-4e6232bf5535?w=400&q=80&auto=format&fit=crop',
    price: 8500, oldPrice: 12000, rating: 4.6, reviews: 2345, badge: 'hot',
    desc: '5 bestselling shades, matte finish, long-wearing formula, rich pigment.'
  },
  {
    id: 'b4', name: 'Chanel No. 5 Perfume 100ml', cat: 'Beauty', sub: 'Fragrances',
    img: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&q=80&auto=format&fit=crop',
    price: 22000, oldPrice: 28000, rating: 4.9, reviews: 3421, badge: 'new',
    desc: 'Iconic floral aldehyde fragrance, 100ml EDP, elegant Chanel bottle.'
  },

  // ===== SPORTS =====
  {
    id: 's1', name: 'Resistance Bands Set (5pc)', cat: 'Sports', sub: 'Fitness',
    img: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&q=80&auto=format&fit=crop',
    price: 3200, oldPrice: 4500, rating: 4.6, reviews: 2100, badge: 'new',
    desc: '5-piece fabric resistance bands, 10–50lbs resistance, anti-slip design.'
  },
  {
    id: 's2', name: 'Trek Marlin 7 Mountain Bike', cat: 'Sports', sub: 'Cycling',
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&q=80&auto=format&fit=crop',
    price: 125000, oldPrice: 155000, rating: 4.8, reviews: 345, badge: 'sale',
    desc: '29" wheels, 24-speed Shimano drivetrain, hydraulic disc brakes, aluminium frame.'
  },
  {
    id: 's3', name: 'Yonex Badminton Racket', cat: 'Sports', sub: 'Team Sports',
    img: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&q=80&auto=format&fit=crop',
    price: 4500, oldPrice: 6000, rating: 4.5, reviews: 765, badge: 'hot',
    desc: 'Astrox series, isometric head, graphite shaft, lightweight 82g frame.'
  },

  // ===== FOOD & GROCERY =====
  {
    id: 'fo1', name: 'Organic Kenyan Green Tea (500g)', cat: 'Food & Grocery', sub: 'Beverages',
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80&auto=format&fit=crop',
    price: 850, oldPrice: 1100, rating: 4.7, reviews: 1230, badge: 'new',
    desc: 'Premium Kenyan highlands grown, certified organic, rich in antioxidants.'
  },
  {
    id: 'fo2', name: 'Mixed Nuts Premium Pack 1kg', cat: 'Food & Grocery', sub: 'Snacks',
    img: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&q=80&auto=format&fit=crop',
    price: 2200, oldPrice: 2800, rating: 4.6, reviews: 876, badge: 'hot',
    desc: 'Almonds, cashews, walnuts, macadamias — lightly roasted, unsalted, 1kg bag.'
  },

  // ===== BOOKS =====
  {
    id: 'bk1', name: 'Atomic Habits — James Clear', cat: 'Books', sub: 'Non-Fiction',
    img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80&auto=format&fit=crop',
    price: 1800, oldPrice: 2400, rating: 4.9, reviews: 12340, badge: 'hot',
    desc: 'Build good habits, break bad ones. New York Times #1 bestseller.'
  },
  {
    id: 'bk2', name: 'Things Fall Apart — Chinua Achebe', cat: 'Books', sub: 'Fiction',
    img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80&auto=format&fit=crop',
    price: 900, oldPrice: 1200, rating: 4.8, reviews: 5432, badge: 'new',
    desc: 'The seminal African novel. A powerful exploration of culture and identity.'
  },

  // ===== TOYS & KIDS =====
  {
    id: 't1', name: 'LEGO Technic Ferrari 42143', cat: 'Toys & Kids', sub: 'Educational',
    img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&q=80&auto=format&fit=crop',
    price: 18000, oldPrice: 24000, rating: 4.9, reviews: 2341, badge: 'hot',
    desc: '1:8 scale model, 1167 pieces, working V8 engine details, for ages 18+.'
  },
  {
    id: 't2', name: 'Baby Learning Activity Cube', cat: 'Toys & Kids', sub: 'Baby',
    img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=80&auto=format&fit=crop',
    price: 2400, oldPrice: 3200, rating: 4.7, reviews: 876, badge: 'new',
    desc: 'Non-toxic materials, 5 activity sides, shapes & colours, suitable from 6 months.'
  }
];

// ===== HELPERS =====

function getProductsByCategory(cat) {
  return PRODUCTS.filter(p => p.cat === cat);
}

function getFeaturedProducts(count = 8) {
  return PRODUCTS.filter(p => p.badge === 'hot' || p.badge === 'sale').slice(0, count);
}

function getNewArrivals(count = 8) {
  return PRODUCTS.filter(p => p.badge === 'new').slice(0, count);
}

function searchProducts(query) {
  const q = query.toLowerCase();
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.cat.toLowerCase().includes(q) ||
    p.sub.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q)
  );
}

function renderProductCard(p) {
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));
  const nameSafe = p.name.replace(/'/g, "\\'");
  return `
  <div class="product-card" onclick="window.location=(window.PRODUCT_PAGE||'pages/product.html')+'?id=${p.id}'">
    <div class="product-img-wrap" style="font-size:0">
      <img 
        src="${p.img}" 
        alt="${p.name}" 
        loading="lazy"
        style="width:100%;height:100%;object-fit:cover"
      >
      <div class="product-badge-wrap">
        ${p.badge ? `<span class="badge badge-${p.badge}">${p.badge}</span>` : ''}
      </div>
      <div class="product-actions">
        <button class="product-action-btn" onclick="event.stopPropagation();showNotif('❤️','Added to wishlist!')" title="Wishlist">❤️</button>
        <button class="product-action-btn" onclick="event.stopPropagation();addToCart({id:'${p.id}',name:'${nameSafe}',price:${p.price},img:'${p.img}'})" title="Quick add">🛒</button>
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
      <button class="add-to-cart" onclick="event.stopPropagation();addToCart({id:'${p.id}',name:'${nameSafe}',price:${p.price},img:'${p.img}'})">
        🛒 Add to Cart
      </button>
    </div>
  </div>`;
}
