const {app} = require('./server'); // Importa o servidor do arquivo server.js

require('dotenv').config();

// Inicia o servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
