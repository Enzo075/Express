const { userRouter } = require('./user'); // Importei o userRouter

const { Router } = require('express'); // Importei o Router (ele reedireciona para as rotas que serão usadas)
const apiRouter = Router(); // Instanciei o Router importado

apiRouter.use('/user', userRouter); // Emcaminhando as requisições para o roteamento correspondete

module.exports = apiRouter;
