const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // Desativa logs no console
});

module.exports = sequelize;

