const pool = require('../db');

const getAllMovies = async (req, res) => {
    try {
        const allMovies = await pool.query("SELECT * FROM movies");
        res.send(allMovies.rows);
    } catch (error) {
        console.log(error.message);
    }
}

const getMovie = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await pool.query("SELECT * FROM movies WHERE id = $1",[id]);
        if(result.rows.length === 0){
            return res.status(404).json({
                "message": "Movie Not Found"
            })
            
        }
        res.json(result.rows[0]);
        console.log(result);
        res.send("retrieving a specific movie");
    } catch (error) {
        console.log(error.message);
    }
}

const createMovie = async (req, res) => {
    const {movieName, movieLanguage, synopsis} = req.body;
    
    try {
        const result = await pool.query("INSERT INTO movies (movieName, movieLanguage, synopsis) VALUES ($1, $2, $3) RETURNING *",[
            movieName, 
            movieLanguage, 
            synopsis
        ]);
        
        res.json(result.rows[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
}

const deleteMovie = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const result = await pool.query("DELETE FROM movies WHERE id = $1", [id]);
    if(result.rowCount === 0) return res.status(404).json({
        message: "Movie Not Found"
    })
    
    return res.sendStatus(204);
}

const updateMovie = async (req, res) => {
    const { id } = req.params;
    const { movieName, movieLanguage, synopsis } = req.body;
    const result = await pool.query("UPDATE movies SET movieName = $1, movieLanguage = $2, synopsis = $3 WHERE id = $4 RETURNING *",[movieName,movieLanguage, synopsis, id])
    if(result.rows.length === 0) return res.status(404).json({
        message: "Movie Not Found"
    })
    console.log(result);
    return res.json(result.rows[0]);
}

module.exports = {
    getAllMovies,
    getMovie,
    createMovie,
    deleteMovie,
    updateMovie
}