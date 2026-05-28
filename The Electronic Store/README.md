# 🛒 The Electronic Store

A full-stack e-commerce web application built with **Java Spring Boot Microservices** and **React.js**, simulating a real-world online electronics shopping platform.

---

## 🚀 Features

- 🔐 User registration & login with **JWT-based authentication**
- 🛍️ Browse, search, and filter electronic products by category
- 🛒 Add to cart, place orders, and manage order history
- 👤 Role-based access: **Admin** (manage products/orders) & **User** (shop)
- 📱 Fully responsive UI using **React.js + Bootstrap**
- 🗄️ MySQL database for products, users, and order persistence

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Backend | Java, Spring Boot, Spring Security, REST APIs |
| Authentication | JWT Token |
| Frontend | React.js, Bootstrap |
| Database | MySQL |
| Server | Apache Tomcat |
| Build Tool | Maven |
| Version Control | Git |

---

## 🏗️ Architecture

```
Client (React.js)
      │
      ▼
REST API (Spring Boot)
      │
      ├── Auth Service (JWT)
      ├── Product Service
      ├── Order Service
      └── User Service
            │
            ▼
        MySQL DB
```

---

## ⚙️ How to Run

### Prerequisites
- Java 17+
- Node.js 18+
- MySQL 8+
- Maven

### Backend

```bash
# Clone the repo
git clone https://github.com/klpawar1998/Projects.git
cd Projects/The\ Electronic\ Store

# Configure DB in application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/electronic_store
spring.datasource.username=your_username
spring.datasource.password=your_password

# Run the Spring Boot app
mvn spring-boot:run
```

### Frontend

```bash
cd frontend
npm install
npm start
```

App runs at `http://localhost:3000`

---

## 📌 Key Learnings

- Implemented stateless JWT authentication with Spring Security
- Designed RESTful APIs following standard HTTP conventions
- Built reusable React components with state management
- Handled CORS between Spring Boot and React dev server
