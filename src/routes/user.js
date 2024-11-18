const { Router } = require('express'); // Importei o Router
const { userService } = require('../service/user');
const userRouter = Router(); // Instanciei o Router importado

userRouter.get('/:id', userService.findById); // Aqui estamos chamando o id (metodo http) 
userRouter.post('/', userService.createUser); // Aqui estamos criando um usuario novo
//userRouter.patch('/:id', ); // Aqui é para atualizar os dados do ususario
//userRouter.delete('/:id', ); // Aqui estamos excluindo o ususario

exports.userRouter = userRouter;
