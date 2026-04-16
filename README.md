# 🤖 BoredBot

A simple and interactive web app that helps you find something to do when you're bored — powered by APIs and Async JavaScript.

---

## 🚀 Overview

**BoredBot** is a beginner-friendly project focused on learning how to work with APIs and asynchronous JavaScript. With a single click, the app fetches a random activity and dynamically updates the UI with both content and color.

---

## ✨ Features

* 🎯 Get a random activity suggestion
* 🎨 Dynamic UI color changes on every click
* ⚡ Fast and responsive interaction
* 🧠 Built using real-world API integration

---

## 🧑‍💻 What I Learned

This project helped me understand the core concepts of:

* Using the **`fetch()`** function to call APIs
* Working with **Promises** and handling asynchronous data
* Converting API responses using **`.json()`**
* Dynamically updating the **DOM** with fetched data
* Managing multiple API calls in a single interaction

---

## 🔌 APIs Used

1. **Bored API**
   https://apis.scrimba.com/bored/api/activity

2. **Random Color API**
   https://x-colors.yurace.pro/api/random?type=dark

---

## 🖼️ Screenshots

### 🟡 Initial State

![Initial UI](/screenshots/screenshot1.png)


### 🎨 Activity + Color Update

![Activity UI](/screenshots/screenshot2.png)


### 🌈 Another Random Result

![Another Activity](/screenshots/screenshot3.png)


---

## 🛠️ How It Works

* When the user clicks the **"BoredBot"** button:

  * A request is sent to the Bored API → returns an activity
  * Another request is sent to the Color API → returns a HEX color
* The app then:

  * Displays the activity text in the UI
  * Updates the button color, text color, and border dynamically

---

## 📂 Project Structure

```bash id="structure"
BoredBot/
│── images/
│
│── screen-recording/
│   └── screen-recording.mp4
│
│── screenshots/
│   ├── screenshot1.png
│   ├── screenshot2.png
│   └── screenshot3.png
│
│── .gitattributes
│── index.html
│── index.css
│── index.js
```

---

## 🧪 How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/ThisisAlam/BoredBot.git
   ```

2. Open `index.html` in your browser

---

## 🌱 Future Improvements

* Add loading animation while fetching data
* Add smooth color transition effects
* Improve accessibility and responsiveness
* Save favorite activities

---

## 🎓 Learn Web Development

If you're starting your journey like me, I highly recommend **Scrimba's Full Stack Developer Path**:

🔗 https://scrimba.com/?via=u43a7734

---

## 📌 Author

**Fakhar Alam**

🔗 GitHub: https://github.com/ThisisAlam
🔗 LinkedIn: https://www.linkedin.com/in/fakhar-e-alam-a046133b4/

---

## 📣 Final Note

This project marks my introduction to working with APIs and Async JavaScript. It’s a small step, but an important one toward building real-world web applications.

---
