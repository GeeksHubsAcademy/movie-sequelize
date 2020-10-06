const express = require('express');
const moviesRouter = require('./routes/movies');
const usersRouter = require('./routes/users');
const app = express();
const PORT = 3000;


app.use(express.json()); //req.body

app.use('/movies', moviesRouter);
app.use('/users', usersRouter)

app.listen(PORT, () => console.log('server running on port ' + PORT));