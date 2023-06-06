// routes/department.js

const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

// Get all departments
router.get('/', async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.json(departments);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving departments' });
    }
});

// Get a single department by ID
router.get('/:id', async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }
        res.json(department);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving department' });
    }
});

// Create a new department
router.post('/', async (req, res) => {
    try {
        const department = await Department.create(req.body);
        res.status(201).json(department);
    } catch (error) {
        res.status(500).json({ message: 'Error creating department' });
    }
});

// Update a department
router.put('/:id', async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }
        await department.update(req.body);
        res.json(department);
    } catch (error) {
        res.status(500).json({ message: 'Error updating department' });
    }
});

// Delete a department
router.delete('/:id', async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }
        await department.destroy();
        res.json({ message: 'Department deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting department' });
    }
});

module.exports = router;
