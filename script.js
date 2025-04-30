document.addEventListener('DOMContentLoaded', function() {
    // Menu data
    const menuItems = [
        {
            id: 1,
            name: 'Margherita Pizza',
            description: 'Classic pizza with tomato sauce, mozzarella, and basil',
            price: 12.99,
            category: 'pizza',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 2,
            name: 'Pepperoni Pizza',
            description: 'Pizza with tomato sauce, mozzarella, and pepperoni',
            price: 14.99,
            category: 'pizza',
            image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 3,
            name: 'Veggie Burger',
            description: 'Plant-based burger with lettuce, tomato, and special sauce',
            price: 9.99,
            category: 'burger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 4,
            name: 'Cheeseburger',
            description: 'Classic beef burger with cheese, lettuce, and tomato',
            price: 11.99,
            category: 'burger',
            image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 5,
            name: 'Spaghetti Carbonara',
            description: 'Pasta with eggs, cheese, pancetta, and black pepper',
            price: 13.99,
            category: 'pasta',
            image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 6,
            name: 'Caesar Salad',
            description: 'Romaine lettuce with croutons, parmesan, and Caesar dressing',
            price: 8.99,
            category: 'salad',
            image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 7,
            name: 'Greek Salad',
            description: 'Salad with tomatoes, cucumber, olives, and feta cheese',
            price: 9.99,
            category: 'salad',
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 8,
            name: 'Iced Tea',
            description: 'Refreshing iced tea with lemon',
            price: 2.99,
            category: 'drink',
            image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 9,
            name: 'Lemonade',
            description: 'Homemade lemonade with fresh lemons',
            price: 3.49,
            category: 'drink',
            image: 'https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
        }
    ];

    // DOM elements
    const menuContainer = document.getElementById('menu-items');
    const cartCount = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const closeModal = document.querySelector('.close');
    const cartLink = document.querySelector('a[href="#cart"]');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const deliveryForm = document.getElementById('delivery-form');
    const orderConfirmation = document.getElementById('order-confirmation');
    const closeConfirmation = document.getElementById('close-confirmation');
    const orderIdSpan = document.getElementById('order-id');

    // Initialize cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Display menu items
    function displayMenuItems(category = 'all') {
        menuContainer.innerHTML = '';
        
        const filteredItems = category === 'all' 
            ? menuItems 
            : menuItems.filter(item => item.category === category);
        
        filteredItems.forEach(item => {
            const menuItemElement = document.createElement('div');
            menuItemElement.classList.add('menu-item');
            menuItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="menu-item-img">
                <div class="menu-item-content">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <p class="menu-item-desc">${item.description}</p>
                    <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                    <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                </div>
            `;
            menuContainer.appendChild(menuItemElement);
        });

        // Add event listeners to add to cart buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });
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

    // Update cart display and local storage
    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        
        if (cartModal.style.display === 'block') {
            displayCartItems();
        }
    }

    // Display cart items in modal
    function displayCartItems() {
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            cartTotal.textContent = '0.00';
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
                    <div>
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    </div>
                </div>
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

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
        if (e.target === orderConfirmation) {
            orderConfirmation.style.display = 'none';
        }
    });

    // Handle form submission
    deliveryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items before placing an order.');
            return;
        }
        
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        
        // Save order to local storage
        const order = {
            id: Date.now(),
            date: new Date().toISOString(),
            items: [...cart],
            total: parseFloat(cartTotal.textContent),
            customer: { name, address, phone },
            status: 'pending'
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
        cartModal.style.display = 'none';
        orderConfirmation.style.display = 'block';
    });

    // Close confirmation modal
    closeConfirmation.addEventListener('click', () => {
        orderConfirmation.style.display = 'none';
    });

    // Initialize the page
    displayMenuItems();
    updateCart();

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