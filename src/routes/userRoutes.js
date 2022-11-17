const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();

router.get('/user', userController.getAllEvents);
router.get('/user/:id', userController.getEvent);
router.post('/user', userController.addEvent);
router.put('/user/:id', userController.updatEvent);
router.delete('/user/:id', userController.deleteEvent);

module.exportes = {
    routes: router
}