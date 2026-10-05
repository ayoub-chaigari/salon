# Salon Beauty

A full-stack salon booking website that lets customers browse beauty services, view stylists, book appointments, and manage salon operations through an admin dashboard.

## Overview

This project includes:

- A React frontend for the public salon website
- An Express.js backend for REST APIs
- MySQL database connectivity for salon data
- Admin pages for managing services, workers, and reservations

## Tech Stack

- Frontend: React, React Router, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MySQL
- Authentication: JWT and bcrypt for admin-related flows

## Features

- Home page with salon branding and service highlights
- Service listing and booking journey
- Workers/stylists information page
- Contact page for appointment requests
- Admin dashboard for managing services, workers, and reservations
- Secure API layer with CORS enabled for frontend access

## Project Structure

```bash
salon-beauty/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
├── package.json
├── package-lock.json
└── README.md
```

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- MySQL installed and running
- A MySQL database created named `beauty_salon`

## Database Setup

Create a MySQL database:

```sql
CREATE DATABASE beauty_salon;
```

Then update the database credentials in:

- `backend/config/db.js`

Example configuration:

```js
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_mysql_password",
  database: "beauty_salon"
});
```

## Installation

### 1) Install backend dependencies

```bash
cd backend
npm install
```

### 2) Install frontend dependencies

```bash
cd ../frontend
npm install
```

## Run the Application

### Start the backend

```bash
cd backend
npm run dev
```

The API server runs on:

- http://localhost:5000

### Start the frontend

```bash
cd frontend
npm start
```

The React app runs on:

- http://localhost:3000

## API Overview

The backend exposes REST APIs under the `/api` prefix, including:

- `/api/services`
- `/api/workers`
- `/api/reservations`
- `/api/admin`

## Admin Dashboard

The frontend includes an admin dashboard for managing: 

- Services
- Workers
- Reservations

## Notes

This project is a starter salon management web app and can be extended with:

- appointment booking validation
- user authentication and role-based access control
- payment integration
- email notifications
- dashboard analytics

## License

This project is currently unlicensed unless you add a specific license for distribution or production use.
