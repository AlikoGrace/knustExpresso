// routes/student.js

const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Get all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving students' });
    }
});

// Get a single student by ID
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving student' });
    }
});

// Create a new student
router.post('/', async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error creating student' });
    }
});

// Update a student
router.put('/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        await student.update(req.body);
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error updating student' });
    }
});

// Delete a student
router.delete('/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        await student.destroy();
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student' });
    }
});

module.exports = router;
