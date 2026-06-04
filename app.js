/* ==========================================================================
   LuxeDrive Web Application Logic
   ========================================================================== */

// 1. Car Database (10 Cars)
const CAR_DATABASE = [
  {
    id: 1,
    brand: "Ferrari",
    model: "F8 Tributo",
    category: "Sports",
    price: 450,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1592853625597-7d17be820d0c?auto=format&fit=crop&q=80&w=600",
    specs: {
      hp: "710 HP",
      acceleration: "2.9s",
      topSpeed: "211 mph",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: "2 seats"
    },
    description: "The Ferrari F8 Tributo is the pinnacle of mid-rear-engined sports cars. Built around the most powerful V8 engine in Ferrari history, it delivers breathtaking driving dynamics, aerodynamic perfection, and an iconic engine note that defines the luxury sports car experience."
  },
  {
    id: 2,
    brand: "Lamborghini",
    model: "Huracán Evo",
    category: "Sports",
    price: 490,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=600",
    specs: {
      hp: "640 HP",
      acceleration: "2.9s",
      topSpeed: "202 mph",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: "2 seats"
    },
    description: "The Huracán EVO is the evolution of Lamborghini's most successful V10 lineage. With predictive vehicle dynamics control (LDVI), all-wheel steering, and an updated styling language, it combines raw, track-focused capability with modern cabin luxury."
  },
  {
    id: 3,
    brand: "Tesla",
    model: "Model S Plaid",
    category: "Electric",
    price: 260,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=600",
    specs: {
      hp: "1020 HP",
      acceleration: "1.99s",
      topSpeed: "200 mph",
      fuel: "Electric",
      transmission: "Automatic",
      seats: "5 seats"
    },
    description: "With the quickest acceleration of any production vehicle in existence, the Model S Plaid features a tri-motor configuration with carbon-sleeved rotors. It redefines sedan performance while maintaining five-passenger utility and autonomous-ready safety features."
  },
  {
    id: 4,
    brand: "Porsche",
    model: "Taycan Turbo S",
    category: "Electric",
    price: 320,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=600",
    specs: {
      hp: "750 HP",
      acceleration: "2.6s",
      topSpeed: "161 mph",
      fuel: "Electric",
      transmission: "Automatic",
      seats: "4 seats"
    },
    description: "The Taycan Turbo S is Porsche's premium luxury EV, bridging race-grade electric motors with precision handling. With launch control, 800V charging architecture, and an executive interior, it is the perfect touring vehicle for modern performance enthusiasts."
  },
  {
    id: 5,
    brand: "BMW",
    model: "M8 Competition",
    category: "Sedan",
    price: 280,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600",
    specs: {
      hp: "617 HP",
      acceleration: "3.0s",
      topSpeed: "190 mph",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: "4 seats"
    },
    description: "BMW's ultimate grand tourer, the M8 Competition Coupe, features a high-performance 4.4L TwinPower V8 engine. With an M xDrive system, carbon-fiber roof, and luxurious Merino leather cabins, it blends track capability with long-distance comfort."
  },
  {
    id: 6,
    brand: "Mercedes-AMG",
    model: "GT 63 S",
    category: "Sedan",
    price: 290,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600",
    specs: {
      hp: "630 HP",
      acceleration: "3.1s",
      topSpeed: "196 mph",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: "4 seats"
    },
    description: "This handcrafted four-door coupe features a 4.0L V8 Biturbo engine. Outfitted with an active rear-wheel steering configuration, dual-zone digital dashboard display, and dynamic select driving modes, it stands as the apex of AMG sedan luxury."
  },
  {
    id: 7,
    brand: "Aston Martin",
    model: "DBX 707",
    category: "SUV",
    price: 340,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=600",
    specs: {
      hp: "707 HP",
      acceleration: "3.1s",
      topSpeed: "193 mph",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: "5 seats"
    },
    description: "The world's most powerful luxury SUV, the Aston Martin DBX 707, features sports-car speed in a spacious SUV form. Powered by a custom-tuned twin-turbo V8, it offers dynamic carbon-ceramic brakes, active roll control, and premium British leather detailing."
  },
  {
    id: 8,
    brand: "Range Rover",
    model: "Autobiography",
    category: "SUV",
    price: 310,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&q=80&w=600",
    specs: {
      hp: "523 HP",
      acceleration: "4.4s",
      topSpeed: "155 mph",
      fuel: "Hybrid",
      transmission: "Automatic",
      seats: "5 seats"
    },
    description: "The pinnacle of British utility luxury. Combining supreme passenger isolation with active noise-cancellation, floating air suspension, and executive-class rear seating, the Autobiography provides effortless drive confidence on all terrains."
  },
  {
    id: 9,
    brand: "Audi",
    model: "RS e-tron GT",
    category: "Electric",
    price: 300,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=600",
    specs: {
      hp: "637 HP",
      acceleration: "3.1s",
      topSpeed: "155 mph",
      fuel: "Electric",
      transmission: "Automatic",
      seats: "4 seats"
    },
    description: "Audi's electric performance masterpiece. Dual synchronous motors provide instantaneous torque distribution, while virtual cockpit display panels, Matrix LED headlights, and eco-leather upholstery offer a futuristic Grand Touring atmosphere."
  },
  {
    id: 10,
    brand: "Jaguar",
    model: "F-Type R",
    category: "Sports",
    price: 250,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600",
    specs: {
      hp: "575 HP",
      acceleration: "3.5s",
      topSpeed: "186 mph",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: "2 seats"
    },
    description: "The F-TYPE R is Jaguar's ultimate supercharged sports car. With a distinctive exhaust growl, active mechanical differential, and driver-focused ergonomics, it delivers visceral connection, handling poise, and timeless aesthetics."
  },
  {
    id: 11,
    brand: "Porsche",
    model: "911 GT3 RS",
    category: "Sports",
    price: 480,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600",
    specs: {
      hp: "518 HP",
      acceleration: "3.0s",
      topSpeed: "184 mph",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: "2 seats"
    },
    description: "The Porsche 911 GT3 RS is a street-legal track weapon. Engineered for maximum aerodynamic downforce and raw cornering agility, it features a naturally aspirated 4.0L flat-six engine that revs all the way to 9,000 RPM."
  },
  {
    id: 12,
    brand: "Porsche",
    model: "Cayenne E-Hybrid",
    category: "SUV",
    price: 330,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600",
    specs: {
      hp: "729 HP",
      acceleration: "3.5s",
      topSpeed: "183 mph",
      fuel: "Hybrid",
      transmission: "Automatic",
      seats: "5 seats"
    },
    description: "The Cayenne Turbo E-Hybrid is the ultimate luxury performance SUV from Stuttgart. Combining a twin-turbo V8 engine with a powerful electric motor, it delivers executive-class passenger comfort alongside outstanding hybrid efficiency and speed."
  }
];

