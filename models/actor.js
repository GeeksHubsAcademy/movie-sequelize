'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Actor extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsToMany(models.Movie, { through: models.ActorMovie });
        }
    };
    Actor.init({
        name: DataTypes.STRING,
        gender: DataTypes.INTEGER,
        profile_path: DataTypes.STRING,
        popularity: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'Actor',
    });
    return Actor;
};