document.addEventListener('DOMContentLoaded', function() {
    // Menu data with additional items and ratings
    const menuItems = [
        {
            id: 1,
            name: 'Margherita Pizza',
            description: 'Classic pizza with tomato sauce, mozzarella, and basil',
            price: 12.99,
            category: 'pizza',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            rating: 4.5,
            prepTime: '20-25 min',
            calories: 850,
            popular: true
        },
        {
            id: 2,
            name: 'Pepperoni Pizza',
            description: 'Pizza with tomato sauce, mozzarella, and pepperoni',
            price: 14.99,
            category: 'pizza',
            image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            rating: 4.7,
            prepTime: '20-25 min',
            calories: 920,
            popular: true
        },
        {
            id: 3,
            name: 'Veggie Burger',
            description: 'Plant-based burger with lettuce, tomato, and special sauce',
            price: 9.99,
            category: 'burger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            rating: 4.2,
            prepTime: '15-20 min',
            calories: 650,
            popular: false
        },
        {
            id: 4,
            name: 'Cheeseburger',
            description: 'Classic beef burger with cheese, lettuce, and tomato',
            price: 11.99,
            category: 'burger',
            image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            rating: 4.4,
            prepTime: '15-20 min',
            calories: 780,
            popular: true
        },
        {
            id: 5,
            name: 'Spaghetti Carbonara',
            description: 'Pasta with eggs, cheese, pancetta, and black pepper',
            price: 13.99,
            category: 'pasta',
            image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            rating: 4.6,
            prepTime: '25-30 min',
            calories: 720,
            popular: false
        },
        {
            id: 6,
            name: 'Caesar Salad',
            description: 'Romaine lettuce with croutons, parmesan, and Caesar dressing',
            price: 8.99,
            category: 'salad',
            image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            rating: 4.0,
            prepTime: '10-15 min',
            calories: 350,
            popular: false
        },
        {
            id: 7,
            name: 'Greek Salad',
            description: 'Salad with tomatoes, cucumber, olives, and feta cheese',
            price: 9.99,
            category: 'salad',
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            rating: 4.3,
            prepTime: '10-15 min',
            calories: 420,
            popular: true
        },
        {
            id: 8,
            name: 'Iced Tea',
            description: 'Refreshing iced tea with lemon',
            price: 2.99,
            category: 'drink',
            image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            rating: 3.8,
            prepTime: '5 min',
            calories: 90,
            popular: false
        },
        {
            id: 9,
            name: 'Lemonade',
            description: 'Homemade lemonade with fresh lemons',
            price: 3.49,
            category: 'drink',
            image: 'https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            rating: 4.1,
            prepTime: '5 min',
            calories: 120,
            popular: true
        },
        {
            id: 10,
            name: 'Chocolate Lava Cake',
            description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
            price: 6.99,
            category: 'dessert',
            image: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            rating: 4.8,
            prepTime: '15-20 min',
            calories: 580,
            popular: true
        },
        {
            id: 11,
            name: 'Tiramisu',
            description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream',
            price: 7.49,
            category: 'dessert',
            image: 'https://images.unsplash.com/photo-1535920527002-b35e9672ebf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            rating: 4.7,
            prepTime: '10 min',
            calories: 450,
            popular: false
        },
        {
            id: 12,
            name: 'Garlic Bread',
            description: 'Toasted bread with garlic butter and herbs',
            price: 4.99,
            category: 'appetizer',
            image: 'https://images.unsplash.com/photo-1586449480558-33ae22f7e3fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            rating: 4.2,
            prepTime: '10 min',
            calories: 320,
            popular: true
        }
    ];

    // Special offers data
    const specialOffers = [
        {
            id: 1,
            title: 'Family Pizza Deal',
            description: '2 large pizzas, garlic bread, and 1.5L drink',
            originalPrice: 42.97,
            discountedPrice: 34.99,
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            validUntil: '2023-12-31'
        },
        {
            id: 2,
            title: 'Weekend Special',
            description: 'Burger, fries, and drink for a special price',
            originalPrice: 14.97,
            discountedPrice: 11.99,
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            validUntil: '2023-12-31'
        },
        {
            id: 3,
            title: 'Dessert Combo',
            description: 'Any 2 desserts with 20% off',
            originalPrice: 0,
            discountedPrice: 0,
            discount: '20%',
            image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            validUntil: '2023-12-31'
        }
    ];

    // DOM elements
    const menuContainer = document.getElementById('menu-items');
    const forYouContainer = document.getElementById('for-you-items');
    const cartCount = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const orderTotal = document.getElementById('order-total');
    const closeModal = document.querySelector('.close');
    const cartLink = document.querySelector('a[href="#cart"]');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const deliveryForm = document.getElementById('delivery-form');
    const orderConfirmation = document.getElementById('order-confirmation');
    const closeConfirmation = document.getElementById('close-confirmation');
    const orderIdSpan = document.getElementById('order-id');
    const deliveryTimeSpan = document.getElementById('delivery-time');
    const previousOrdersContainer = document.getElementById('previous-orders-container');
    const specialOffersContainer = document.getElementById('special-offers-container');
    const profileLink = document.querySelector('a[href="#profile"]');
    const profileModal = document.getElementById('profile-modal');
    const profileClose = profileModal.querySelector('.close');
    const logoutBtn = document.getElementById('logout-btn');
    const currentLocationSpan = document.getElementById('current-location');
    const changeLocationBtn = document.getElementById('change-location');
    const locationModal = document.getElementById('location-modal');
    const locationClose = locationModal.querySelector('.close');
    const confirmLocationBtn = document.getElementById('confirm-location');
    const deliveryAddressInput = document.getElementById('delivery-address');

    // Initialize cart, user data, and location from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let user = JSON.parse(localStorage.getItem('user')) || {
        name: 'Guest User',
        email: 'guest@example.com',
        phone: '',
        memberSince: new Date().toISOString(),
        favorites: [],
        avatar: null
    };
    let deliveryLocation = JSON.parse(localStorage.getItem('deliveryLocation')) || {
        address: 'Model Town, Jalandhar, Punjab, India',
        coordinates: [31.3260, 75.5762] // Coordinates for Jalandhar, Punjab, India
    };
    
    // Initialize maps
    let map, locationMap;

    // Display menu items
    function displayMenuItems(category = 'all') {
        menuContainer.innerHTML = '';
        
        const filteredItems = category === 'all' 
            ? menuItems 
            : menuItems.filter(item => item.category === category);
        
        filteredItems.forEach(item => {
            const isFavorite = user.favorites.includes(item.id);
            const menuItemElement = document.createElement('div');
            menuItemElement.classList.add('menu-item');
            menuItemElement.innerHTML = `
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${item.id}">
                    <i class="fas fa-heart"></i>
                </button>
                <img src="${item.image}" alt="${item.name}" class="menu-item-img">
                <div class="menu-item-content">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <div class="rating">
                        ${generateStarRating(item.rating)}
                        <span>(${item.rating})</span>
                    </div>
                    <p class="menu-item-desc">${item.description}</p>
                    <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                    <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                </div>
            `;
            menuContainer.appendChild(menuItemElement);
        });

        // Add event listeners
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });

        document.querySelectorAll('.favorite-btn').forEach(button => {
            button.addEventListener('click', toggleFavorite);
        });
    }

    // Generate star rating HTML
    function generateStarRating(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }

    // Display recommended items
    function displayRecommendedItems() {
        forYouContainer.innerHTML = '';
        
        // Simple recommendation logic (in a real app, this would be more sophisticated)
        const recommendedItems = menuItems
            .filter(item => item.popular || user.favorites.includes(item.id))
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);
        
        if (recommendedItems.length === 0) {
            recommendedItems.push(...menuItems.filter(item => item.popular).slice(0, 4));
        }
        
        recommendedItems.forEach(item => {
            const isFavorite = user.favorites.includes(item.id);
            const menuItemElement = document.createElement('div');
            menuItemElement.classList.add('menu-item');
            menuItemElement.innerHTML = `
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${item.id}">
                    <i class="fas fa-heart"></i>
                </button>
                <img src="${item.image}" alt="${item.name}" class="menu-item-img">
                <div class="menu-item-content">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <div class="rating">
                        ${generateStarRating(item.rating)}
                        <span>(${item.rating})</span>
                    </div>
                    <p class="menu-item-desc">${item.description}</p>
                    <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                    <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                </div>
            `;
            forYouContainer.appendChild(menuItemElement);
        });

        // Add event listeners
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });

        document.querySelectorAll('.favorite-btn').forEach(button => {
            button.addEventListener('click', toggleFavorite);
        });
    }

    // Display special offers
    function displaySpecialOffers() {
        specialOffersContainer.innerHTML = '';
        
        specialOffers.forEach(offer => {
            const offerElement = document.createElement('div');
            offerElement.classList.add('offer-card');
            offerElement.innerHTML = `
                <div class="offer-badge">Special Offer</div>
                <img src="${offer.image}" alt="${offer.title}" class="offer-image">
                <div class="offer-content">
                    <h3 class="offer-title">${offer.title}</h3>
                    <p class="offer-description">${offer.description}</p>
                    <div class="offer-price">
                        ${offer.originalPrice > 0 ? `
                            <span class="original">$${offer.originalPrice.toFixed(2)}</span>
                            <span class="discounted">$${offer.discountedPrice.toFixed(2)}</span>
                        ` : `
                            <span class="discounted">${offer.discount} Off</span>
                        `}
                    </div>
                    <button class="btn" style="width: 100%; margin-top: 10px;" data-offer-id="${offer.id}">Add to Cart</button>
                </div>
            `;
            specialOffersContainer.appendChild(offerElement);
        });

        // Add event listeners to offer buttons
        document.querySelectorAll('[data-offer-id]').forEach(button => {
            button.addEventListener('click', addOfferToCart);
        });
    }

    // Add special offer to cart
    function addOfferToCart(e) {
        const offerId = parseInt(e.target.getAttribute('data-offer-id'));
        const offer = specialOffers.find(o => o.id === offerId);
        
        if (offerId === 1) {
            // Family Pizza Deal
            const margherita = menuItems.find(item => item.id === 1);
            const pepperoni = menuItems.find(item => item.id === 2);
            const garlicBread = menuItems.find(item => item.id === 12);
            const lemonade = menuItems.find(item => item.id === 9);
            
            addOfferItemToCart(margherita, 2);
            addOfferItemToCart(pepperoni, 1);
            addOfferItemToCart(garlicBread, 1);
            addOfferItemToCart(lemonade, 1);
            
            showNotification('Family Pizza Deal added to cart!');
        } else if (offerId === 2) {
            // Weekend Special
            const cheeseburger = menuItems.find(item => item.id === 4);
            const fries = menuItems.find(item => item.id === 12); // Using garlic bread as fries for demo
            const icedTea = menuItems.find(item => item.id === 8);
            
            addOfferItemToCart(cheeseburger, 1);
            addOfferItemToCart(fries, 1);
            addOfferItemToCart(icedTea, 1);
            
            showNotification('Weekend Special added to cart!');
        } else if (offerId === 3) {
            // Dessert Combo
            showNotification('Add any 2 desserts to your cart to get 20% off!');
        }
    }

    // Helper function to add offer items to cart
    function addOfferItemToCart(item, quantity) {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                ...item,
                quantity: quantity
            });
        }
        
        updateCart();
    }

    // Display previous orders
    function displayPreviousOrders() {
        previousOrdersContainer.innerHTML = '';
        
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        
        if (orders.length === 0) {
            previousOrdersContainer.innerHTML = '<p>You have no previous orders.</p>';
            return;
        }
        
        // Sort orders by date (newest first)
        orders.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        orders.forEach(order => {
            const orderElement = document.createElement('div');
            orderElement.classList.add('order-card');
            
            let itemsHtml = '';
            order.items.forEach(item => {
                itemsHtml += `
                    <div class="order-item">
                        <div class="order-item-name">${item.name}</div>
                        <div class="order-item-quantity">x${item.quantity}</div>
                        <div class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                `;
            });
            
            const orderDate = new Date(order.date);
            const statusClass = `status-${order.status.toLowerCase()}`;
            
            orderElement.innerHTML = `
                <div class="order-header">
                    <div>
                        <span class="order-id">Order #${order.id}</span>
                        <div class="order-date">${orderDate.toLocaleDateString()} at ${orderDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                    </div>
                    <div class="order-status ${statusClass}">${order.status}</div>
                </div>
                <div class="order-items">
                    ${itemsHtml}
                </div>
                <div class="order-total">
                    <span>Total</span>
                    <span>$${order.total.toFixed(2)}</span>
                </div>
                <button class="reorder-btn" data-order-id="${order.id}">Reorder</button>
            `;
            
            previousOrdersContainer.appendChild(orderElement);
        });

        // Add event listeners to reorder buttons
        document.querySelectorAll('.reorder-btn').forEach(button => {
            button.addEventListener('click', reorderItems);
        });
    }

    // Reorder items from a previous order
    function reorderItems(e) {
        const orderId = parseInt(e.target.getAttribute('data-order-id'));
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const order = orders.find(o => o.id === orderId);
        
        if (order) {
            order.items.forEach(item => {
                const existingItem = cart.find(cartItem => cartItem.id === item.id);
                
                if (existingItem) {
                    existingItem.quantity += item.quantity;
                } else {
                    // Find the full menu item to get all properties
                    const menuItem = menuItems.find(menuItem => menuItem.id === item.id);
                    if (menuItem) {
                        cart.push({
                            ...menuItem,
                            quantity: item.quantity
                        });
                    }
                }
            });
            
            updateCart();
            showNotification('Items from your previous order have been added to your cart!');
            cartModal.style.display = 'block';
            displayCartItems();
        }
    }

    // Add item to cart
    function addToCart(e) {
        const itemId = parseInt(e.target.getAttribute('data-id'));
        const item = menuItems.find(item => item.id === itemId);
        
        const existingItem = cart.find(cartItem => cartItem.id === itemId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...item,
                quantity: 1
            });
        }
        
        updateCart();
        showNotification(`${item.name} added to cart!`);
    }

    // Toggle favorite item
    function toggleFavorite(e) {
        const itemId = parseInt(e.currentTarget.getAttribute('data-id'));
        const index = user.favorites.indexOf(itemId);
        
        if (index === -1) {
            user.favorites.push(itemId);
            e.currentTarget.classList.add('active');
            showNotification('Added to favorites!');
        } else {
            user.favorites.splice(index, 1);
            e.currentTarget.classList.remove('active');
            showNotification('Removed from favorites');
        }
        
        localStorage.setItem('user', JSON.stringify(user));
        updateProfileStats();
        displayFavorites();
    }

    // Update cart display and local storage
    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        
        if (cartModal.style.display === 'block') {
            displayCartItems();
        }
        
        // Update order total in form button
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        orderTotal.textContent = total.toFixed(2);
    }

    // Display cart items in modal
    function displayCartItems() {
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            cartTotal.textContent = '0.00';
            orderTotal.textContent = '0.00';
            return;
        }
        
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <div class="cart-item-info">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-desc">${item.description}</div>
                    </div>
                </div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}">&times;</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
        
        cartTotal.textContent = total.toFixed(2);
        orderTotal.textContent = total.toFixed(2);
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.minus').forEach(button => {
            button.addEventListener('click', decreaseQuantity);
        });
        
        document.querySelectorAll('.plus').forEach(button => {
            button.addEventListener('click', increaseQuantity);
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }

    // Decrease item quantity
    function decreaseQuantity(e) {
        const itemId = parseInt(e.target.getAttribute('data-id'));
        const item = cart.find(item => item.id === itemId);
        
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart = cart.filter(item => item.id !== itemId);
        }
        
        updateCart();
    }

    // Increase item quantity
    function increaseQuantity(e) {
        const itemId = parseInt(e.target.getAttribute('data-id'));
        const item = cart.find(item => item.id === itemId);
        item.quantity += 1;
        updateCart();
    }

    // Remove item from cart
    function removeItem(e) {
        const itemId = parseInt(e.target.getAttribute('data-id'));
        cart = cart.filter(item => item.id !== itemId);
        updateCart();
    }

    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Filter menu items
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            displayMenuItems(category);
        });
    });

    // Open cart modal
    cartLink.addEventListener('click', (e) => {
        e.preventDefault();
        cartModal.style.display = 'block';
        displayCartItems();
    });

    // Close cart modal
    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    // Open profile modal
    profileLink.addEventListener('click', (e) => {
        e.preventDefault();
        profileModal.style.display = 'block';
        updateProfileStats();
        displayFavorites();
    });

    // Close profile modal
    profileClose.addEventListener('click', () => {
        profileModal.style.display = 'none';
    });

    // Logout
    logoutBtn.addEventListener('click', () => {
        user = {
            name: 'Guest User',
            email: 'guest@example.com',
            phone: '',
            memberSince: new Date().toISOString(),
            favorites: [],
            avatar: null
        };
        localStorage.setItem('user', JSON.stringify(user));
        profileModal.style.display = 'none';
        updateProfileStats();
        displayFavorites();
        displayRecommendedItems();
        showNotification('You have been signed out.');
    });

    // Update profile stats
    function updateProfileStats() {
        document.getElementById('profile-name').textContent = user.name;
        document.getElementById('profile-email').textContent = user.email;
        document.getElementById('profile-phone').textContent = user.phone || 'Not provided';
        
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const userOrders = orders.filter(order => order.customer && order.customer.name === user.name);
        document.getElementById('total-orders').textContent = userOrders.length;
        
        document.getElementById('favorite-items').textContent = user.favorites.length;
        
        const memberSince = new Date(user.memberSince);
        document.getElementById('member-since').textContent = memberSince.toLocaleDateString();
    }

    // Display favorite items
    function displayFavorites() {
        const favoritesContainer = document.getElementById('favorites-container');
        favoritesContainer.innerHTML = '';
        
        if (user.favorites.length === 0) {
            favoritesContainer.innerHTML = '<p>You have no favorite items yet.</p>';
            return;
        }
        
        user.favorites.forEach(itemId => {
            const item = menuItems.find(item => item.id === itemId);
            if (item) {
                const favoriteElement = document.createElement('div');
                favoriteElement.classList.add('favorite-item');
                favoriteElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="favorite-item-name">${item.name}</div>
                `;
                favoritesContainer.appendChild(favoriteElement);
            }
        });
    }

    // Initialize location
    function initLocation() {
        currentLocationSpan.textContent = deliveryLocation.address;
        
        // Initialize map with Punjab coordinates
        if (!map) {
            map = L.map('map').setView([31.6340, 74.8723], 12); // Zoom level 12 for city view
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            L.marker([31.6340, 74.8723]).addTo(map)
                .bindPopup('Our Restaurant Location')
                .openPopup();
            
            // Draw delivery radius (5 miles ≈ 8km)
            L.circle([31.6340, 74.8723], {
                color: '#ff6b6b',
                fillColor: '#ff6b6b',
                fillOpacity: 0.2,
                radius: 8046.72 // 5 miles in meters
            }).addTo(map);
        }
    }

    // Change location
    changeLocationBtn.addEventListener('click', (e) => {
        e.preventDefault();
        locationModal.style.display = 'block';
        
        // Initialize location map if not already done
        if (!locationMap) {
            locationMap = L.map('location-map').setView(deliveryLocation.coordinates, 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(locationMap);
            
            const marker = L.marker(deliveryLocation.coordinates, {
                draggable: true
            }).addTo(locationMap);
            
            marker.on('dragend', function() {
                const newPos = marker.getLatLng();
                updateAddressFromCoordinates(newPos.lat, newPos.lng);
            });
            
            // Set initial address
            deliveryAddressInput.value = deliveryLocation.address;
        }
    });

    // Close location modal
    locationClose.addEventListener('click', () => {
        locationModal.style.display = 'none';
    });

    // Confirm new location
    confirmLocationBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const newAddress = deliveryAddressInput.value.trim();
        
        if (newAddress) {
            // In a real app, you would geocode this address to get coordinates
            // For demo, we'll just use the current coordinates
            deliveryLocation.address = newAddress;
            localStorage.setItem('deliveryLocation', JSON.stringify(deliveryLocation));
            currentLocationSpan.textContent = newAddress;
            locationModal.style.display = 'none';
            showNotification('Delivery location updated!');
        }
    });

    // Helper function to update address from coordinates (mock for demo)
    function updateAddressFromCoordinates(lat, lng) {
        // In a real app, you would use a geocoding service here
        deliveryAddressInput.value = `${Math.round(lat*100)/100}, ${Math.round(lng*100)/100}`;
    }

    // Handle form submission
    deliveryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items before placing an order.');
            return;
        }
        // Show success alert
        alert("Your order has been placed successfully!");

        //Clear the cart
        cart = []; // empty the cart array

        //Update UI
        updateCart();        // refresh cart totals
        displayCartItems();    // show "Your cart is empty."

        // ✅ Step 4: Optionally hide modal
        cartModal.style.display = 'none'; // close the cart popup
        
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const instructions = document.getElementById('instructions').value;
        
        // Update user info if changed
        if (name && name !== user.name) {
            user.name = name;
            if (phone) user.phone = phone;
            localStorage.setItem('user', JSON.stringify(user));
            updateProfileStats();
        }
        
        // Save order to local storage
        const order = {
            id: Date.now(),
            date: new Date().toISOString(),
            items: [...cart],
            total: parseFloat(cartTotal.textContent),
            customer: { name, address, phone, instructions },
            status: 'pending',
            location: deliveryLocation
        };
        
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        
        // Clear cart
        cart = [];
        updateCart();
        deliveryForm.reset();
        
        // Show confirmation
        orderIdSpan.textContent = order.id;
        
        // Calculate estimated delivery time (30-45 minutes from now)
        const now = new Date();
        const deliveryTime = new Date(now.getTime() + (30 + Math.random() * 15) * 60000);
        deliveryTimeSpan.textContent = deliveryTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        cartModal.style.display = 'none';
        orderConfirmation.style.display = 'block';
        
        // Update previous orders display
        displayPreviousOrders();
    });

    // Close confirmation modal
    closeConfirmation.addEventListener('click', () => {
        orderConfirmation.style.display = 'none';
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
        if (e.target === profileModal) {
            profileModal.style.display = 'none';
        }
        if (e.target === locationModal) {
            locationModal.style.display = 'none';
        }
        if (e.target === orderConfirmation) {
            orderConfirmation.style.display = 'none';
        }
    });

    // Initialize the page
    displayMenuItems();
    displayRecommendedItems();
    displaySpecialOffers();
    displayPreviousOrders();
    updateCart();
    initLocation();
    updateProfileStats();

    // Add notification styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #4CAF50;
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            opacity: 0;
            transition: opacity 0.3s;
            z-index: 1000;
        }
        .notification.show {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});