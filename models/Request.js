// models/Request.js

const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Request = db.define('Request', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    requestType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    requestId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Request;
