'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };

    User.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        token: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    User.prototype.toJSON = function() { //override/sobreescritura del método
        var values = this.get();
        delete values.password;
        return values;
    }
    return User;
};