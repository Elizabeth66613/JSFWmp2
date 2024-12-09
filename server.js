// Using Express for handling HTTP requests.
import express from 'express';

// Using Mongoose to interact with MongoDB.
import mongoose from 'mongoose';

// Using "dotenv" package for loading the environment variable from the .env file
// this variable contains the MongoDB connection URI
import dotenv from 'dotenv';

// Import the create employee route
import createLipstickRoute from './routes/createLipstick.js';

// Loading environment variable(s) from the .env file
dotenv.config();

// Initialize express app (Creating an instance of the Express app)
const server = express();

// Middleware for JSON (Middleware to parse JSON requests):
/* 
Using middleware to parse incoming JSON requests,
we included express.json() to parse incoming JSON requests, 
which is necessary for handling POST (Create), PUT (Update) requests
*/
server.use(express.json());

// MongoDB URI from environment variables
const mongoURI = process.env.MONGO_URI;

const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
    res.send("vvbhbhoi");
});

// MongoDB connection
async function main() {
    try {
        // Using the mongoose.connect() method to connect to MongoDB with the URI
        await mongoose.connect(mongoURI);
        console.log("It's fine");

        // Mongoose 6+ does not require useNewUrlParser or useUnifiedTopology
        // await mongoose.connect(mongoURI);

        // For testing: Print a message to confirm connection
        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        // Exit the process if MongoDB connection fails:
        process.exit(1);
    }
}

// Call the function to connect to the database
main();

server.use('/api/lipsticks', createLipstickRoute); // For creating a new employee record


// Or adding the full structure with error handling:
server.listen(port, () => {
    console.log(`Application URL: http://localhost:${port}`);
}).on('error', (err) => {
    console.error('Server loading error:', err);
    process.exit(1); // Exit with code "1" for errors for any issue
});

/* 
This will include the .env file in our application process (process.env)
So later we can access it like "process.env.VARIABLE_NAME" in your code
*/





