const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser=require('body-parser')
const paymentRoute=require('./paymentRoute')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
require('dotenv').config();
const uri = process.env.ATLAS_URI;
    mongoose.connect(uri+ { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/user-hc');
// const usersRouter = require('./routes/users');
// app.use('/exercises',exercisesRouter);
app.use('/users-hc', usersRouter);

//payment integration
app.use(bodyParser.json())
app.use(cors())
app.use('/api',paymentRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});