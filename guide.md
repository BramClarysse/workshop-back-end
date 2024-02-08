### Exercise: Building a Simple Express Server

#### Introduction
In this exercise, we will create a simple Express server using JavaScript. Express is a popular web application framework for Node.js, which allows us to easily build web servers and APIs.
 
#### Step 1: Set Up the Project
1. Create a new directory for your project.
2. Inside the project directory, create a new file named `server.js`.

#### Step 2: Install Express
Before we begin coding, we need to install Express. Open your terminal or command prompt and navigate to your project directory. Then, run the following command:
```bash
npm install express
```
  
#### Step 3: Create the Server
Open the `server.js` file you created earlier and add the following code:

```javascript
// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Set the port number
const port = 3000;

//add cors so the requests don't get blocked
const cors = require('cors'); // Import the cors middleware

//allow cors from port 5500
app.use(cors({
    origin: 'http://127.0.0.1:5500'
  }));
```

#### Create route 1 that returns "Hello World!"
```javascript
// Define routes and their corresponding handlers
// Route 1: Hello World
app.get('/helloworld', (req, res) => {
    res.send("Hello World!");
});
```

#### Create route 2 that returns a random number
```javascript
// Route 2: Random Number
app.get('/randomnumber', (req, res) => {
    let random = 0 //generate a random number using the Math utility
    res.json({
        //return the number using a key and value pair
    });
});
```

#### Create route 3 that returns a string length
```javascript
//start from scratch making your own route named 'howlongisthisstring' that takes a parameter in the request.
```
Example:
```javascript
app.get('/users', (req, res) => {
    const name = req.params.name;

    res.json({
        username: name
    });
});
```
#### add the server port where it will listen for requests
```javascript
// Start the server and listen for incoming connections
app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
});
```

#### Step 4: Run the Server
Save the `server.js` file. In your terminal or command prompt, navigate to your project directory and run the following command:
```bash
node server.js
```
You should see the message `Example app is listening on port 3000`, indicating that your server is running.

#### Step 5: Test the Endpoints
Open your web browser or use tools like Postman to test the endpoints we created:
- Open `http://localhost:3000/helloworld` to see "Hello World!" message.
- Open `http://localhost:3000/randomnumber` to get a random number in JSON format.
- Open `http://localhost:3000/howlongisthisstring?string=Hello` to get the length of the string "Hello".

That's it! You've successfully created a simple Express server with multiple endpoints. Experiment with adding more routes and functionalities to enhance your server further. Happy coding!
