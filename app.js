import express from 'express';
import { connect } from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from "./routes/authRoutes.js"

dotenv.config();

const app = express();
const port = 3000;
// middleware
app.use(express.static("public"));
app.use(express.json());

//view engine
app.set('view engine', "ejs");

// MongoDB connection string
const uri = process.env.DB_URI;

if (!uri) {
    console.error('Error: DB_URI is not defined in the environment variables');
    process.exit(1);
}

// database connection
connect(uri)
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }).catch((error) => {
        console.error('MongoDB connection error:', error);
    });



// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes)