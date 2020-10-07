'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.addColumn('users', 'confirmed', {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        });
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.removeColumn('users', 'confirmed');
    }
};