// 2. Global State Variables
let currentCategory = 'all';
let searchQuery = '';
let favorites = [];
let bookingsCart = [];
let selectedCar = null;
let currentTestimonialIndex = 0;

// 3. Select DOM Elements
const introLoader = document.getElementById('intro-loader');
const header = document.getElementById('header');
const carsGrid = document.getElementById('cars-grid');
const searchInput = document.getElementById('search-input');
const favCountBadge = document.getElementById('fav-count');
const cartCountBadge = document.getElementById('cart-count');
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

// Modals & Drawer
const drawerBackdrop = document.getElementById('drawer-backdrop');
const cartDrawer = document.getElementById('cart-drawer');
const cartCloseBtn = document.getElementById('cart-close-btn');
const cartTrigger = document.getElementById('cart-trigger');
const favTrigger = document.getElementById('fav-trigger');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartFooter = document.getElementById('cart-footer');
const cartSubtotal = document.getElementById('cart-subtotal');
const browseRentalsBtn = document.getElementById('browse-rentals-btn');

const detailsModal = document.getElementById('details-modal');
const detailsClose = document.getElementById('details-close');
const detailsModalBody = document.getElementById('details-modal-body');

const checkoutModal = document.getElementById('checkout-modal');
const checkoutClose = document.getElementById('checkout-close');
const checkoutTriggerBtn = document.getElementById('checkout-trigger-btn');
const checkoutItemsList = document.getElementById('checkout-items-list');
const checkoutLeftPane = document.getElementById('checkout-left-pane');
const checkoutRightPane = document.getElementById('checkout-right-pane');
const completePaymentBtn = document.getElementById('complete-payment-btn');
const processingOverlay = document.getElementById('processing-overlay');
const processingStatusText = document.getElementById('processing-status-text');
const successPane = document.getElementById('success-pane');
const successReceiptBox = document.getElementById('success-receipt-box');
const successDoneBtn = document.getElementById('success-done-btn');
const receiptPrintBtn = document.getElementById('receipt-print-btn');

// Category filter buttons
const categoryCards = document.querySelectorAll('.category-card');

// Navigation links scroll helper
const navLinks = document.querySelectorAll('.nav-link');

