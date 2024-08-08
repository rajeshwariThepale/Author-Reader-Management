const bodyParser = require('body-parser');
const express = require('express');
const connectDB = require("./config/db");
const apiRoutes = require("./routes/api");

const app = express();

//db connection
connectDB();

// middleware
app.use(bodyParser.json());
app.use('/api', apiRoutes);

const PORT = 5007;
app.listen(PORT,()=>
    console.log(`server is running at ${PORT}`));