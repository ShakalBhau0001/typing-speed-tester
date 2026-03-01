# ⌨️ Typing Speed Tester (HTML, CSS & JavaScript)

A clean and interactive **Typing Speed Test Web Application** built using **HTML, CSS, and Vanilla JavaScript**.

This project focuses on **real-time typing analysis**, **WPM calculation**, **accuracy tracking**, and dynamic UI feedback to simulate a basic typing test environment.

It is developed as a frontend practice project to strengthen DOM manipulation skills, event handling logic, and UI state management using pure JavaScript.

---

## 🧱 Project Structure

```bash
typing-speed-tester/
│
├── index.html        # Application structure
├── style.css         # Styling and layout design
├── script.js         # Typing logic and calculations
│
└── README.md         # Project documentation
```

---

## ✨ Features

### ⏱ Real-Time Typing Test
- Selectable time durations (30s / 60s / 120s)
- Dynamic countdown timer
- Auto-test completion when time ends

### 📊 Live Performance Metrics
- Words Per Minute (WPM) calculation
- Real-time accuracy tracking
- Final performance summary modal

### 🎯 Character-Level Feedback
- Correct characters highlighted in green
- Incorrect characters highlighted in red
- Current character indicator for typing guidance

### 🎨 Modern UI Design
- Animated gradient background
- Clean card-based layout
- Responsive centered interface

### 🚫 Anti-Cheat Handling
- Paste functionality disabled
- Ensures manual typing input only

---

## 🛠 Technologies Used

| Technology           | Role                                  |
|----------------------|----------------------------------------|
| HTML5                | Structure and layout                  |
| CSS3                 | Styling and responsive design         |
| JavaScript (ES6)     | Typing logic, DOM updates, timer      |
| Flexbox & Grid       | Layout alignment                      |

---

## 📌 Purpose of This Project

This project is built to:

- Practice DOM manipulation
- Implement real-time calculations
- Understand event-driven programming
- Strengthen JavaScript logic building
- Improve UI structuring and responsiveness

> ⚠️ This is a frontend-only project. No backend or database is used.

---

## 🧠 How WPM & Accuracy Are Calculated

### Words Per Minute (WPM)

WPM is calculated using:

```bash
(number of valid words typed / time elapsed in seconds) × 60
```

Only non-empty words are counted.

### Accuracy

Accuracy is calculated using:

```bash
(correct characters / total characters typed) × 100
```

Incorrect and extra characters reduce accuracy.

---

## ▶️ How to Use

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ShakalBhau0001/typing-speed-tester.git
```

### 2️⃣ Open the Project

Open `index.html` in any modern browser.

No server, build tools, or external dependencies are required.

---

## ⚠️ Limitations

- No user accounts or authentication
- No score saving
- No backend storage
- Basic WPM calculation (not 5-character professional standard)

---

## 🌟 Future Improvements

- Implement 5-character standard WPM formula
- Add localStorage high-score saving
- Improve accessibility
- Add difficulty-based text sets
- Add leaderboard functionality

---

## 🪪 Author

> **Shakal Bhau**

> **GitHub: [ShakalBhau0001](https://github.com/ShakalBhau0001)**

---