// ==========================================================================
// 4. Initial Application Load & Loader Screen
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
  // Clear any default browser storage if needed, or read favorites
  const savedFavs = localStorage.getItem('luxedrive_favs');
  if (savedFavs) {
    favorites = JSON.parse(savedFavs);
    updateFavUI();
  }
  
  const savedCart = localStorage.getItem('luxedrive_cart');
  if (savedCart) {
    bookingsCart = JSON.parse(savedCart);
    updateCartUI();
  }

  // Render initial cars list
  renderCarsGrid();



  // Hide Pre-loader after intro animation completes
  setTimeout(() => {
    introLoader.classList.add('fade-out');
    document.body.style.overflowY = 'auto'; // allow scroll
  }, 3200);
});

// Window Scroll effect on Header
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Active Link Highlight on Scroll
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 120;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

// Hamburger menu toggle
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close Mobile Nav on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ==========================================================================
// 5. Car Cards Grid Rendering & Filtering
// ==========================================================================
function renderCarsGrid() {
  carsGrid.innerHTML = '';
  
  // Filter inventory
  const filteredCars = CAR_DATABASE.filter(car => {
    const matchesCategory = (currentCategory === 'all' || car.category.toLowerCase() === currentCategory.toLowerCase());
    const matchesSearch = (car.brand.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           car.category.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (filteredCars.length === 0) {
    carsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">
        <i class="fa-solid fa-ban" style="font-size: 2rem; color: var(--text-muted); margin-bottom: 12px;"></i>
        <p>No matching luxury cars found for "${searchQuery}".</p>
      </div>
    `;
    return;
  }

  filteredCars.forEach(car => {
    const isFav = favorites.includes(car.id);
    const carCardHTML = `
      <div class="car-card glass-panel" data-id="${car.id}">
        <div class="car-card-top">
          <span class="car-card-badge">${car.category}</span>
          <button class="favorite-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${car.id}, event)">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
        
        <div class="car-card-image-wrapper">
          <img src="${car.image}" alt="${car.brand} ${car.model}" class="car-card-img">
        </div>
        
        <div class="car-card-info">
          <h4 class="car-card-title">${car.brand} ${car.model}</h4>
          
          <div class="car-card-specs">
            <span class="spec-item"><i class="fa-solid fa-bolt"></i> ${car.specs.hp}</span>
            <span class="spec-item"><i class="fa-solid fa-gauge"></i> ${car.specs.acceleration}</span>
            <span class="spec-item"><i class="fa-solid fa-gear"></i> ${car.specs.transmission}</span>
          </div>
          
          <div class="car-card-footer">
            <div class="car-card-price">
              <span class="price-amount">$${car.price}</span>
              <span class="price-period">/ Rent Day</span>
            </div>
            
            <div class="car-card-rating">
              <i class="fa-solid fa-star"></i>
              <span>${car.rating.toFixed(1)}</span>
            </div>
          </div>
          
          <button class="btn-view-details" onclick="openDetailsModal(${car.id})">View Details</button>
        </div>
      </div>
    `;
    carsGrid.insertAdjacentHTML('beforeend', carCardHTML);
  });
}

// Category filter action
categoryCards.forEach(card => {
  card.addEventListener('click', () => {
    categoryCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    
    currentCategory = card.getAttribute('data-category');
    renderCarsGrid();
  });
});

// Search input keyup action
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.trim();
  renderCarsGrid();
});

// Banner button action
document.getElementById('banner-action-btn').addEventListener('click', () => {
  currentCategory = 'all';
  categoryCards.forEach(c => c.classList.remove('active'));
  categoryCards[0].classList.add('active');
  searchInput.value = '';
  searchQuery = '';
  renderCarsGrid();
  document.getElementById('models').scrollIntoView({ behavior: 'smooth' });
});

// Explore Models button action
document.querySelector('.btn-primary[href="#models"]').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('models').scrollIntoView({ behavior: 'smooth' });
});

// ==========================================================================
// 6. Favorites List Toggle
// ==========================================================================
window.toggleFavorite = function(carId, event) {
  event.stopPropagation(); // prevent card click
  const index = favorites.indexOf(carId);
  if (index === -1) {
    favorites.push(carId);
  } else {
    favorites.splice(index, 1);
  }
  
  localStorage.setItem('luxedrive_favs', JSON.stringify(favorites));
  updateFavUI();
  renderCarsGrid();
};

function updateFavUI() {
  favCountBadge.textContent = favorites.length;
}

// Click header heart button to show favorites
favTrigger.addEventListener('click', () => {
  // If we clicked heart, we filter the grid to show only favorites
  if (favorites.length === 0) {
    alert("You don't have any favorited cars yet! Click the heart icons on cars to add them to favorites.");
    return;
  }
  
  // Set current category to 'favorites' mock
  carsGrid.innerHTML = '';
  const favoriteCars = CAR_DATABASE.filter(car => favorites.includes(car.id));
  
  favoriteCars.forEach(car => {
    const carCardHTML = `
      <div class="car-card glass-panel" data-id="${car.id}">
        <div class="car-card-top">
          <span class="car-card-badge">${car.category}</span>
          <button class="favorite-btn active" onclick="toggleFavorite(${car.id}, event)">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
        
        <div class="car-card-image-wrapper">
          <img src="${car.image}" alt="${car.brand} ${car.model}" class="car-card-img">
        </div>
        
        <div class="car-card-info">
          <h4 class="car-card-title">${car.brand} ${car.model}</h4>
          
          <div class="car-card-specs">
            <span class="spec-item"><i class="fa-solid fa-bolt"></i> ${car.specs.hp}</span>
            <span class="spec-item"><i class="fa-solid fa-gauge"></i> ${car.specs.acceleration}</span>
            <span class="spec-item"><i class="fa-solid fa-gear"></i> ${car.specs.transmission}</span>
          </div>
          
          <div class="car-card-footer">
            <div class="car-card-price">
              <span class="price-amount">$${car.price}</span>
              <span class="price-period">/ Rent Day</span>
            </div>
            
            <div class="car-card-rating">
              <i class="fa-solid fa-star"></i>
              <span>${car.rating.toFixed(1)}</span>
            </div>
          </div>
          
          <button class="btn-view-details" onclick="openDetailsModal(${car.id})">View Details</button>
        </div>
      </div>
    `;
    carsGrid.insertAdjacentHTML('beforeend', carCardHTML);
  });
  
  // Scroll to grid
  document.getElementById('models').scrollIntoView({ behavior: 'smooth' });
});

// ==========================================================================
// 7. Booking / Cart Drawer Handler
// ==========================================================================
function openCartDrawer() {
  cartDrawer.classList.add('active');
  drawerBackdrop.classList.add('active');
}

function closeCartDrawer() {
  cartDrawer.classList.remove('active');
  drawerBackdrop.classList.remove('active');
}

cartTrigger.addEventListener('click', openCartDrawer);
cartCloseBtn.addEventListener('click', closeCartDrawer);
drawerBackdrop.addEventListener('click', () => {
  closeCartDrawer();
  closeDetailsModal();
  closeCheckoutModal();
});
browseRentalsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  closeCartDrawer();
  document.getElementById('models').scrollIntoView({ behavior: 'smooth' });
});

window.removeBookingItem = function(bookingId) {
  bookingsCart = bookingsCart.filter(item => item.id !== bookingId);
  localStorage.setItem('autolux_cart', JSON.stringify(bookingsCart));
  updateCartUI();
};

function updateCartUI() {
  cartCountBadge.textContent = bookingsCart.length;
  
  if (bookingsCart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-calendar-xmark cart-empty-icon"></i>
        <p>Your booking list is empty.</p>
        <button class="btn btn-primary" id="drawer-browse-btn" onclick="closeCartDrawer(); document.getElementById('models').scrollIntoView({behavior:'smooth'});">Browse Rentals</button>
      </div>
    `;
    cartFooter.style.display = 'none';
  } else {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    bookingsCart.forEach(item => {
      total += item.totalPrice;
      const itemHTML = `
        <div class="cart-item">
          <img src="${item.carImage}" alt="${item.carName}" class="cart-item-img">
          <div class="cart-item-details">
            <h5 class="cart-item-name">${item.carName}</h5>
            <span class="cart-item-dates"><i class="fa-solid fa-calendar-days"></i> ${item.startDate} to ${item.endDate} (${item.days} days)</span>
            <span class="cart-item-price">$${item.totalPrice}</span>
          </div>
          <span class="cart-item-remove" onclick="removeBookingItem(${item.id})"><i class="fa-solid fa-trash-can"></i></span>
        </div>
      `;
      cartItemsContainer.insertAdjacentHTML('beforeend', itemHTML);
    });
    
    cartSubtotal.textContent = `$${total.toLocaleString()}`;
    cartFooter.style.display = 'flex';
  }
}

// ==========================================================================
// 8. Car Details Modal Handler
// ==========================================================================
window.openDetailsModal = function(carId) {
  selectedCar = CAR_DATABASE.find(car => car.id === carId);
  if (!selectedCar) return;
  
  // Set default dates
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 2); // 2 days default rental
  
  const todayStr = formatDateISO(today);
  const tomorrowStr = formatDateISO(tomorrow);
  
  // Calculate default price
  const initialDays = 2;
  const initialTotal = selectedCar.price * initialDays;
  
  detailsModalBody.innerHTML = `
    <!-- Image & Spec Badges Pane -->
    <div class="details-image-section">
      <img src="${selectedCar.image}" alt="${selectedCar.brand} ${selectedCar.model}" class="details-car-img">
      
      <div class="details-specs-grid">
        <div class="details-spec-card">
          <i class="fa-solid fa-bolt"></i>
          <div class="details-spec-info">
            <span class="details-spec-label">Power</span>
            <span class="details-spec-value">${selectedCar.specs.hp}</span>
          </div>
        </div>
        <div class="details-spec-card">
          <i class="fa-solid fa-gauge"></i>
          <div class="details-spec-info">
            <span class="details-spec-label">0-60 mph</span>
            <span class="details-spec-value">${selectedCar.specs.acceleration}</span>
          </div>
        </div>
        <div class="details-spec-card">
          <i class="fa-solid fa-tachometer-alt"></i>
          <div class="details-spec-info">
            <span class="details-spec-label">Top Speed</span>
            <span class="details-spec-value">${selectedCar.specs.topSpeed}</span>
          </div>
        </div>
        <div class="details-spec-card">
          <i class="fa-solid fa-user-friends"></i>
          <div class="details-spec-info">
            <span class="details-spec-label">Capacity</span>
            <span class="details-spec-value">${selectedCar.specs.seats}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Info & Booking Form Pane -->
    <div class="details-info-section">
      <div>
        <span class="details-brand">${selectedCar.brand}</span>
        <h4 class="details-name">${selectedCar.model}</h4>
      </div>
      
      <p class="details-desc">${selectedCar.description}</p>
      
      <!-- Booking Config Form -->
      <form class="booking-form" id="modal-booking-form" onsubmit="event.preventDefault();">
        <div class="booking-form-row">
          <div class="input-group">
            <label for="book-start-date">Start Rental</label>
            <input type="date" id="book-start-date" value="${todayStr}" min="${todayStr}">
          </div>
          <div class="input-group">
            <label for="book-end-date">End Rental</label>
            <input type="date" id="book-end-date" value="${tomorrowStr}" min="${tomorrowStr}">
          </div>
        </div>
        
        <div class="booking-summary-box">
          <div>
            <span style="font-size: 0.75rem; color: var(--text-secondary); display: block;">Daily Rate: $${selectedCar.price}</span>
            <span id="booking-days-label" style="font-weight: 500;">Duration: ${initialDays} days</span>
          </div>
          <span class="summary-cost" id="booking-total-cost">$${initialTotal}</span>
        </div>
        
        <button type="submit" class="btn btn-primary btn-rent-action" id="modal-book-now-btn">Add to Booking List</button>
      </form>
    </div>
  `;
  
  // Open details modal
  detailsModal.classList.add('active');
  drawerBackdrop.classList.add('active');
  
  // Set up details listeners
  const startDateInput = document.getElementById('book-start-date');
  const endDateInput = document.getElementById('book-end-date');
  const daysLabel = document.getElementById('booking-days-label');
  const totalCostLabel = document.getElementById('booking-total-cost');
  
  function calculateTotal() {
    const sDate = new Date(startDateInput.value);
    const eDate = new Date(endDateInput.value);
    
    // Validate dates
    if (isNaN(sDate.getTime()) || isNaN(eDate.getTime())) {
      daysLabel.textContent = "Invalid Dates";
      totalCostLabel.textContent = "$0";
      return;
    }
    
    if (eDate <= sDate) {
      daysLabel.textContent = "Duration: 0 days";
      totalCostLabel.textContent = "$0";
      return;
    }
    
    const timeDiff = eDate.getTime() - sDate.getTime();
    const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    daysLabel.textContent = `Duration: ${dayCount} days`;
    totalCostLabel.textContent = `$${(dayCount * selectedCar.price).toLocaleString()}`;
  }
  
  startDateInput.addEventListener('change', () => {
    // End date cannot be before start date
    endDateInput.min = startDateInput.value;
    if (new Date(endDateInput.value) <= new Date(startDateInput.value)) {
      const nextDay = new Date(startDateInput.value);
      nextDay.setDate(nextDay.getDate() + 1);
      endDateInput.value = formatDateISO(nextDay);
    }
    calculateTotal();
  });
  
  endDateInput.addEventListener('change', calculateTotal);
  
  // Handle adding to cart
  document.getElementById('modal-booking-form').addEventListener('submit', () => {
    const sDate = startDateInput.value;
    const eDate = endDateInput.value;
    const sDateObj = new Date(sDate);
    const eDateObj = new Date(eDate);
    
    if (eDateObj <= sDateObj) {
      alert("Return date must be later than the pickup date.");
      return;
    }
    
    const timeDiff = eDateObj.getTime() - sDateObj.getTime();
    const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    const newBookingItem = {
      id: Date.now(),
      carId: selectedCar.id,
      carName: `${selectedCar.brand} ${selectedCar.model}`,
      carImage: selectedCar.image,
      startDate: formatDatePretty(sDateObj),
      endDate: formatDatePretty(eDateObj),
      days: dayCount,
      totalPrice: dayCount * selectedCar.price,
      dailyRate: selectedCar.price
    };
    
    bookingsCart.push(newBookingItem);
    localStorage.setItem('luxedrive_cart', JSON.stringify(bookingsCart));
    updateCartUI();
    closeDetailsModal();
    openCartDrawer();
  });
};

function closeDetailsModal() {
  detailsModal.classList.remove('active');
  if (!cartDrawer.classList.contains('active') && !checkoutModal.classList.contains('active')) {
    drawerBackdrop.classList.remove('active');
  }
}

detailsClose.addEventListener('click', closeDetailsModal);

// Helper Date formatters
function formatDateISO(date) {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  if (mm < 10) mm = '0' + mm;
  if (dd < 10) dd = '0' + dd;
  return `${yyyy}-${mm}-${dd}`;
}

function formatDatePretty(date) {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// ==========================================================================
// 9. Checkout & Custom Multi-method Payment Wizard
// ==========================================================================
function openCheckoutModal() {
  if (bookingsCart.length === 0) {
    alert("Your booking cart is empty. Please select a car and date to rent.");
    return;
  }
  
  closeCartDrawer();
  
  // Render checkout summary on right pane
  checkoutItemsList.innerHTML = '';
  let subtotal = 0;
  
  bookingsCart.forEach(item => {
    subtotal += item.totalPrice;
    const itemRow = `
      <div class="order-item-row">
        <div>
          <span style="font-weight:600; display:block;">${item.carName}</span>
          <span style="font-size:0.75rem; color:var(--text-muted);">${item.days} days x $${item.dailyRate}</span>
        </div>
        <span>$${item.totalPrice}</span>
      </div>
    `;
    checkoutItemsList.insertAdjacentHTML('beforeend', itemRow);
  });
  
  const tax = Math.round(subtotal * 0.08); // 8% VAT
  const fee = 50; // Cleaning/Security processing flat fee
  const grandTotal = subtotal + tax + fee;
  
  const totalsSummaryHTML = `
    <div class="order-item-row" style="margin-top:20px; border-top:1px solid rgba(255,255,255,0.06); padding-top:10px;">
      <span>Subtotal:</span>
      <span>$${subtotal.toLocaleString()}</span>
    </div>
    <div class="order-item-row">
      <span>VAT / Tax (8%):</span>
      <span>$${tax.toLocaleString()}</span>
    </div>
    <div class="order-item-row">
      <span>Rental Protection Fee:</span>
      <span>$${fee.toLocaleString()}</span>
    </div>
    <div class="order-item-row total">
      <span>Total Amount:</span>
      <span class="order-total-price" id="checkout-total-val">$${grandTotal.toLocaleString()}</span>
    </div>
  `;
  checkoutItemsList.insertAdjacentHTML('beforeend', totalsSummaryHTML);
  
  // Reset payment UI views
  checkoutLeftPane.style.display = 'flex';
  checkoutRightPane.style.display = 'flex';
  successPane.style.display = 'none';
  processingOverlay.style.display = 'none';
  
  // Set values to fields
  document.getElementById('checkout-name').value = '';
  document.getElementById('checkout-email').value = '';
  document.getElementById('checkout-phone').value = '';
  document.getElementById('card-name').value = '';
  document.getElementById('card-number').value = '';
  document.getElementById('card-expiry').value = '';
  document.getElementById('card-cvc').value = '';
  
  // Reset Credit Card validation visual icon
  const cardIcon = document.getElementById('card-icon');
  cardIcon.className = "fa-solid fa-credit-card card-type-icon";
  
  checkoutModal.classList.add('active');
  drawerBackdrop.classList.add('active');
}

function closeCheckoutModal() {
  checkoutModal.classList.remove('active');
  drawerBackdrop.classList.remove('active');
}

checkoutTriggerBtn.addEventListener('click', openCheckoutModal);
checkoutClose.addEventListener('click', closeCheckoutModal);

// Payment method tab switching
const paymentTabs = document.querySelectorAll('.payment-tab');
const paymentPanels = document.querySelectorAll('.payment-method-panel');
let currentPaymentMethod = 'card';

paymentTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    paymentTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    currentPaymentMethod = tab.getAttribute('data-method');
    
    paymentPanels.forEach(p => p.classList.remove('active'));
    document.getElementById(`panel-${currentPaymentMethod}`).classList.add('active');
  });
});

