const {
    Movie,
    Actor
} = require('../models');

const MovieController = {

    getAll(req, res) {
        const query = req.query;
        Movie.findAll({
                limit: +query.limit,
                include: [Actor]
            })
            .then(movies => res.send(movies))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get movies'
                })
            })
    }
}

module.exports = MovieController;