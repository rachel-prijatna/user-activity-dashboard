# 🧾 User Activity Dashboard

This is a beginner-friendly full stack project that displays and filters user account activity using a React frontend and a Go backend.

It highlights users who:
- Haven’t changed their password in over a year
- Haven’t accessed their account in 90+ days

---

## 🛠 Tech Stack

- 🔵 **Frontend**: React + Vite + Material UI  
- 🟡 **Backend**: Go (`net/http`) API

---

## 🚀 Setup Instructions

### 1. Clone the repository

### HTTPS
```bash
git clone https://github.com/rachel-prijatna/user-activity-dashboard.git
```
### SSH
```bash
git clone git@github.com:rachel-prijatna/user-activity-dashboard.git
```

### 2. Run the Backend (Go)
```bash
go run main.go
```
Runs at: http://localhost:8080/api/users

### 3. Run the Frontend (React)
Open a new terminal tab:
```bash
cd react-frontend
npm install
npm run dev
```
Runs at: http://localhost:5173

🔍 Features

- Filter users by MFA status (Yes, No, or All)

- Table highlights inactive accounts

- Clean and responsive design using Material UI

🧑‍💻 Author
Created by Rachel Prijatna
