// routes/student.js

const express = require('express');
const axios = require('axios');
const router = express.Router();
const {v4: uuidv4} = require('uuid');
const PAYSTACK_SECRET_KEY = 'sk_live_20a17270c56f71eeb3b8dced173f3c31dc49accd';




// Endpoint for creating a payment request
router.post('/create-payment', async (req, res) => {
    const { amount, email, callbackUrl, requestId, studentId } = req.body;

    try {
        const response = await axios.post(
            'https://api.paystack.co/transaction/initialize',
            {
                amount,
                email,
                callback_url: callbackUrl,
                metadata: {
                    request_id: requestId, // Include the request ID in the metadata
                    student_id: studentId, // Include the Student ID in the metadata
                },
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


/*// Callback route for processing the Paystack callback
router.post('/callback', (req, res) => {
    try {
        const transactionDetails = req.body; // Retrieve the callback data from the request body
        const {id,reference,amount,paid_at:date,status} = transactionDetails.data; // Extract the order ID from the metadata
        const requestId = transactionDetails.data.metadata.request_id; // Extract the order ID from the metadata
        const studentId = transactionDetails.data.metadata.student_id; // Extract the order ID from the metadata

        console.log(req.body)
        // Update your database or internal records with the payment details and associate it with the order ID
        // Store transactionDetails and orderId in your database for reference and tracking

        res.json({ success: true }); // Send a response indicating successful processing of the callback
    } catch (error) {
        console.error('Callback processing error:', error);
        // Handle any error that occurred during callback processing
        res.status(500).json({ success: false, error: 'Callback processing failed' });
    }
});*/

const Payment = require('../models/Payment');

// Callback route for processing the Paystack callback
router.post('/callback', async (req, res) => {
    try {
        const transactionDetails = req.body; // Retrieve the callback data from the request body
        const {
            id,
            reference,
            amount,
            paid_at: date,
            status,
        } = transactionDetails.data;
        const requestId = transactionDetails.data.metadata.request_id;
        const studentId = transactionDetails.data.metadata.student_id;

        // Update your database or internal records with the payment details and associate them with the order ID
        await Payment.create({
            paystackId:id,
            paystackReference:reference,
            requestId,
            amount,
            studentId,
            date,
            status
        });

        res.json({ success: true }); // Send a response indicating successful processing of the callback
    } catch (error) {
        console.error('Callback processing error:', error);
        // Handle any error that occurred during callback processing
        res.status(500).json({ success: false, error: 'Callback processing failed' });
    }
});


// Endpoint for creating a payment request
router.get('/callback', async (req, res) => {
    console.log(req.body)
     console.log(req)
    res.send("Received");
});




module.exports = router;
