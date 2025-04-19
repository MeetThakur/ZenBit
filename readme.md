
---

```markdown
# 🧠 Habit Tracker with Companion Accountability

A full-stack habit tracking web application built using the **MERN Stack** (MongoDB, Express, React, Node.js), allowing users to track their habits and stay motivated with companions who keep them accountable.

---

## 📌 Features

- 🔐 User Authentication (JWT-based)
- 📝 Create, update, delete, and track habits
- 📆 Daily/weekly habit tracking with streaks
- 👯 Add companions to stay mutually accountable
- 📊 Dashboard with progress overview
- 📣 Companion requests and notifications

---

## 🛠️ Tech Stack

| Frontend | Backend | Database | Others |
|----------|---------|----------|--------|
| React.js | Express.js | MongoDB (Mongoose) | JWT, Bcrypt, CORS, dotenv |

---

## 📂 Project Structure

```

habit-tracker/
├── client/         # React frontend
├── server/         # Express backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── index.js

```

---

## ⚙️ Installation

### 1. Clone the repo
```bash
git clone https://github.com/your-username/habit-tracker.git
cd habit-tracker
```

### 2. Setup Backend

```bash
cd server
npm install
```

* Create a `.env` file in the server directory:

```
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
```

* Run the backend:

```bash
node index.js
```

### 3. Setup Frontend

```bash
cd ../client
npm install
npm start
```

---

## 📌 Upcoming Features

* 📬 Email reminders
* 📈 Habit tracking charts
* 🔔 Real-time notifications (Socket.IO)
* 📱 Mobile responsiveness

---

## 🤝 Contribution

Contributions are welcome! Please fork the repository and create a pull request for review.

---

## 📄 License

This project is licensed under the MIT License.

---

## ✨ Author

Made with ❤️ by **Meet Thakur
---**
