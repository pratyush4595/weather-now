# 🌦️ Weather Now

**Weather Now** is a modern, elegant, and professional weather dashboard built with **React**.  
It is designed for **Jamie, an outdoor enthusiast**, who needs quick and accurate weather updates to plan activities smarter.  

The application provides real-time weather conditions, hourly forecasts, 7-day forecasts, detailed metrics, and extra highlights — all in a **theme-aware, responsive, and smooth-animated interface**.  

---

## ✨ Features

### 🔹 Core
- 🌍 **City Search & Current Weather** — Search for any city and instantly view live weather conditions.
- 🕒 **Hourly Forecast** — Interactive chart to visualize temperature trends.
- 📅 **7-Day Forecast** — Scrollable daily cards with temperature ranges & rain chance.
- 📊 **Detailed Metrics** — Humidity, Pressure, Visibility, Cloud Cover.
- 🌞 **Extra Highlights** — UV Index, Precipitation Chance, Wind Gusts.
- 📡 **Open-Meteo API Integration** — Fast and reliable weather data.

### 🔹 UI/UX
- 🎨 **Theme Aware** — Works seamlessly with light & dark themes using Bootstrap 5.3.
- 📱 **Responsive** — Optimized for mobile, tablet, and desktop.
- ✨ **Modern Animations** — Smooth scrolling and reveal effects with [AOS](https://michalsnik.github.io/aos/).
- 🎭 **Animated Branding** — Dynamic “Weather Now” logo with subtle icon animation.
- ⚡ **Loaders & Alerts** — Friendly `Loading...` states and “No Data Found” messages.
- 🚫 **404 Page** — Custom error page with animated icon.
- 🔧 **Coming Soon Card** — Placeholder for future **Settings Page**.

---

## 🛠️ Tech Stack

- **React (Vite)** — Component-based architecture.
- **React Router** — Client-side navigation.
- **Axios** — API requests.
- **Bootstrap 5.3** — Responsive grid system & theme support.
- **React Icons / Bootstrap Icons** — Elegant iconography.
- **AOS** — Smooth scroll animations.

---

## ⚡ API Integration

This project uses the **Open-Meteo API**.  
We fetch:
- **Hourly**: Temperature, Humidity, Visibility, Pressure, Cloud Cover.
- **Daily**: Max/Min Temperatures, Precipitation Probability, UV Index, Wind Gusts.

Configured inside `weatherService.js`.

---

## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/pratyush4595/weather-now.git
cd weather-now


### 2. Install dependencies

npm install


### 3. Run development server

npm run dev

App will run at [http://localhost:5173](http://localhost:5173).

---

## 📌 Future Enhancements

- 🌐 Multi-language support.  
- 🎯 Location auto-detection.  
- 📱 PWA support for offline usage.  
- 🔔 Weather alerts & notifications.  

---

## 👨‍💻 Author

Developed by **Pratyush Swain**  
Built for Take-Home Challenge at Aganitha.