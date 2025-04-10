👩‍💻 What are we doing?
We’re building a website that acts like a control center for a trucking company called TriWay. This website helps managers and drivers see important stuff like trip info, who’s driving, and where trucks are going.
But this isn’t just a regular website like YouTube or Roblox — we’re building it from scratch using Node.js and Express, which is like using LEGO blocks for websites, but with code!
🧱 What’s in our project (the folders and files)?
We organized our project like a school backpack with different folders to keep things neat:
controllers/ – This is like the brain of the website. It decides what to do when someone clicks a button or asks for info.
models/ – This is like the notebook where we keep all the info, like trips and drivers.
routes/ – These are the directions that tell the website, “Hey! If someone goes to this page, show them this info.”
views/ – These are the actual pages people see, like the home page, driver portal, and manager portal.
middleware/ – These are helpers that check things like passwords, errors, and keep logs (like little hall monitors).
public/ – This is where we keep decorations! Colors, pictures, and scripts to make the page look and feel nice.
data/ – This is where we keep our pretend data, like a little database in a file.
server.js – This is the main switch that turns everything on.
📋 What is the goal?
We’re making a mini version of a real company’s website. Managers can add, update, and delete trips. Drivers can log in and see their info. And we’ll even make sure errors are handled nicely, like “Oops! That page doesn’t exist.”

This project is a transportation management system for TriWay that uses the Express MVC (Model-View-Controller) architecture. It allows you to manage drivers and trips dynamically. We’ve set up a backend server that fetches data from local JSON files and displays them on dynamic pages.
Table of Contents

Project Setup
File Structure
Dynamic Pages
Driver Page
Manager Page
Running the Project
Tech Stack
How to Contribute
Project Setup

Follow these steps to get started:
Clone the repository:
git clone https://github.com/JoanneOs/TriWay-Project.git
cd TriWay-Project
Install dependencies:
npm install
Create .env file: Add any environment variables (like PORT or database credentials) if needed.
Start the development server:
npm run dev
Access the app at http://localhost:3000
File Structure

TriWay-Project/
├── .env
├── .gitignore
├── README.md
├── controllers/
│   ├── driversController.js
│   ├── tripsController.js
├── data/
│   ├── drivers.json      # Data for all drivers
│   ├── trips.json        # Data for all trips
├── middleware/
│   ├── auth.js           # Authentication middleware
│   ├── errorHandler.js   # Custom error handler
│   ├── logger.js         # Logger middleware
├── models/
│   ├── Driver.js         # Model for Driver
│   ├── Trip.js           # Model for Trip
├── package.json
├── public/
│   ├── css/
│   ├── images/
│   ├── js/
├── routes/
│   ├── api/
│   │   ├── drivers.js    # API routes for drivers
│   │   ├── trips.js      # API routes for trips
│   ├── pages.js          # Routes to render pages (driver, manager, etc.)
├── server.js             # Main server file
├── views/
│   ├── driver.ejs        # Driver page to list drivers
│   ├── error.ejs         # Error page
│   ├── index.ejs         # Homepage
│   ├── manager.ejs       # Manager page to view trips
│   ├── partials/
│   │   ├── footer.ejs    # Footer partial
│   │   ├── header.ejs    # Header partial
│   │   ├── nav.ejs       # Navigation partial
Dynamic Pages

Driver Page
The driver.ejs page dynamically lists all drivers. It fetches data from the drivers.json file.
Route: /drivers
Logic in routes/pages.js:
router.get('/drivers', (req, res) => {
  res.render('driver', { drivers });
});
Rendering in views/driver.ejs:
<ul>
  <% drivers.forEach(driver => { %>
    <li>
      <strong><%= driver.name %></strong> – <%= driver.licenseNumber %>
    </li>
  <% }) %>
</ul>
Manager Page
The manager.ejs page displays a table of all trips with driver names, destinations, and dates. It pulls the data from the trips.json file.
Route: /manager
Logic in routes/pages.js:
router.get('/manager', (req, res) => {
  res.render('manager', { trips });
});
Rendering in views/manager.ejs:
<table>
  <thead>
    <tr>
      <th>Driver</th>
      <th>Destination</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <% trips.forEach(trip => { %>
      <tr>
        <td><%= trip.driverName %></td>
        <td><%= trip.destination %></td>
        <td><%= trip.date %></td>
      </tr>
    <% }) %>
  </tbody>
</table>
Running the Project

Install dependencies: Run npm install to install the required packages.
Start the server: Use npm run dev to start the server with nodemon. This automatically restarts the server when changes are made.
Visit: Open your browser and go to http://localhost:3000 to see the app in action.
Tech Stack

Backend: Node.js, Express.js
View Engine: EJS (Embedded JavaScript templating)
Data Storage: JSON files (can be swapped with a database in the future)
Development Tools: Nodemon for auto-restarting the server during development
How to Contribute

Fork the repo and create a new branch.
Make your changes and test them.
Create a pull request with a description of your changes.