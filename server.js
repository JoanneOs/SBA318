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


//   git add . && git commit -m "control trips" && git push



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


// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// Step 1: Bring in Express and other helpful tools
const express = require('express');
const app = express(); // this is our main app
const path = require('path'); // helps with file paths
const dotenv = require('dotenv'); // lets us use secret stuff from .env

// Step 2: Load .env file (for PORT and other private config)
dotenv.config();
const PORT = process.env.PORT || 3000; // default to 3000 if .env is missing

// Step 3: Bring in my custom middlewares
const logger = require('./middleware/logger');

// Step 4: Use middlewares — these run *before* any route
app.use(logger); // log every request to the terminal
app.use(express.json()); // allow JSON data in POST requests
app.use(express.urlencoded({ extended: true })); // allow form data
app.use(express.static(path.join(__dirname, 'public'))); // serve CSS, JS, images, etc


// Step 5: Set up EJS as the view engine (so we can render HTML with data)
app.set('view engine', 'ejs');

// Step 6: Define the main routes of the app
app.use('/', require('./routes/pages')); // all regular pages
app.use('/api/drivers', require('./routes/api/drivers')); // API for drivers
app.use('/api/trips', require('./routes/api/trips')); // API for trips


//   git add . && git commit -m "error handler" && git push


// Step 7: Handle errors in a nice way
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler); // this catches errors and sends a friendly message

// route
// app.get('/', (req, res) => {
//   res.send('Hello from Triway Transportation!');
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

//node server.js
//Ctrl-C!  stop your servers each time you want to see changes and run again node server.js
 //added .env                     # Environment variables (not tracked in git)  same level as server.js and .gitignore
//  .gitignore	Tells Git to skip certain files	Keeps junk/private stuff out of Git
// .env	Stores secret environment stuff	Lets you keep sensitive info private