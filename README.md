# Food Ordering Web App (MERN Stack)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Contact](#contact)

## Introduction
This is a full-stack food ordering web application built using the MERN stack (MongoDB, Express, React, Node.js). The application consists of a customer-facing app for ordering food and an admin app for managing orders, menu items, and more.

## Features
- User authentication and authorization
- Browse food items
- Add items to the cart and place orders
- Stripe Payment Integration: Secure and reliable payment processing using Stripe.
- Order tracking
- Admin panel to manage menu items, orders

## Technologies Used
- **Frontend:** React.js, React Context API, React Router
- **Backend:** Node.js, Express.js
- **Payment Gateway:** Stripe
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** CSS

## Live Demo
The application is live and accessible at the following URLs:

- **Customer App:** [https://foodiz-frontend.onrender.com](https://foodiz-frontend.onrender.com)
- **Admin Dashboard:** [https://foodiz-admin.onrender.com](https://foodiz-admin.onrender.com)
- **Backend API:** [https://foodiz-backend.onrender.com](https://foodiz-backend.onrender.com)

## Installation
### Prerequisites
- Node.js
- MongoDB

### Clone the Repository
```sh
git clone 
cd mern-food-delivery-app
```

## Backend Setup
Navigate to the backend directory:

```sh
cd backend

```
Install dependencies:

```sh
npm install
```

Create a .env file in the backend directory and add the following:

```sh
JWT_SECRET = 'write your secret key'
STRIPE_SECRET_KEY = "write your stripe key"
```

Start the backend server:

```sh
npm run server
```
## Frontend Setup
Navigate to the frontend directory:

```sh

cd frontend
```

Install dependencies:
```sh

npm install
```

Start the frontend server:
```sh

npm run dev
```

## Admin App Setup

Navigate to the admin directory:
```sh

cd admin
```

Install dependencies:

```sh
npm install
```

Start the admin app :
```sh
npm run dev
```

## Usage

### Local Development
- Customer App: [http://localhost:5173](http://localhost:5173)
- Admin Dashboard: [http://localhost:5174](http://localhost:5174)
- Backend API: [http://localhost:4000](http://localhost:4000)

### Production Deployment
- **Customer App:** [https://foodiz-frontend.onrender.com](https://foodiz-frontend.onrender.com)
- **Admin Dashboard:** [https://foodiz-admin.onrender.com](https://foodiz-admin.onrender.com)
- **Backend API:** [https://foodiz-backend.onrender.com](https://foodiz-backend.onrender.com)

### Instructions
1. Register as a new user or log in with existing credentials.
2. Browse the menu, add items to the cart, and place an order.
3. Use Stripe test cards to simulate payments (e.g., `4242 4242 4242 4242`).
4. Access the admin dashboard to manage orders and menu items.


## Usage
Access the customer-facing app at http://localhost:5173.
Access the admin app at http://localhost:5174.
Register as a new user or log in with existing credentials.
Browse the menu, add items to the cart, and place an order.
Pay using dummy visa card
Use the admin panel to manage orders, menu items.


## API Documentation
The API endpoints for the backend can be documented using tools like Postman or Swagger. Include endpoints for user authentication, menu items, orders, and more.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and include relevant tests.

## Contact
For any questions or suggestions, feel free to contact me.

Happy coding!

Feel free to customize this template according to your specific project details and requirements.