const {app} = require('./server'); // Importa o servidor do arquivo server.js

const PORT = 3000;

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
