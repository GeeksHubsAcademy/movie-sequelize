require('dotenv').config()
const express = require('express');
const moviesRouter = require('./routes/movies');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');
const auth = require('./middleware/auth');
const app = express();
const PORT = 3000;

app.use(express.json()); //req.body

app.get('/', auth, (req, res) => res.send(req.user))

app.use('/movies', moviesRouter);
app.use('/users', usersRouter);

app.use('/orders', auth, ordersRouter);

app.listen(PORT, () => console.log('server running on port ' + PORT));