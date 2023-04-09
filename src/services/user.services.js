const Users = require("../models/user.models");


class UserServices {

    static async getUser(email) {
        try {
            const user = await Users.findOne({
                where: { email }
            })
            return user
        } catch (error) {
            throw error;
        }
    }

    static async create(newUser) {
        try {
            const userCreated = await Users.create(newUser);
            return userCreated;
        } catch (error) {
            throw error;
        }
    }

    static async update(id,  { username, avatar }) {
        try {
            const userUpdate = await Users.update( { username, avatar } ,{
                where: { id },
            })
            return userUpdate;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = UserServices;
