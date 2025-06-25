# 📝 User Feedback System

This is a full-stack web application built to collect, store, and display user feedback using a modern stack.

## 🛠️ Tech Stack

| Layer    | Technology                     |
| -------- | ------------------------------ |
| Frontend | React.js, Axios, Framer Motion |
| Backend  | Node.js, Express.js            |
| Database | MongoDB (Cloud - Atlas)        |
| Styling  | Custom CSS                     |

---

## 📁 Folder Structure

user-feedback-system/
├── backend/ ← Node.js + Express (API)
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── .env ← Contains MongoDB connection string
│ ├── server.js
│ └── package.json
├── frontend/ ← React App (UI)
│ ├── src/
│ │ ├── components/
│ │ ├── App.js
│ │ └── App.css
│ └── package.json
├── .gitignore
└── README.md

---

## ⚙️ How to Setup & Run

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Saimouli7424/user-feedback-system
cd user-feedback-system


```

2️⃣ Backend Setup
cd backend
npm install

🔐 Create a .env file inside /backend:

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myfeedbacksystem?retryWrites=true&w=majority

Replace <username> and <password> with your MongoDB Atlas credentials.

▶️ Start Backend Server
npm run dev
The server will run at http://localhost:5000

3️⃣ Frontend Setup
Open another terminal:
cd frontend
npm install

▶️ Start React App
npm start
The app will run at http://localhost:3000

📦 API Endpoints
Method Endpoint Description
POST /feedback Submit user feedback
GET /feedback Retrieve all feedbacks

✨ Features
Submit feedback with name, email, text, and category

Dashboard to view all feedbacks

Filter by category and sort by date

Responsive design

Smooth animations with Framer Motion

Styled with custom CSS (no framework)

📚 License
This project is for Assignment purpose.
