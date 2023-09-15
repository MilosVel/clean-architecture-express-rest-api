const express = require('express');

const {
    userControllers
} = require('../../../controllers');

module.exports = dependencies => {
    const router = express.Router()
    const {
        addUserController,
        getUserByIdController,
        updateUserController,
        deleteUserController
    } = userControllers(dependencies); //  poziv funkcije sa (dependecies)

    router.route('/').post(addUserController).delete(deleteUserController).put(updateUserController);
    router.route('/:id').get(getUserByIdController);

    return router;
}