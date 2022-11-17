const userData = require('../data/User');

const getAllUsers = async (req, res, next) => {
    try {

        const userlist = await userData.getUser();
        res.send(userlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await userData.getById(userId);
        res.send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addUser = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await userData.createUser(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const userId =  req.params.id;
        const data = req.body;
        const updated = await userData.updateEvent(userId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userData.deleteEvent(userId);
        res.send(deletedUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}