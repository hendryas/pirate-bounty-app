const route = require('express').Router();

route.get('/', (req, res) => {
    res.render('./index.ejs', { title: 'Welcome to Pirate Bounty' })
})

const pirateRoutes = require('./pirate');
route.use('/pirates', pirateRoutes);

const shipRoutes = require('./ship');
route.use('/ships', shipRoutes);

module.exports = route;