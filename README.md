# FoodExpress – Modern Food Ordering Website

## 🍕 Project Overview
FoodExpress is a modern, responsive web application for online food ordering, designed for Indian restaurants and users. It features a beautiful UI, advanced filtering, accessibility, and robust cart/checkout flows. The project is built for both desktop and mobile, with a focus on user experience, security, and scalability.

---

## 🚀 Features
- **Modern UI/UX:** Responsive design, dark/light mode, customizable themes, animated transitions, and skeleton loaders.
- **Menu & Offers:** Dynamic menu with INR pricing, high-quality images, 3D flip cards, and special offers.
- **Search & Filters:** Advanced search, autocomplete, recent searches, and filters by price, dietary, and prep time.
- **Cart & Checkout:** Add/remove items, quantity controls, real-time INR totals, and delivery form with validation.
- **Accessibility:** Keyboard navigation, ARIA labels, color contrast, and focus styles for all controls.
- **Security:** XSS prevention, safe DOM updates, and localStorage data protection.
- **Performance:** Skeleton loading, lazy image loading, and optimized DOM updates.
- **Localization:** All prices in Indian Rupees (₹), with realistic menu pricing.

---

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Icons:** Font Awesome
- **Maps:** Leaflet.js
- **Build/Deploy:** Docker, Nginx, Jenkins (CI/CD)

---

## ⚡ Getting Started
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd foodordderwebsite
   ```
2. **Install dependencies:**
   (No build step required for vanilla JS/CSS. For Docker:)
   ```bash
   docker-compose up --build
   ```
3. **Open in browser:**
   - Visit `http://localhost:8080` (or your configured port)

---

## ♿ Accessibility & Security
- All interactive elements are keyboard accessible.
- ARIA roles and labels for navigation, modals, and custom controls.
- High color contrast and focus outlines for better usability.
- All user-generated and dynamic content is sanitized to prevent XSS.

---

## 📝 Changelog & Checkpoints
This project was developed iteratively, with each checkpoint representing a major improvement. Below is a summary of key changes and pull requests:

### **Checkpoint 1: Project Initialization & Basic Structure**
- Set up project directory, HTML, CSS, and JS files.
- Added Docker, Nginx, and Jenkins configuration for deployment and CI/CD.

### **Checkpoint 2: Responsive Layout & Navigation**
- Implemented responsive header, navigation bar, and hero section.
- Added smooth scrolling and active state for navigation links.

### **Checkpoint 3: Menu System & INR Localization**
- Created menu section with realistic Indian dishes and INR prices.
- Used `Intl.NumberFormat` for consistent currency formatting.

### **Checkpoint 4: Cart, Profile, and Modal System**
- Built cart modal with add/remove item logic.
- Added profile modal with user stats, favorites, and sign-out.
- Implemented modal accessibility and keyboard navigation.

### **Checkpoint 5: Advanced UI Features**
- Added dark/light mode toggle and customizable color themes.
- Implemented animated transitions, skeleton loaders, and pull-to-refresh.
- 3D flip card effect for menu items.

### **Checkpoint 6: Search, Filters & Offers**
- Search bar with autocomplete and recent searches.
- Advanced filters (price, dietary, prep time, sort).
- Special offers section with dynamic pricing and images.

### **Checkpoint 7: Cart & Checkout Improvements**
- Quantity controls (+/-) and remove button for cart items.
- Real-time INR total calculation and formatting.
- Delivery form with real-time validation and error messages.
- Fixed bug: Cart controls now fully functional.

### **Checkpoint 8: Accessibility & Security**
- ARIA roles/labels, keyboard navigation, and color contrast improvements.
- Refactored all dynamic content rendering to use safe DOM APIs (no XSS).
- LocalStorage data protection and error handling.

### **Checkpoint 9: Price Sync & Data Consistency**
- Cart item prices now sync with the latest menu data on page load and before checkout.
- Prevents outdated pricing and ensures consistency for users and admins.

### **Checkpoint 10: Bug Fixes & Polish**
- Fixed INR sign duplication and total calculation bugs in cart.
- Improved error handling for image loading and cart operations.
- General code cleanup and documentation.

---

## 📦 Deployment & CI/CD
- **Docker:** Use the provided `Dockerfile` and `docker-compose.yml` for containerized deployment.
- **Nginx:** Serves static files and handles routing.
- **Jenkins:** Example `Jenkinsfile` for automated build and deploy.

---

## 🤝 Contributing
Pull requests are welcome! Please:
- Fork the repo and create a feature branch.
- Follow the code style and accessibility guidelines.
- Document your changes and update the changelog.
- Submit a clear, descriptive PR.

---

## 📄 License
MIT License

---

## 🙏 Acknowledgements
- [Font Awesome](https://fontawesome.com/)
- [Leaflet.js](https://leafletjs.com/)
- [Unsplash](https://unsplash.com/) for demo images

---

**Enjoy using FoodExpress! If you have feedback or find bugs, please open an issue or PR.** 