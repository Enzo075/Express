const {app} = require('./server'); // Importa o servidor do arquivo server.js

require('dotenv').config();

const sequelize = require('./db/database');

// Caso você tenha models para sincronizar com o banco de dados
// você pode usar a linha abaixo opcionalmente, se necessário
sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar modelos:', error);
  });

// Inicia o servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});
