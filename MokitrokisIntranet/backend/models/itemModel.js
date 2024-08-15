// backend/models/itemModel.js
const db = require('../config/db');

const Item = {
    getAll: (callback) => {
        const query = 'SELECT * FROM items';
        db.query(query, callback);
    },
    getById: (id, callback) => {
        const query = 'SELECT * FROM items WHERE id = ?';
        db.query(query, [id], callback);
    },
    create: (data, callback) => {
        const query = 'INSERT INTO items (name, description) VALUES (?, ?)';
        db.query(query, [data.name, data.description], callback);
    },
    update: (id, data, callback) => {
        const query = 'UPDATE items SET name = ?, description = ? WHERE id = ?';
        db.query(query, [data.name, data.description, id], callback);
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM items WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Item;
