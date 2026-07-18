# 📚 AI Study Assistant

An AI-powered Study Assistant that generates **Flashcards** and **Multiple Choice Quizzes** from any study topic or notes using the **Groq API**. This application helps students revise concepts quickly through interactive learning.

---

## 🚀 Live Demo

**Frontend:** https://your-vercel-url.vercel.app

**Backend:** https://your-render-url.onrender.com

---

## ✨ Features

- 📖 AI-generated Flashcards
- ❓ AI-generated Multiple Choice Quiz
- ✅ Interactive Quiz
- 🎯 Automatic Score Calculation
- 🔄 Retest Wrong Answers
- ⏳ Loading Indicator
- ⚠️ Error Handling
- 📱 Responsive User Interface
- 🎨 Modern UI with Tailwind CSS
- 🔐 Secure API Key using Environment Variables

---

## 📸 Screenshots

> Add screenshots after deployment.

### Home Page

![Home](screenshots/home.png)

### Flashcards

![Flashcards](screenshots/flashcards.png)

### Quiz

![Quiz](screenshots/quiz.png)

### Result

![Result](screenshots/result.png)

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express.js
- Groq API
- CORS
- dotenv

---

# 📂 Project Structure

```
study-assistant/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── TopicForm.jsx
│   │   │   ├── Flashcard.jsx
│   │   │   ├── FlashcardList.jsx
│   │   │   ├── Quiz.jsx
│   │   │   ├── QuizResult.jsx
│   │   │   ├── Loading.jsx
│   │   │   └── EmptyState.jsx
│   │   │
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── schemas/
│   ├── utils/
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Taniya1308/study-assistant-ai.git
```

Move into the project

```bash
cd study-assistant-ai
```

---

# Backend Setup

Move into the server folder

```bash
cd server
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
GROQ_API_KEY=your_groq_api_key
PORT=5000
```

Run the backend

```bash
npm run dev
```

Backend will start on

```
http://localhost:5000
```

---

# Frontend Setup

Open another terminal

```bash
cd client
```

Install dependencies

```bash
npm install
```

Start the frontend

```bash
npm run dev
```

Frontend will start on

```
http://localhost:5173
```

---

# API Endpoint

## Generate AI Content

### POST

```
/generate
```

---

### Request Body

Generate Flashcards

```json
{
  "text": "Binary Trees",
  "type": "flashcards"
}
```

Generate Quiz

```json
{
  "text": "Binary Trees",
  "type": "quiz"
}
```

---

### Flashcard Response

```json
{
  "success": true,
  "data": {
    "flashcards": [
      {
        "question": "What is a Binary Tree?",
        "answer": "A tree where each node has at most two children."
      }
    ]
  }
}
```

---

### Quiz Response

```json
{
  "success": true,
  "data": {
    "quiz": [
      {
        "question": "What is a Binary Tree?",
        "options": [
          "Option A",
          "Option B",
          "Option C",
          "Option D"
        ],
        "correctAnswer": "Option A"
      }
    ]
  }
}
```

---

# How to Use

1. Open the application.
2. Enter a study topic or notes.
3. Select **Flashcards** or **Quiz**.
4. Click **Generate**.
5. Study using AI-generated flashcards.
6. Complete the quiz.
7. View your final score.
8. Retest incorrect answers if needed.

---

# Future Enhancements

- 📄 Export Flashcards as PDF
- 🌙 Dark Mode
- 👤 User Authentication
- 💾 Save Study History
- 📊 Performance Analytics
- ⭐ Bookmark Flashcards
- 🎤 Voice-based Learning

---

# Author

**Taniya Sharma**

B.Tech - Internet of Things (IoT)

Pranveer Singh Institute of Technology (PSIT), Kanpur

GitHub: https://github.com/Taniya1308

---

# License

This project is developed for educational and learning purposes.
