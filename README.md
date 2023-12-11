# Metropolia Attendance Tracker

## Overview
Metropolia Attendance Tracker is a web application designed for teachers at Metropolia to manage course attendances. It allows teachers to create courses, add students, and collect attendances through a manual process or a scannable, refreshing QR code. Additionally, it offers functionalities like modifying attendance data, managing student participation in specific topics, deactivating courses, and exporting attendance data.

## Technologies
- Frontend: Vite JS, React JS, Tailwind CSS
- Backend: Express JS, Mongoose, MongoDB

## Features
- **Course Management**: Teachers can create and deactivate courses.
- **Student Management**: Add students to courses.
- **Attendance Tracking**: Collect attendances manually or via QR codes.
- **Data Modification**: Modify attendance and participation data for courses.
- **Data Export**: Export data in PDF or Excel format.
- **Student Dashboard**: Students can log in, scan QR codes to attend sessions, and view their participation rates.

## Getting Started
Clone or Download the Main branch

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository
    git clone https://github.com/Lasnaoloprojekti/Main

3. Install dependecies
   Npm install

4. Run the /StudentServer
   node or nodemon index.js

5. Run /Server
   node or nodemon index.js

6. Run StudentAttendanceTracker before ClassAttendanceTracker 
   npm run dev

   now run  /ClassAttendanceTracker npm run dev
   
