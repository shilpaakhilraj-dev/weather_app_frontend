# Weather App Frontend (Angular)

A simple and responsive **Weather Application UI** built with Angular v19 that fetches real-time weather forecast data from a Python FastAPI backend.

---

## Features

* Search weather by city name
* Toggle between Celsius (°C) and Fahrenheit (°F)
* View daily forecast (min/max temperature)
* Fast and responsive UI
* Integrated with backend API

---

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/
│   │   │   ├── home.component.ts
│   │   │   ├── home.component.html
│   │   │   └── home.component.css
│   │   └── weather/
│   │       ├── weather.component.ts
│   │       ├── weather.component.html
│   │       └── weather.component.css
│   ├── services/
│   │   └── weather.service.ts
│   ├── app-routing.module.ts
│   └── app.module.ts
├── assets/
└── styles.scss
```


---

## Prerequisites

* Node.js (v18+ recommended)
* Angular CLI

---

## Backend Integration

This app connects to a FastAPI backend.

Default API endpoint:

```id="o4v1hs"
http://127.0.0.1:8000/weather
```

### Example request:

```id="vx7t3c"
GET /weather?city=Chennai&units=metric
```

---

## Configuration

If your backend runs on a different URL, update it in:

```id="yq9s1l"
src/app/services/weather.service.ts
```

Example:

```ts id="jz0d7k"
private apiUrl = 'http://127.0.0.1:8000/weather';
```

---

## Styling

* Basic CSS / optional Tailwind support
* Responsive layout using Flexbox

---

## Sample UI Flow

1. Enter city name
2. Select unit (Celsius/Fahrenheit)
3. Click **Get Weather**
4. View forecast results

---

## Backend Repo

Make sure backend is running:

```bash id="d4n8sj"
uvicorn main:app --reload
```

---

## Author

**Shilpa K**
Senior Angular Developer | Frontend Specialist

---
