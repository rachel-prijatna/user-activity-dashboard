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

## 🔍 Features

- Filter users by MFA status (Yes, No, or All)

- Table highlights inactive accounts

- Clean and responsive design using Material UI


## 🧠 Design & Architecture Notes / Tradeoffs

**🌗 Theme Toggle**

- A light/dark mode toggle is built into the UI using Material UI’s theming system.

- The theme updates dynamically when the user clicks the toggle button.

- Dark mode uses rich brown highlights for contrast, while light mode uses warm amber tones.


**📱 Responsiveness**

- The layout is designed to be clean and centered, working well on medium to large screens.

- The table is scrollable if it overflows horizontally.

- Mobile responsiveness is limited — this project is focused on desktop-first design for simplicity.


**📊 Static Data Source**

- The backend serves hardcoded sample data to simulate user records.

- This simplifies development and avoids external dependencies like databases.

- Tradeoff: no live updates or user interaction, which makes it ideal for demo and learning purposes.


🧑‍💻 Author
Created by Rachel Prijatna
