# 📋 Taskflow

Taskflow is a clean, modern, full-stack task management application designed to help users organize their daily workflows efficiently. It features a secure user authentication system and private, user-specific task dashboards with a polished, highly focus-driven UI/UX theme.

---

## ✨ Features

- **Secure Authentication**: User registration and login utilizing hashed passwords and JWT (JSON Web Tokens) stored in secure, HTTP-only cookies.
- **Complete Task CRUD**: Authenticated users can Create, Read, Update (mark complete/incomplete), and Delete their own tasks.
- **Data Privacy**: Robust backend middleware ensures users can only see, modify, or delete tasks that they personally created.
- **Modern UI/UX**: Designed using a soft slate-and-indigo palette to reduce eye strain and optimize visual hierarchy.

---

## 🛠️ Tech Stack

### Backend
- **Node.js & Express**: Fast, unopinionated web framework for building the REST API.
- **MongoDB & Mongoose**: NoSQL database used to securely store user profiles and task structures.
- **Bcrypt.js**: Used for secure password hashing.
- **JSONWebToken (JWT)**: Used to handle user sessions safely via cookies.

### Frontend
- **React.js**: Modular component architecture for a seamless single-page experience.
- **CSS / Tailwind CSS**: Styled following a bespoke SaaS productivity theme.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites
- Make sure you have **Node.js** installed.
- Ensure **MongoDB Community Server** is installed and running locally on port `27017` (or use a MongoDB Atlas cloud URI).

### 1. Clone the Repository
```bash
git clone [https://github.com/YOUR_USERNAME/taskflow.git](https://github.com/YOUR_USERNAME/taskflow.git)
cd taskflow
