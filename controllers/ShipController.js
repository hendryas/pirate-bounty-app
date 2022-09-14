const { Ship } = require('../models');

class ShipController {
    static getShips(req, res) {
        Ship.findAll()
            .then(result => {
                // res.json(result);
                res.render('./shipPage.ejs', { title: 'Ship Management Page', dataShips: result });
            })
            .catch(err => {
                res.json(err);
            })
    }
    static pageAddShip(req, res) {
        res.render('./shipAddPage.ejs', { title: 'Ship Management Page' })
    }
    static addShip(req, res) {
        const { name, type, power } = req.body;
        Ship.create({ name, type, power })
            .then(result => {
                res.redirect('/ships')
            })
            .catch(err => {
                res.json(err);
            })
    }
    static deleteShip(req, res) {
        const id = +req.params.id;

        Ship.destroy({
            where: { id }
        })
            .then(result => {
                if (result === 1) {
                    // res.json({
                    //     message: `Ship with ID ${id} has been deleted`
                    // })
                    res.redirect('/ships');
                } else {
                    res.json({
                        message: `Ship with ID ${id} not found, can't delete`
                    })
                }
            })
            .catch(err => {
                res.json(err);
            })
    }
}
module.exports = ShipController;