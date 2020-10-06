'use strict';
const axios = require('axios')
const addActors = async(actors, page) => {
    const res = await axios.get('https://api.themoviedb.org/3/person/popular?api_key=cea68b520beecac6718820e4ac576c3a&append_to_response=credits&language=es-ES&page=' + page);
    const now = new Date();
    const actorsChunk = res.data.results.map(actor => ({
        name: actor.name,
        profile_path: actor.profile_path,
        gender: actor.gender,
        popularity: actor.popularity,
        createdAt: now,
        updatedAt: now
    }))
    actors.push(...actorsChunk);
    return res.data.total_pages
}
module.exports = {
    up: async(queryInterface, Sequelize) => {
        const actors = [];
        const total_pages = await addActors(actors, 1);
        for (let i = 2; i < 100; i++) {
            await addActors(actors, i);
            console.log(i)
        }
        console.log(actors.length);
        await queryInterface.bulkInsert('Actors', actors, {});
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};