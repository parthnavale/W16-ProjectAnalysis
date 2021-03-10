# Online Examination APP

## Prerequisites

* Install Node js from [Node.js](http://nodejs.org/) (with NPM).
* Install XAMP or WAMP which can be used to run phpMyAdmin for MySQL DB.
* Any text editor for project like `visual studio code`, `sublime`, `atom`, etc.

## Running the projects

### Frontend

* Open terminal and navigate to this directory `online-examination-frontend`
* execute command `npm install`
* Once installed, execute command `npm start`
* The above command will run the frontend and open the browser automatically.
* If it does not open, visit `http://localhost:3000/` to see the frontend app.

### Backend
 
* Open terminal and navigate to this directory `online-examination-backend`
* After navigating, Open `.env` file from the root of this directory.
* Set up your phpMyAdmin credentials in it and save it.
* execute command `npm install`
* Once installed, execute command `npm start`
* The above command will run the backend.
* You can check it by visiting the url `http://localhost:8000`.
* Navigate to the `API_test.rest` file which contains all the endpoints for the backend.


## Setting up database
* After running the app using `npm start`, follow the below steps.
* Navigate to the `API_test.rest` file which contains all the endpoints for the backend.
* To setup the database and tables, hit the following endpoint `http://localhost:8000/api/auth/setupDatabaseAndTables` in your browser or directly from the `.rest` file.
* The above endpoint will create the database and all the necessary tables need for the app with predefined data.
* Navigate to the phpMyAdmin and look for the database called `examination_app`.
* If the databse endpoint fails, check your phpMyAdmin config in the `.env` file or follow the below steps.
* If fails, create a db called `examination_app` in the phpMyAdmin. Import the file `examination_app.sql` located at the root of the repository in a folder called `database`.