// Card number auto-spacing & type detector
const cardNumberInput = document.getElementById('card-number');
cardNumberInput.addEventListener('input', (e) => {
  let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  let formatted = '';
  for (let i = 0; i < val.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formatted += ' ';
    }
    formatted += val[i];
  }
  e.target.value = formatted;
  
  // Detect card type
  const cardIcon = document.getElementById('card-icon');
  if (val.startsWith('4')) {
    cardIcon.className = "fa-brands fa-cc-visa card-type-icon visa";
  } else if (val.startsWith('5')) {
    cardIcon.className = "fa-brands fa-cc-mastercard card-type-icon mastercard";
  } else if (val.startsWith('3')) {
    cardIcon.className = "fa-brands fa-cc-amex card-type-icon";
  } else {
    cardIcon.className = "fa-solid fa-credit-card card-type-icon";
  }
});

// Expiry date auto-slash formatter (MM/YY)
const cardExpiryInput = document.getElementById('card-expiry');
cardExpiryInput.addEventListener('input', (e) => {
  let val = e.target.value.replace(/\//g, '').replace(/[^0-9]/gi, '');
  if (val.length >= 2) {
    e.target.value = val.slice(0, 2) + '/' + val.slice(2, 4);
  } else {
    e.target.value = val;
  }
});

// CVC numerical validation only
document.getElementById('card-cvc').addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/gi, '');
});

