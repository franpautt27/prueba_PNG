const express = require('express');
const app = express();
const morgan = require('morgan');

const movieappRoutes = require('./routes/movieapp.routes');

app.use(morgan("dev"));
app.use(express.json());

app.use(movieappRoutes);

app.listen(3001, ()=>{
    console.log('listening on port 3001');
} );