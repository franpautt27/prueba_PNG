const { Router } = require('express');
const { getAllMovies, getMovie, createMovie, deleteMovie, updateMovie } = require('../controllers/movieapp.controller');


const router = Router();

router.get("/movies", getAllMovies);

router.get("/movies/:id", getMovie );

router.post("/movies", createMovie);


router.delete("/movies/:id", deleteMovie);

router.put("/movies/:id", updateMovie);


module.exports = router;