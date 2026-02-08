# Secure Test Environment Enforcement

A browser-based secure assessment monitoring system that enforces fullscreen,
tracks candidate behavior, and produces a reliable audit trail for employer review.

This project simulates a high-stakes proctored examination environment.

---

## Key Features

### Mandatory Fullscreen Enforcement
- Requires fullscreen before starting the test  
- Continuous monitoring of fullscreen state  
- Detects exit & re-entry  
- Configurable tolerance for violations  
- Logs entire fullscreen lifecycle  

### Attention & Activity Monitoring
- Detects tab switches  
- Tracks visibility changes  
- Monitors window blur/focus  
- Records when candidate leaves or returns  

### Copy / Paste / Interaction Detection
- Logs copy, paste, cut attempts  
- Detects right-click usage  
- Captures suspicious keyboard combinations (Ctrl/Cmd shortcuts)

### Unified Event Logging
All system activities follow a consistent schema:

- {
- eventType,
- timestamp,
- attemptId,
- questionId,
- metadata
- }


### Metadata includes:
- Browser user agent  
- Online/offline state  
- Visibility state  

### Persistence & Reliability
- Logs survive page refresh or accidental closure  
- Stored in localStorage  
- Prevents audit trail loss  

### Batch Sync Engine
- Sends logs at regular intervals  
- Retries automatically  
- Tracks sync success/failure  
- Stops after submission to ensure immutability  

### Clean, Modular Architecture
- Separation of monitoring, logging, storage & synchronization  
- UI remains independent from enforcement logic  
- Easily extendable for future proctoring features  

---

## Tech Stack

- React  
- JavaScript  
- Ant Design  
- Browser APIs  
- LocalStorage  

---

## Project Structure

- src/
- ├── core/
- │ ├── logger/ → centralized event creation
- │ ├── fullscreen/ → fullscreen lifecycle control
- │ ├── activity/ → attention & interaction monitors
- │ ├── storage/ → persistence layer
- │ └── sync/ → batching & delivery
- │
- ├── hooks/
- │ └── useSecureTest.js → orchestration layer
- │
- ├── pages/
- │ └── TestPage.jsx
- │
- └── App.jsx


---

## Running the Project

- npm install
- npm run dev

- Open in Chrome and start the test.

---

## System Workflow

Start Test  
→ Request fullscreen  
→ Activate monitors  
→ Capture events  
→ Persist locally  
→ Batch sync  
→ Lock after submission

---

## Design Principles

- Reliability of audit data  
- Scalability through modular design  
- Clear separation of responsibilities  
- Extensible telemetry framework  
- Minimal coupling with UI  

---

## Assumptions

- Backend API is mocked  
- Attempt ID generated client-side  
- Focus is detection & reporting rather than blocking actions  

---

## Possible Future Enhancements

- Webcam / mic integration  
- Multi-device detection  
- Network anomaly monitoring  
- Encrypted logs  
- Employer analytics dashboard  

---

## Author

Arun



