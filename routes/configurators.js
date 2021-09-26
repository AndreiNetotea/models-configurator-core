const express = require('express');
const router = express.Router();
const Configurator = require('../models/configurator');

router.get('/', async (req, res) => {
    try {
        const configs = await Configurator.find();
        res.status(200).json(configs)
    }catch(err) {
        res.status(400).json({message: err});
    };
    res.send('We are configurators');
});

router.get('/:configId', async (req, res) => {
    try {
        const config = await Configurator.findById(req.params.configId);
        res.status(200).json(config);
    }catch(err) {
        res.status(400).json({message: err});
    };
    res.send('We are configurators');
});

router.post('/', async (req, res) => {
    const config = new Configurator({
        name: req.body.name,
        description: req.body.description
    });

    try {
        const saveConfig = await config.save();
        res.status(200).json(saveConfig);
    } catch(err) {
        res.status(400).json({message: err});
    };
});

router.put('/:configId', async (req, res) => {
    const updatedConfig = req.body;

    try {
        const saveConfig = await Configurator.updateOne(
            { _id: req.params.configId },
            {$set: req.body }
            )
        res.status(200).json(saveConfig);
    } catch(err) {
        res.status(400).json({message: err});
    };
});

router.delete('/:configId', async (req, res) => {
    try {
        const removedConfig = await Configurator.remove({ _id: req.params.configId });

        res.status(200).json(removedConfig);
    }catch(err) {
        res.status(400).json({message: err});
    };
    res.send('We are configurators');
});



module.exports = router;