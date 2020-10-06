'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        const movies = [{
            release_date: "2012-04-25",
            id: 24428,
            vote_average: 7.7,
            title: "Los Vengadores",
            overview: "Cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial, Nick Fury, director de la Agencia SHIELD, decide reclutar a un equipo para salvar al mundo de un desastre casi seguro. Adaptación del cómic de Marvel \"Los Vengadores\", el legendario grupo de superhéroes formado por Ironman, Hulk, Thor y el Capitán América entre otros.",
            poster_path: "\/tyKKKSvjEgDVQ6vtm8vzL5Zx06c.jpg",
            createdAt: new Date(),
            updatedAt: new Date()
        }];

        await queryInterface.bulkInsert('Movies', movies, {});
    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Movies', null, {});
    }
};