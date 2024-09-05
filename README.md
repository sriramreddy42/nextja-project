### **README: Dashboard Web Application**

---

### **Table of Contents**
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Setup Instructions](#setup-instructions)
    - [Frontend (Next.js)](#frontend-nextjs)
    - [Backend (Django API)](#backend-django-api)
5. [Running the Application](#running-the-application)
6. [API Endpoints](#api-endpoints)
7. [Charts Description](#charts-description)
8. [Bonus Features](#bonus-features)
9. [Additional Notes](#additional-notes)

---

### **1. Introduction**

This project is a dashboard web application that features various types of charts (Candlestick, Line, Bar, and Pie) and fetches data from a Django API backend. The frontend is built using **Next.js**, and the charts are displayed using a popular charting library, **Chart.js**. The backend is a **Django** API that serves hardcoded data for each chart type.

---

### **2. Technologies Used**

- **Frontend**: 
  - [Next.js](https://nextjs.org/)
  - [React](https://reactjs.org/)
  - [Chart.js](https://www.chartjs.org/)
  - [Axios](https://axios-http.com/)
  
- **Backend**:
  - [Django](https://www.djangoproject.com/)
  - [Django REST Framework](https://www.django-rest-framework.org/)

- **Additional Tools**:
  - Docker (optional for containerization)
  - TypeScript (optional for frontend)
  - Redux (optional for state management)

---

### **3. Project Structure**

```
/nextjs-dashboard            # Frontend: Next.js app
  /pages
    dashboard.js             # Main dashboard page displaying charts
  /components
    CandlestickChart.js       # Candlestick chart component
    LineChart.js              # Line chart component
    BarChart.js               # Bar chart component
    PieChart.js               # Pie chart component
  /public
    (assets)                  # Static assets
  
/backend                     # Backend: Django API app
  /charts
    views.py                 # API views serving chart data
    urls.py                  # API routes for chart endpoints
  /backend
    settings.py              # Django project settings
    urls.py                  # Main URL configuration

README.md                    # Project documentation
```

---

### **4. Setup Instructions**

#### **Frontend (Next.js)**

1. **Install Dependencies**:
   ```bash
   cd nextjs-dashboard
   npm install
   ```

2. **Start Next.js Development Server**:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`.

#### **Backend (Django API)**

1. **Install Python Dependencies**:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Run Django Development Server**:
   ```bash
   python manage.py runserver
   ```
   The backend API will run on `http://localhost:8000`.

---

### **5. Running the Application**

1. Ensure both the **Next.js frontend** and the **Django backend** are running.
   - Next.js on `http://localhost:3000`
   - Django API on `http://localhost:8000`

2. Navigate to `http://localhost:3000/dashboard` to view the dashboard with all charts.

---

### **6. API Endpoints**

The Django backend provides the following API endpoints, each serving chart-specific data in JSON format:

- `/api/candlestick-data/`: Candlestick chart data
- `/api/line-chart-data/`: Line chart data
- `/api/bar-chart-data/`: Bar chart data
- `/api/pie-chart-data/`: Pie chart data

---

### **7. Charts Description**

1. **Candlestick Chart**:
   - Data represents financial data points for a given period (open, high, low, close).
   - Example format:
     ```json
     {
       "data": [
         {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
         ...
       ]
     }
     ```

2. **Line Chart**:
   - Data represents a simple line graph with labels and corresponding data points.
   - Example format:
     ```json
     {
       "labels": ["Jan", "Feb", "Mar", "Apr"],
       "data": [10, 20, 30, 40]
     }
     ```

3. **Bar Chart**:
   - Data represents a bar chart comparing different categories.
   - Example format:
     ```json
     {
       "labels": ["Product A", "Product B", "Product C"],
       "data": [100, 150, 200]
     }
     ```

4. **Pie Chart**:
   - Data represents a pie chart with categorical proportions.
   - Example format:
     ```json
     {
       "labels": ["Red", "Blue", "Yellow"],
       "data": [300, 50, 100]
     }
     ```

---

### **8. Bonus Features**

1. **TypeScript**: Optionally, the Next.js app can be set up using TypeScript to ensure type safety in the codebase.
   
2. **Docker**: Dockerfiles for both the Next.js and Django apps can be created to containerize the environment for easier deployment.

3. **State Management**: Integrate **Redux** to handle global state management in the frontend.

4. **Testing**: Basic unit tests can be added for Django views and React components using testing libraries like **Jest**.

---

### **9. Additional Notes**

- Ensure that your backend CORS policy allows requests from `http://localhost:3000` if the frontend and backend are running on different ports.
- You can modify the chart data in the Django API to display different data points.
