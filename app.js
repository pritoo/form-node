const express = require('express');
const app = express();
const port =8080;
require('./config/db')

app.use('./users',require('./routes/userRoutes'));

app.listen(port,()=>{
    console.log(`app is listning at ${port}`);
})