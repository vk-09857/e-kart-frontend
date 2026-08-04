# E-Kart Frontend

A modern React-based frontend for the E-Kart e-commerce platform, providing a responsive and user-friendly shopping experience with real-time order tracking and secure payment integration.

## Live Demo

Frontend: https://e-kart-frontend.pages.dev

---

## Features

### Authentication

* User Registration & Login
* Forgot Password & Reset Password Workflow
* Protected Routes
* JWT Authentication with Auto-Token Refresh

### Products & Catalog

* Product Listing & Product Details Page
* Category Filtering & Search Functionality
* Price Sorting & Filters
* Pagination & Loading Skeletons

### Shopping Cart

* Slide-Over Global Cart Drawer
* Zustand Global State Management
* Add / Remove Cart Items
* Quantity Management & Dynamic Total Calculation

### Wishlist

* Save Favorite Products
* Interactive Confirmation Modal for Removals
* Quick Transfer to Cart

### Address Management

* Saved Address List
* Add & Manage Delivery Addresses
* Checkout Address Selection

### Orders & Tracking

* Order Placement (Razorpay Online & Cash on Delivery)
* Order History
* Interactive Order Tracking Timeline

### UI & UX Features

* Responsive Mobile-First Design
* Toast Notifications
* Modern Iconography
* Cloudinary Image CDN Integration

---

## Tech Stack

* React 19
* Vite
* React Router DOM
* TanStack React Query
* Zustand
* Axios
* Styled Components & Emotion
* Bootstrap 5
* React Hook Form & Zod
* Lucide React
* Sonner
* Razorpay Web SDK

---

## Installation

```bash
git clone <frontend-repository-url>

cd frontend

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file in the frontend root directory:

```env
VITE_API_URL=https://e-kart-backend-qyf8.onrender.com
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

---

## Folder Structure

```text
src/
├── app/
│   ├── pages/
│   ├── App.jsx
│   ├── AppRouter.jsx
│   ├── GlobalStyles.styles.js
│   └── Providers.jsx
├── assets/
├── constants/
├── lib/
│   ├── apiClient.js
│   └── reactQuery.js
├── modules/
│   ├── address/
│   ├── auth/
│   ├── cart/
│   ├── orders/
│   ├── payment/
│   ├── products/
│   └── wishlist/
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── styles/
│   └── utils/
└── main.jsx
```

---

## Project Architecture

The project follows a domain-driven modular architecture:
* **Modules (`src/modules/`)**: Features organized by domain (auth, products, cart, wishlist, orders, address, payment).
* **Shared (`src/shared/`)**: Global UI components (Header, Footer, CartDrawer, Modal, Loader) and utilities.
* **API & State Management (`src/lib/`)**: Custom Axios client with interceptors, TanStack React Query for server state, and Zustand for cart state.
