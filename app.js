const express = require('express');
const moviesRouter = require('./routes/movies')
const app = express();
const PORT = 3000;


app.use(express.json()); //req.body

app.use('/movies', moviesRouter);

app.listen(PORT, () => console.log('server running on port ' + PORT));