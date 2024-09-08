# CampNook

CampNook is an e-commerce website dedicated to providing all the necessary and fun items for camping enthusiasts. This platform offers a wide range of products, allowing users to explore categories, view product details, and manage their shopping carts. The project is built with a modern tech stack, including React and Redux for the frontend, and Node.js with Express for backend CRUD operations.

## Features

### Core Pages

- **Homepage**: Includes a hero section, best-selling products, categories, featured products, and more.
- **Products Page**: Displays all products with search, filtering, and sorting options.
- **Product Details Page**: Shows detailed information about a product with an option to add it to the cart.
- **Product Management**: Allows product creation, editing, and deletion (admin only).
- **Cart Page**: Displays products added to the cart with the ability to update quantities and proceed to checkout.
- **Checkout Page**: Collects user information and provides payment options (Cash on Delivery, Stripe).
- **About Us Page**: Describes the business with contact information, mission, and team members.

### Functionalities

- Search, filter, and sort products.
- Add products to the cart, with automatic quantity adjustments based on stock.
- Checkout with Cash on Delivery or Stripe (optional).
- Responsive design for desktop, tablet, and mobile devices.
- Redux for state management across the site.
- Product management with full CRUD capabilities.
- Image gallery with magnifier effects.

## Technologies Used

### Frontend

- **React**: For building the user interface.
- **Redux**: For state management.
- **RTK Query** (optional): For fetching featured products dynamically.
- **Tailwind CSS**: For styling.
- **shadcn**: UI components.

### Backend

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Fast and minimalist web framework for Node.js.
- **MongoDB** (or any preferred database): For storing product information and order details.

### Optional Features

- **Stripe Integration**: For handling payments.
- **Random Featured Products**: Rotating product display using RTK Query.

## Installation

To get the project running locally, follow these steps:

### Prerequisites

- Node.js and npm installed.
- MongoDB running (if using MongoDB).
- Stripe account (optional, if implementing Stripe payments).

1. **Environment Variables**
   Create a `.env` file in the backend root directory with the following:

   ```
   MONGO_URI=<your-mongodb-uri>
   STRIPE_SECRET_KEY=<your-stripe-secret-key> (optional)
   ```

2. **Run the Frontend**

   ```bash
   cd frontend
   npm start
   ```

3. **Run the Backend**
   ```bash
   cd ../backend
   npm run dev
   ```

The frontend should be running at `http://localhost:3000` and the backend at `http://localhost:5000`.

## Features in Progress

- Stripe payment gateway integration.
- Dynamic product fetching with RTK Query.
- Accessibility improvements (WCAG 2.1 standards).

## Contribution

Feel free to contribute by opening a pull request or submitting an issue.
