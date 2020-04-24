const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

// import routes
const dialogFlowRoutes = require('./routes/dialogFlowRoutes');

// app
const app = express();

//middleware
app.use(bodyParser.json());


// routes middleware
app.use('/api', dialogFlowRoutes);


const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Listening at port: ${port}`)
})
