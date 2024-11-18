const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // Desativa logs no console
});

(async () => {
    try {
      await sequelize.authenticate();
      console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
    } catch (error) {
      console.error('Erro ao conectar com o banco de dados:', error);
    }
  })();
  
module.exports = sequelize;


