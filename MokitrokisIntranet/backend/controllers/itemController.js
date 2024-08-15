// backend/controllers/itemController.js
const Item = require('../models/itemModel');

exports.getAllItems = (req, res) => {
    Item.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

exports.getItemById = (req, res) => {
    const id = req.params.id;
    Item.getById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(result[0]);
    });
};

exports.createItem = (req, res) => {
    const newItem = {
        name: req.body.name,
        description: req.body.description
    };
    Item.create(newItem, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId, ...newItem });
    });
};

exports.updateItem = (req, res) => {
    const id = req.params.id;
    const updatedItem = {
        name: req.body.name,
        description: req.body.description
    };
    Item.update(id, updatedItem, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ id, ...updatedItem });
    });
};

exports.deleteItem = (req, res) => {
    const id = req.params.id;
    Item.delete(id, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(204).send();
    });
};
