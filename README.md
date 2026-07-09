# Unit Converter

A full-stack unit converter web app with an Express JSON API backend and a React (Vite) frontend. Supports conversions across **length**, **weight**, and **temperature**, with a routed multi-page UI and a dark, glassmorphism-style design.

> Built as a solution to the [Unit Converter](https://roadmap.sh/projects/unit-converter) backend project on [roadmap.sh](https://roadmap.sh).

## Features

- Convert between multiple units within a category (length, weight, temperature)
- Dynamic dropdowns that update based on the selected category
- Multi-page flow using React Router — input on `Home`, results on `Result`
- Result data passed via route state (no query params, no global state manager needed)
- Loading state and error handling on the conversion request
- Dark theme with animated gradient blobs, grid overlay, and glassmorphism cards

## Tech Stack

**Backend**
- Node.js
- Express
- CORS middleware

**Frontend**
- React
- Vite
- React Router (`react-router-dom`)
- Tailwind CSS

## Project Structure

```
unit-converter/
├── backend/
│   ├── server.js          # Express app entry point
│   ├── routes/             # API route handlers
│   └── utils/               # Conversion logic (base-unit multipliers, temperature switch logic)
├── frontend/
│   ├── src/
│   │   ├── component/
│   │   │   └── Header.jsx   # Category selector, shared across pages
│   │   ├── pages/
│   │   │   ├── Home.jsx     # Input form: category, value, from/to units
│   │   │   └── Result.jsx   # Displays conversion result
│   │   ├── App.jsx          # Routes + background styling
│   │   └── main.jsx
│   └── index.html
└── README.md
```

## How It Works

- **Length & Weight**: conversions use a base-unit multiplication pattern — each unit has a conversion factor relative to a common base unit (e.g. meters, grams), so converting from unit A to unit B is `(value * factorA) / factorB`.
- **Temperature**: handled with dedicated switch-based logic, since Celsius/Fahrenheit/Kelvin conversions require offset formulas rather than simple multiplication.
- **Routing**: `Home` collects category, value, and units, then sends a POST request to the API. On success, it navigates to `/result` and passes the response via React Router's route `state`. `Result` reads that state with `useLocation()` and redirects back to `/` if accessed directly without state.

## Getting Started

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```



## API

The frontend sends a POST request with a JSON body and `Content-Type: application/json` header.

**Request**
```json
POST /api/convert
{
  "category": "length",
  "value": 100,
  "from": "meter",
  "to": "kilometer"
}
```

**Response**
```json
{
  "result": 0.1
}
```

Live backend: `https://unit-converter-gs3c.onrender.com/api/convert`

## Notes / Lessons Learned

- Unit key strings must match exactly between frontend and backend, including casing (e.g. `"Celsius"`, not `"celsius"`).
- Input values from number fields are strings by default — convert with `Number(value)` before sending, and validate with `isNaN()` rather than a plain falsy check (so `0` isn't rejected).
- Always check `response.ok` before trusting the response body — a failed request can still return valid JSON.
- Don't call `navigate()` directly in a component body during render — it triggers a state update mid-render. Wrap redirect logic in `useEffect` instead.
- `useEffect` dependency arrays should precisely reflect what should trigger a reset (e.g. resetting `from`/`to` units when `category` changes).

## Future Improvements

- Add more conversion categories (e.g. volume, speed, currency)
- Add unit tests for conversion logic
- Persist last-used category/units (e.g. localStorage) for returning users
- Handle direct/refresh access to `/result` more gracefully than a silent redirect

---

Built as a learning project to understand full-stack architecture with a decoupled API and a routed React frontend.
