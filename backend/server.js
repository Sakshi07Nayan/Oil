const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const passport = require('passport');
const userRoutes = require('./routes/userRoute')
const cors = require('cors');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Passport config
require('./config/passport')(passport);
app.use(passport.initialize());

// Connect to MongoDB
require('./config/db')();

// Routes
app.use('/api/user', userRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
