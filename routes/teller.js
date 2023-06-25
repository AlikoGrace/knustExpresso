// routes/student.js

const express = require('express');
const axios = require('axios');
const router = express.Router();
const Student = require('../models/Student');
const StudentAuth = require('../models/StudentAuth')
const {v4: uuidv4} = require('uuid');
const nodemailer = require('nodemailer');
const PAYSTACK_SECRET_KEY = 'sk_live_20a17270c56f71eeb3b8dced173f3c31dc49accd';




// Endpoint for creating a payment request
router.post('/create-payment', async (req, res) => {
    const { amount, email, callbackUrl } = req.body;

    try {
        const response = await axios.post(
            'https://api.paystack.co/transaction/initialize',
            {
                amount,
                email,
                callback_url: callbackUrl,
            },
            {
                headers: {
                    Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        const { data } = response;
        res.json({ paymentUrl: data.data.authorization_url });
    } catch (error) {
        console.error('Error creating payment request:', error.message);
        res.status(500).json({ error: 'Failed to create payment request' });
    }
});


// Endpoint for creating a payment request
router.post('/callback', async (req, res) => {
    console.log(req.body)
    console.log(req)
    res.send("Received");
});

// Endpoint for creating a payment request
router.get('/callback', async (req, res) => {
    console.log(req.body)
     console.log(req)
    res.send("Received");
});




module.exports = router;
