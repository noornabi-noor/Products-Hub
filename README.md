# 🛍️ Products Hub — Next.js 15 App Router Demo

A simple full-stack application built with **Next.js 15 (App Router)** and **NextAuth.js** for authentication. Users can browse products, view detailed pages, and — once authenticated — access a protected dashboard to add new products.

---

## 🚀 Features

- ✅ Public landing page with hero, highlights, and footer
- 🔐 Google login via NextAuth.js
- 📦 Product listing and detail views
- 🛠️ Protected dashboard for adding products
- 🌐 Deployed on Vercel

---

## 🧰 Tech Stack

- **Next.js 15** (App Router)
- **NextAuth.js** (Google OAuth)
- **MongoDB Atlas** (for product storage)
- **Tailwind CSS** + **Framer Motion** (for styling and animation)
- **Vercel** (for deployment)

---

## 🛠️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/products-hub.git
cd products-hub
```
### 2. Install Dependencies

```bash
npm install
```
### 3. Configure Environment Variables

Create a .env.local file in the root directory:
```bash
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-generated-secret
MONGODB_URI=your-mongodb-connection-string
DB_NAME=productsDB
```

You can generate a secure NEXTAUTH_SECRET using:
openssl rand -base64 32



### 4. Run the Development Server
```bash
npm run dev
```
---

App will be available at http://localhost:3000

## 🌐 Public Routes

### `/`
- **Landing Page**
- Includes:
  - Navbar
  - Hero section
  - Product Highlights
  - Footer
- Navigation to **Login** and **Products** pages
- No authentication required

---

### `/login`
- **Login Page**
- Implemented with **NextAuth.js**
- Supports Google (social login) or credentials
- On successful login → Redirects to `/products`

---

### `/products`
- **Product List Page**
- Publicly accessible
- Displays product list fetched from a mock backend or JSON file
- Each product includes:
  - Name
  - Description
  - Price
  - Details button (navigates to product details page)

---

### `/products/[id]`
- **Product Details Page**
- Publicly accessible
- Displays **full details** of a single product

---

## 🔒 Protected Routes

### `/dashboard/add-product`
- **Add Product Page**
- Accessible **only when logged in**
- Contains form to add a new product
- Saves product data to the database (mock/real)
- If unauthenticated → Redirects to `/login`

---

## 📌 Notes
- All pages share a consistent **Navbar** and **Footer**
- Authentication handled via **NextAuth.js**
- Products stored in a mock backend (or JSON file) with extendable DB support

---



## 📦 Deployment
This app is deployed on Vercel. To deploy your own version:
vercel --prod


Make sure to set all environment variables in the Vercel dashboard under Project Settings → Environment Variables.

## 👨‍💻 Author
Built by Md. Noornabi — a passionate full-stack developer focused on clean UI, modular architecture, and deployment excellence.
