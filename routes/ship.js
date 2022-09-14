const shipRoute = require('express').Router();
const { ShipController } = require('../controllers');

shipRoute.get('/', ShipController.getShips);
shipRoute.get('/add', ShipController.pageAddShip);
shipRoute.post('/add', ShipController.addShip);
shipRoute.get('/delete/:id', ShipController.deleteShip);

module.exports = shipRoute;