// //here is how i set up my project inspired by my triway project;
// mkdir TriWay-Project && cd TriWay-Project
// npm init -y
// npm install express ejs && npm install --save-dev nodemon
// Create .gitignore and add node_modules
// mkdir public views routes controllers models middleware data && mkdir public/css public/js views/partials routes/api
// Create files: touch server.js public/css/style.css public/js/main.js views/*.ejs routes/*.js controllers/*.js models/*.js middleware/*.js data/*.json
// Update package.json: "scripts": { "start": "node server.js", "dev": "nodemon server.js" }
// git init
// npm install
// nodemon index.js or npm run dev for auto-restart
// //did repo : https://github.com/JoanneOs/SBA318.git

// To run this application:

// Install dependencies: npm install express ejs dotenv
// Start server: node server.js
// Access at http://localhost:3000

//summary (Simple Version)
// server.js	Starts the website.
// routes/	Decides what happens when you visit a page.
// views/	The HTML pages (but dynamic with EJS).
// models/	Reads/writes data (like trips.json).
// controllers/	Handles the logic (filtering, updating).
// middleware/	Small helpers (like logging visits).
// hopfully my TriWay Transportation website will be powerful, organized, and easy to expand!

//second day 4/10 opening project then 
// npm install
//npm run dev


const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Example route
app.get('/', (req, res) => {
  res.send('Hello from TriWay!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