// Crypto address copy tool
document.getElementById('crypto-copy-btn').addEventListener('click', () => {
  const addressField = document.getElementById('crypto-address');
  addressField.select();
  addressField.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(addressField.value);
  
  const copyBtn = document.getElementById('crypto-copy-btn');
  copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  setTimeout(() => {
    copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
  }, 2000);
});

// Complete payment action
completePaymentBtn.addEventListener('click', () => {
  // Validate fields manually
  const name = document.getElementById('checkout-name').value.trim();
  const email = document.getElementById('checkout-email').value.trim();
  const phone = document.getElementById('checkout-phone').value.trim();
  
  if (!name || !email || !phone) {
    alert("Please fill in all Billing Details first.");
    return;
  }
  
  if (currentPaymentMethod === 'card') {
    const cardholder = document.getElementById('card-name').value.trim();
    const cardnum = document.getElementById('card-number').value.replace(/\s+/g, '');
    const cardexp = document.getElementById('card-expiry').value;
    const cardcvc = document.getElementById('card-cvc').value;
    
    if (!cardholder || cardnum.length < 16 || cardexp.length < 5 || cardcvc.length < 3) {
      alert("Please fill in correct Credit Card credentials.");
      return;
    }
  }
  
  // If valid, start secure processing overlay simulation
  processingOverlay.style.display = 'flex';
  
  const statusSteps = [
    { text: "Securing connection gateway...", delay: 800 },
    { text: "Authorizing credentials with financial networks...", delay: 1800 },
    { text: "Reserving exclusive dates in fleet registry...", delay: 2800 },
    { text: "Finalizing booking confirmations...", delay: 3800 }
  ];
  
  statusSteps.forEach(step => {
    setTimeout(() => {
      processingStatusText.textContent = step.text;
    }, step.delay);
  });
  
  // Successful checkout transition after 4.2 seconds
  setTimeout(() => {
    // Generate simulated invoice
    const reference = 'ALX-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    const datePaid = formatDatePretty(new Date());
    
    let subtotal = 0;
    let detailsListHTML = '';
    
    bookingsCart.forEach(item => {
      subtotal += item.totalPrice;
      detailsListHTML += `<div style="font-size:0.8rem; margin-bottom:4px; color:var(--text-secondary);"><i class="fa-solid fa-car"></i> ${item.carName} (${item.days} Days)</div>`;
    });
    
    const tax = Math.round(subtotal * 0.08);
    const fee = 50;
    const grandTotal = subtotal + tax + fee;
    
    successReceiptBox.innerHTML = `
      <div class="receipt-row">
        <span class="receipt-label">Invoice Code</span>
        <span class="receipt-value">${reference}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Reserved Cars</span>
        <span class="receipt-value" style="text-align: right;">${detailsListHTML}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Renter Name</span>
        <span class="receipt-value">${name}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Transact Date</span>
        <span class="receipt-value">${datePaid}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Payment Method</span>
        <span class="receipt-value" style="text-transform: capitalize;">${currentPaymentMethod}</span>
      </div>
      <div class="receipt-row" style="border-top:1px dashed rgba(255,255,255,0.1); padding-top:10px; margin-top:5px;">
        <span class="receipt-label">Grand Total Paid</span>
        <span class="receipt-value highlight" style="font-size: 1.15rem;">$${grandTotal.toLocaleString()}</span>
      </div>
    `;
    
    // Hide panels and display Success pane
    checkoutLeftPane.style.display = 'none';
    checkoutRightPane.style.display = 'none';
    processingOverlay.style.display = 'none';
    successPane.style.display = 'flex';
  }, 4400);
});

