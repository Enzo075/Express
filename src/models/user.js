const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importa a instância do Sequelize configurada

const User = sequelize.define('User', {
    // Definição dos campos da tabela
    name: {
        type: DataTypes.STRING,
        allowNull: false, // Nome é obrigatório
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, // Email é obrigatório
        unique: true, // Garante que não haverá emails duplicados
        validate: {
            isEmail: true, // Validação para garantir que o valor é um email
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false, // Senha é obrigatória
    },
}, {
    // Opções adicionais do Sequelize
    tableName: 'users', // Nome da tabela no banco
    timestamps: true, // Adiciona createdAt e updatedAt automaticamente
});

module.exports = User;
