const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const movieappRoutes = require('./routes/movieapp.routes');

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(movieappRoutes);

app.use((err, req, res, next)=>{
    return res.json({
        message: err.message
    })
} );

app.listen(3001, ()=>{
    console.log('listening on port 3001');
} );