// Click Return to Home button in Success Screen
successDoneBtn.addEventListener('click', () => {
  // Clear cart state
  bookingsCart = [];
  localStorage.setItem('luxedrive_cart', JSON.stringify(bookingsCart));
  updateCartUI();
  closeCheckoutModal();
});

// Click Print receipt button in success screen
receiptPrintBtn.addEventListener('click', () => {
  window.print();
});

// Book Test Drive action from Hero
document.getElementById('hero-test-drive').addEventListener('click', (e) => {
  e.preventDefault();
  // Open Ferrari (ID 1) details modal automatically
  openDetailsModal(1);
});

// ==========================================================================
// 10. Slider Interactivity (Testimonials, Gallery, Blog)
// ==========================================================================

// A. Testimonial carousel dots
const testimonialContainer = document.getElementById('testimonial-container');
const testimonialCards = testimonialContainer.querySelectorAll('.testimonial-card');
const testimonialDots = document.querySelectorAll('#testimonial-dots .slider-dot');

function showTestimonial(index) {
  testimonialCards.forEach(card => card.classList.remove('active'));
  testimonialDots.forEach(dot => dot.classList.remove('active'));
  
  testimonialCards[index].classList.add('active');
  testimonialDots[index].classList.add('active');
  currentTestimonialIndex = index;
}

