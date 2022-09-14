const { Pirate } = require('../models');
const { Ship } = require('../models');

class PirateController {
    static getPirates(req, res) {
        Pirate.findAll()
            .then(result => {
                res.render('./piratePage.ejs', { title: 'Pirate Management Page', dataPirates: result })
            })
            .catch(err => {
                res.json(err);
            })
    }
    static pageAddPirate(req, res) {
        Ship.findAll()
            .then(result => {
                res.render('./pirateAddPage.ejs', { title: 'Pirate Management Page', dataShips: result })
            })
            .catch(err => {
                res.json(err);
            })
    }
    static addPirate(req, res) {
        let { name, idShip, status, type, bounti } = req.body;

        let id_ship = +idShip;
        let bounty = +bounti;
        Pirate.create({ id_ship, name, status, type, bounty })
            .then(result => {
                res.redirect('/pirates');
            })
            .catch(err => {
                res.json(err);
            })
    }
    static deletePirate(req, res) {
        const id = +req.params.id;

        Pirate.destroy({
            where: { id }
        })
            .then(result => {
                if (result === 1) {
                    res.redirect('/pirates');
                } else {
                    res.json({
                        message: `Pirate with ID ${id} not found, can't delete`
                    })
                }
            })
            .catch(err => {
                res.json(err);
            })
    }
}

module.exports = PirateController;