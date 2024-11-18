const User = require("../models/user"); // importando o User que está dentro do models

const findById = async (req, res) => {
    console.log("🚀 ~ findById ~ req:", req)
    try {
        const userId = req.params.id;
        console.log("🚀 ~ findById ~ userId:", userId)
        const user = await User.findByPk(userId); //  Await - não faz nada até retornar qualquer informação desde erro até a informação que procuro
        console.log("🚀 ~ findById ~ user:", user)
        res.status(200).json(user); // Retorna o valor de user no formato json
    } catch (error) {
        res.status(500).json({status: 'error', message: 'Erro ao buscar o Usuario', error})
    }
    
} // async - consegue realizar requecições ao mesmo tempo, req - vai ser todo o coropo da requisição (solicitação) (como por exemplo o id), res - response é a resposta da sua aplicação, mas não está intricicamente ligado ao "req"

const createUser = async (req, res) => {
    console.log("🚀 ~ createUser ~ req:", req)
    try {
        const userData = req.body;
        console.log("🚀 ~ createUser ~ userData:", userData)
        const user = await User.create(userData); //  Await - não faz nada até retornar qualquer informação desde erro até a informação que procuro
        console.log("🚀 ~ createUser ~ user:", user)
        res.status(200).json(user); // Retorna o valor de user no formato json
    } catch (error) {
        res.status(500).json({status: 'error', message: 'Erro ao criar o Usuario', error})
    }
    
}


exports.userService = {
    findById, createUser
};
