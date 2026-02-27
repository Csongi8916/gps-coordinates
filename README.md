# GPS Coordinates Management System

## Project Overview

This project is a fullstack GPS coordinate management application consisting of:

- React + TypeScript frontend
- ASP.NET Core Web API backend
- PostgreSQL database
- React Query based state management
- Leaflet map visualization

The system allows users to:

- Create coordinates
- Edit coordinates
- Delete coordinates
- View coordinates on map
- Display coordinate details in sidebar panel

---

## Prerequisites

- .NET SDK 10+
- Node.js
- Docker (for PostgreSQL container)
- Git

---

## Start / Setup Guide

### 1. Clone Repository

```bash
git clone https://github.com/Csongi8916/gps-coordinates.git
cd <project-root>
```

### 2. Start PostgreSQL Container

Make sure Docker is installed and running.

Then execute:

```bash
docker compose up -d
```

### 3. Run Database Migration (Create Database + Schema)

```bash
cd server
dotnet ef database update
```

This command will:

- Create the database if it does not exist
- Apply migrations
- Create required tables
- Seed data automatically via migration seeding logic

### 4. Start Backend API

Inside backend project directory:

```bash
dotnet run
```

Backend API will start on:

```bash
http://localhost:5226
```

Swagger documentation will be available at:

```bash
http://localhost:5226/swagger
```

### 5. Start Frontend Application

Navigate to frontend project:

```bash
cd client
npm install
npm run dev
```

Frontend will start on:

```bash
http://localhost:5173
```

Frontend development server will start automatically.

### 6. Verify Application

- Open Swagger UI and test API endpoints
- Open frontend map interface
- Confirm markers and polyline rendering

---

## API Endpoints

### Coordinates

| Method | Endpoint              | Description          |
| ------ | --------------------- | -------------------- |
| GET    | /api/coordinates      | Get all coordinates  |
| GET    | /api/coordinates/{id} | Get coordinate by id |
| POST   | /api/coordinates      | Create coordinate    |
| PUT    | /api/coordinates/{id} | Update coordinate    |
| DELETE | /api/coordinates/{id} | Delete coordinate    |

---

## CORS Policy

Frontend origin allowed:

```
http://localhost:5173
```

---

## Technical Highlights

- EF Core migrations and seed initialization
- Development Docker PostgreSQL environment
- DTO-based backend responses
- Dependency injection architecture
- Global exception middleware handling
- React Query cache synchronization
- Modular UI components
- Map viewport auto-fit behavior
- Map marker and polyline rendering
- Form state lifecycle management
- Clean mutation workflows

---

## Notes

- The project is intended for development demonstration purposes.
- Replace development credentials before using in production.
- Production-level infrastructure configuration is outside the scope of this project.

---
