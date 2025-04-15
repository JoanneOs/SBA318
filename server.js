// // // //here is how i set up my project inspired by my triway project;
// // // mkdir TriWay-Project && cd TriWay-Project
// // // npm init -y
// // // npm install express ejs && npm install --save-dev nodemon
// // // Create .gitignore and add node_modules
// // // mkdir public views routes controllers models middleware data && mkdir public/css public/js views/partials routes/api
// // // Create files: touch server.js public/css/style.css public/js/main.js views/*.ejs routes/*.js controllers/*.js models/*.js middleware/*.js data/*.json
// // // Update package.json: "scripts": { "start": "node server.js", "dev": "nodemon server.js" }
// // // git init
// // // npm install
// // // nodemon index.js or npm run dev for auto-restart
// // // //did repo : https://github.com/JoanneOs/SBA318.git

// // // To run this application:


// // //   git add . && git commit -m "testing driver 1, 2" && git push



// // // Install dependencies: npm install express ejs dotenv
// // // Start server: node server.js
// // // Access at http://localhost:3000

// // //summary (Simple Version)
// // // server.js	Starts the website.
// // // routes/	Decides what happens when you visit a page.
// // // views/	The HTML pages (but dynamic with EJS).
// // // models/	Reads/writes data (like trips.json).
// // // controllers/	Handles the logic (filtering, updating).
// // // middleware/	Small helpers (like logging visits).
// // // hopfully my TriWay Transportation website will be powerful, organized, and easy to expand!

// // //second day 4/10 opening project then 
// // // npm install
// // //npm run dev


// // // const express = require('express');
// // // const app = express();
// // // const PORT = process.env.PORT || 3000;

// // // // Step 1: Bring in Express and other helpful tools
// // // const express = require('express');
// // // const app = express(); // this is our main app
// // // const path = require('path'); // helps with file paths
// // // const dotenv = require('dotenv'); // lets us use secret stuff from .env

// // // // Step 2: Load .env file (for PORT and other private config)
// // // dotenv.config();
// // // const PORT = process.env.PORT || 3000; // default to 3000 if .env is missing

// // // // Step 3: Bring in my custom middlewares
// // // const logger = require('./middleware/logger');

// // // // Step 4: Use middlewares — these run *before* any route
// // // app.use(logger); // log every request to the terminal
// // // app.use(express.json()); // allow JSON data in POST requests
// // // app.use(express.urlencoded({ extended: true })); // allow form data
// // // app.use(express.static(path.join(__dirname, 'public'))); // serve CSS, JS, images, etc

// // // // Step 5: Set up EJS as the view engine (so we can render HTML with data)
// // // app.set('view engine', 'ejs');

// // // // Step 6: Define the main routes of the app
// // // app.use('/', require('./routes/pages')); // all regular pages
// // // app.use('/api/drivers', require('./routes/api/drivers')); // API for drivers
// // // app.use('/api/trips', require('./routes/api/trips')); // API for trips

// // // // Step 7: Handle errors in a nice way
// // // const errorHandler = require('./middleware/errorHandler');
// // // app.use(errorHandler); // this catches errors and sends a friendly message


// // // app.listen(PORT, () => {
// // //   console.log(`Server running at http://localhost:${PORT}`);
// // // });

// // // //node server.js
// // // //Ctrl-C!  stop your servers each time you want to see changes and run again node server.js
// // //  //added .env                     # Environment variables (not tracked in git)  same level as server.js and .gitignore
// // // //  .gitignore	Tells Git to skip certain files	Keeps junk/private stuff out of Git
// // // // .env	Stores secret environment stuff	Lets you keep sensitive info private

// // const express = require('express');
// // const app = express(); // This is our main app
// // const path = require('path'); // Helps with file paths
// // const dotenv = require('dotenv'); // Lets us use secret stuff from .env

// // // Step 1: Load .env file (for PORT and other private config)
// // dotenv.config();
// // const PORT = process.env.PORT || 3000; // Default to 3000 if .env is missing

// // // Step 2: Bring in custom middlewares
// // const logger = require('./middleware/logger');

// // // Step 3: Use middlewares — these run *before* any route
// // app.use(logger); // Log every request to the terminal
// // app.use(express.json()); // Allow JSON data in POST requests
// // app.use(express.urlencoded({ extended: true })); // Allow form data
// // app.use(express.static(path.join(__dirname, 'public'))); // Serve CSS, JS, images, etc.

// // // Step 4: Set up EJS as the view engine (so we can render HTML with data)
// // app.set('view engine', 'ejs');

// // // Step 5: Define the main routes of the app
// // app.use('/', require('./routes/pages')); // Routes for regular pages (views)
// // app.use('/api/drivers', require('./routes/api/drivers')); // API for drivers (check route file)
// // app.use('/api/trips', require('./routes/api/trips')); // API for trips

// // // Step 6: Handle errors in a nice way (middleware)
// // const errorHandler = require('./middleware/errorHandler');
// // app.use(errorHandler); // Catches errors and sends a friendly message

// // // Step 7: Start the server
// // app.listen(PORT, () => {
// //   console.log(`Server running at http://localhost:${PORT}`);
// // });


// // server.js

// const express = require('express');
// const app = express();
// const path = require('path');
// const dotenv = require('dotenv');
// dotenv.config();

// const PORT = process.env.PORT || 3000;

// // Import routes
// const driverPageRoutes = require('./routes/api/drivers');
// const driverApiRoutes = require('./routes/api/drivers');

// // Set up the EJS view engine
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve static files (e.g., CSS, JS)
// app.use(express.static(path.join(__dirname, 'public')));

// // Use routes
// app.use('/drivers', driverPageRoutes);  // Page route for rendering driver info
// app.use('/api/drivers', driverApiRoutes);  // API route for fetching driver data as JSON


// // Use pages.js for handling page routes
// app.use('/', require('./routes/pages')); // routes for pages like index, drivers, trips

// // API routes
// //app.use('/api/drivers', require('./routes/api/drivers'));
// app.use('/api/trips', require('./routes/api/trips'));
// app.use('/api/vehicles', require('./routes/api/vehicles'));

// // Error handling
// const errorHandler = require('./middleware/errorHandler');
// app.use(errorHandler);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });

const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

// Import routes
const driverPageRoutes = require('./routes/pages'); // Routes for page rendering (including driver info)
const driverApiRoutes = require('./routes/api/drivers'); // API routes for drivers data
const tripApiRoutes = require('./routes/api/trips'); // API routes for trips data
const vehicleApiRoutes = require('./routes/api/vehicles'); // API routes for vehicle data


const methodOverride = require('method-override');
app.use(methodOverride('_method')); // Allows PUT/DELETE via POST
// Set up the EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json()); // Allow JSON data in POST requests
app.use(express.urlencoded({ extended: true })); // Allow form data in POST requests
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (CSS, JS, images, etc.)

// Use routes
app.use('/', driverPageRoutes); // Routes for pages like index, drivers, trips
app.use('/api/drivers', driverApiRoutes); // API for drivers
app.use('/api/trips', tripApiRoutes); // API for trips
app.use('/api/vehicles', vehicleApiRoutes); // API for vehicles

// Error handling middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler); // Catch and handle errors

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

