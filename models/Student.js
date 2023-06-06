// models/Student.js

const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Student = db.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departmentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    graduationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    photoUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Student;
