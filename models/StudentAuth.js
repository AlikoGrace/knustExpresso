// models/StudentAuth.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const StudentAuth = sequelize.define('StudentAuth', {
    studentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    keyHash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = StudentAuth;
