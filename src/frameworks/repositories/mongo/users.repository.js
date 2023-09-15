const mongoose = require('mongoose');

const entityName = "User";

const {
    schemas: {
        user: userSchema // renaming
    }
} = require('../../database/mongo');

const repository = () => {

    // Schema
    const User = mongoose.model(entityName, userSchema)

    //Crud executables
    return {
        add: async user => {
            const mongoObject = new User(user);
            return mongoObject.save();
        },
        update: async user => {
            const {
                id
            } = user;
            delete user.id;
            return User.findByIdAndUpdate(id, {
                ...user,
                updatedAt: new Date()
            }, {
                new: true
            }).lean();
        },
        delete: async user => {
            const {
                id
            } = user;
            delete user.id;
            return User.findByIdAndUpdate(id, {
                deletedAt: new Date()
            }, {
                new: true
            }).lean();
        },
        getById: async id => {
            return User.findOne({
                _id: id,
                deletedAt: { // ovo je query. Ne zelimo oni kojima je deletedAt:false
                    $exists: false
                }
            })
        }
    }
}

module.exports = repository(); // execution