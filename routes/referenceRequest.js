// routes/referenceRequest.js

const express = require('express');
const router = express.Router();
const ReferenceRequest = require('../models/ReferenceRequest');

// Get all reference requests
router.get('/', async (req, res) => {
    try {
        const referenceRequests = await ReferenceRequest.findAll();
        res.json(referenceRequests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new reference request
router.post('/', async (req, res) => {
    try {
        const referenceRequest = await ReferenceRequest.create(req.body);
        res.status(201).json(referenceRequest);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get a reference request by ID
router.get('/:id', async (req, res) => {
    try {
        const referenceRequest = await ReferenceRequest.findByPk(req.params.id);
        if (referenceRequest) {
            res.json(referenceRequest);
        } else {
            res.status(404).json({ message: 'Reference request not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a reference request
router.put('/:id', async (req, res) => {
    try {
        const referenceRequest = await ReferenceRequest.findByPk(req.params.id);
        if (referenceRequest) {
            await referenceRequest.update(req.body);
            res.json(referenceRequest);
        } else {
            res.status(404).json({ message: 'Reference request not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a reference request
router.delete('/:id', async (req, res) => {
    try {
        const referenceRequest = await ReferenceRequest.findByPk(req.params.id);
        if (referenceRequest) {
            await referenceRequest.destroy();
            res.json({ message: 'Reference request deleted' });
        } else {
            res.status(404).json({ message: 'Reference request not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
