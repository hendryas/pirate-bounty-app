const pirateRoute = require('express').Router();
const { PirateController } = require('../controllers');

pirateRoute.get('/', PirateController.getPirates);
pirateRoute.get('/add', PirateController.pageAddPirate);
pirateRoute.post('/add', PirateController.addPirate);
pirateRoute.get('/delete/:id', PirateController.deletePirate);

module.exports = pirateRoute;