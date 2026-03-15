<div align="center">

# WanderLust

### Discover & Share Amazing Travel Destinations

A full-stack travel listing platform inspired by Airbnb where users can explore destinations, create listings, upload images, view locations on maps, and share reviews.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=flat-square&logo=render)](https://wanderlust-dakm.onrender.com)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-black?style=flat-square&logo=github)](https://github.com/NehaSharma-tech/WanderLust)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)

---

# Overview

**WanderLust** is a full-stack travel listing web application where users can explore travel destinations, create their own listings, upload images, and leave reviews.

The platform is inspired by travel marketplace applications like Airbnb and demonstrates complete **CRUD operations, authentication, image uploads, and RESTful routing** using a Node.js backend and EJS server-side rendering.

This project helped in understanding **full-stack development fundamentals**, including database design, authentication systems, file uploads, and deployment.

---

# Features

### User Authentication
- Secure **signup and login system**
- Session-based authentication using Passport.js
- Protected routes for creating and managing listings

### Travel Listings
Users can:
- Create new travel listings
- Edit existing listings
- Delete listings
- View detailed listing pages

### Image Upload
- Upload destination images
- Images stored securely using **Cloudinary**

### Review System
- Users can add reviews to listings
- Delete their reviews
- Display ratings and comments

### Flash Messages
- Success and error messages displayed after actions

### Responsive UI
- Clean layout built using **Bootstrap**
- Mobile-friendly interface

---

# Tech Stack

### Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | Backend framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |

### Frontend

| Technology | Purpose |
|---|---|
| EJS | Server-side templating |
| HTML5 | Markup |
| CSS3 | Styling |
| Bootstrap | UI framework |
| JavaScript | Client-side logic |

### Authentication & Security

| Tool | Purpose |
|---|---|
| Passport.js | Authentication |
| Express Session | Session management |
| bcrypt | Password hashing |

### File Upload

| Tool | Purpose |
|---|---|
| Multer | File upload middleware |
| Cloudinary | Cloud image storage |

---

# Project Architecture

The application follows **MVC (Model-View-Controller)** architecture.

Client Request
│
▼
Routes
│
Controllers
│
Models (MongoDB)
│
Views (EJS Templates)

---


### MVC Benefits
- Organized code structure
- Easier maintenance
- Scalable architecture
- Clear separation of concerns

---

# Project Structure
WanderLust/
│
├── models/ # Mongoose models
│ ├── listing.js
│ └── review.js
│
├── routes/ # Express route files
│ ├── listings.js
│ ├── reviews.js
│ └── users.js
│
├── controllers/ # Business logic
│ ├── listings.js
│ ├── reviews.js
│ └── users.js
│
├── views/ # EJS templates
│ ├── layouts/
│ ├── listings/
│ ├── users/
│ └── partials/
│
├── public/ # Static files
│ ├── css/
│ ├── js/
│ └── images/
│
├── utils/ # Utility functions
│
├── middleware/ # Custom middleware
│
├── app.js # Main application file
└── package.json


---

# Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or MongoDB Atlas)
- npm

---

### 1 Clone the Repository

```bash
git clone https://github.com/NehaSharma-tech/WanderLust.git
cd WanderLust
```

### 2 Install Dependencies

```bash
npm install
```

### 3 Setup Environment Variables

Create a .env file in the root directory.

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret

ATLASDB_URL=mongodb+srv://username:password@cluster.mongodb.net/wanderlust

SESSION_SECRET=your_secret_key

### 4 Run the Application

```bash
node app.js
```
or

```bash
npm start
```
Visit:
http://localhost:3000

---

# Environment Variables

| Variable           | Description                     |
| ------------------ | ------------------------------- |
| `ATLASDB_URL`      | MongoDB Atlas connection string |
| `CLOUD_NAME`       | Cloudinary cloud name           |
| `CLOUD_API_KEY`    | Cloudinary API key              |
| `CLOUD_API_SECRET` | Cloudinary secret               |
| `SESSION_SECRET`   | Express session secret          |

⚠️ Never commit .env files to GitHub.

---

# Deployment

The project is deployed using Render.

### Deployment Architecture
User Browser
     │
     ▼
Render Server (Node.js + Express)
     │
     ▼
MongoDB Atlas
     │
     ▼
Cloudinary (Image Storage)

Live Project:
https://wanderlust-dakm.onrender.com

---

# Screenshots

### Home Page
![Home Page](assets/screenshot-homepage.png)

### Listing Details
![ Listing Details ](assets/screenshot-showlisting.png)

### Location on Map
![Location on Map](assets/screenshot-screenshot-onmaplocation.png)

### Add New Listing
![Add New Listing ](assets/screenshot-newlisting.png)

---

# Future Improvements

Some features planned for future updates:

1. ❤️ Wishlist / Favorite listings

2. 💬 User profile pages

3. 📱 Progressive Web App support

4. 🔎 Advanced search and filters

<div align="center">

Built with ❤️ by [Neha Sharma](https://github.com/NehaSharma-tech)

</div> ```