testimonialDots.forEach(dot => {
  dot.addEventListener('click', () => {
    const idx = parseInt(dot.getAttribute('data-index'));
    showTestimonial(idx);
  });
});

// Auto-rotate testimonials every 6 seconds
setInterval(() => {
  let nextIdx = (currentTestimonialIndex + 1) % testimonialCards.length;
  showTestimonial(nextIdx);
}, 6000);

// B. Gallery shifting logic
const galleryLeftBtn = document.getElementById('gallery-left');
const galleryRightBtn = document.getElementById('gallery-right');
const gallerySlider = document.querySelector('.gallery-slider');

galleryRightBtn.addEventListener('click', () => {
  gallerySlider.scrollBy({ left: 300, behavior: 'smooth' });
});

galleryLeftBtn.addEventListener('click', () => {
  gallerySlider.scrollBy({ left: -300, behavior: 'smooth' });
});

// C. Blog sliding logic
const blogLeftBtn = document.getElementById('blog-left');
const blogRightBtn = document.getElementById('blog-right');
const blogGrid = document.querySelector('.blog-grid');

blogRightBtn.addEventListener('click', () => {
  blogGrid.scrollBy({ left: 260, behavior: 'smooth' });
});

blogLeftBtn.addEventListener('click', () => {
  blogGrid.scrollBy({ left: -260, behavior: 'smooth' });
});

// D. Featured Cars section arrows
const carsLeftBtn = document.getElementById('cars-slide-left');
const carsRightBtn = document.getElementById('cars-slide-right');

carsRightBtn.addEventListener('click', () => {
  carsGrid.scrollBy({ left: 300, behavior: 'smooth' });
});

carsLeftBtn.addEventListener('click', () => {
  carsGrid.scrollBy({ left: -300, behavior: 'smooth' });
});

// Newsletter Validation & Glow feedback
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', () => {
  const emailInput = document.getElementById('newsletter-email');
  if (emailInput.checkValidity()) {
    const panel = document.querySelector('.newsletter-panel');
    panel.classList.add('active');
    
    alert(`Thank you! ${emailInput.value} has been successfully subscribed to LuxeDrive exclusive updates.`);
    
    emailInput.value = '';
    setTimeout(() => {
      panel.classList.remove('active');
    }, 3000);
  }
});
