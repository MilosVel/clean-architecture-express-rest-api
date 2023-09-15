const addUserUseCase = require('./addUser.useCase');
const getUserByIdUseCase = require('./getUserById.useCase');
const updateUserUseCase = require('./updateUser.useCase');
const deleteUserUseCase = require('./deleteUser.useCase');

module.exports = { // kroiste se u testovima (user.test.js) ...
    addUserUseCase,
    getUserByIdUseCase,
    updateUserUseCase,
    deleteUserUseCase
}