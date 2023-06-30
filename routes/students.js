// routes/student.js

const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const StudentAuth = require('../models/StudentAuth')
const {v4: uuidv4} = require('uuid');
const nodemailer = require('nodemailer');


// Get all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (error) {
        res.status(500).json({message: 'Error retrieving students'});
    }
});

// Get a single student by ID
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).json({message: 'Student not found'});
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({message: 'Error retrieving student'});
    }
});

// Create a new student
router.post('/', async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({message: 'Error creating student'});
    }
});

// Update a student
router.put('/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).json({message: 'Student not found'});
        }
        await student.update(req.body);
        res.json(student);
    } catch (error) {
        res.status(500).json({message: 'Error updating student'});
    }
});

// Delete a student
router.delete('/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).json({message: 'Student not found'});
        }
        await student.destroy();
        res.json({message: 'Student deleted successfully'});
    } catch (error) {
        res.status(500).json({message: 'Error deleting student'});
    }
});

/*
router.post('/account-registration', async (req, res) => {
    const verificationToken = uuidv4()
    console.log(req.body)
    await StudentAuth.create({verificationToken: verificationToken, keyHash: "20840", email: "info@codeden.org"})

    // Create a transporter object
    const transporter = nodemailer.createTransport({
        host: 'smtp.titan.email',
        port: 587,
        secure: false,
        auth: {
            user: 'info@codeden.org',
            pass: 'bob@Cumulus#4717'
        }
    });

    // Define the email options
    const mailOptions = {
        from: 'info@codeden.org',
        to: 'gracealiko08@gmail.com',
        subject: 'Email Verification',
        html: `
      <html>
        <body>
          <h1>Email Verification</h1>
          <p>Thank you for signing up. Please click the link below to verify your email:</p>
          <a href="https://codeden.org/verify/${verificationToken}">Verify Email</a>
        </body>
      </html>
    `
    };

    // Send the email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Error occurred:', error.message);
            res.json({msg: 'Error sending email'});
        } else {
            console.log('Email sent successfully!');
            console.log('Message ID:', info.messageId);
            res.json({msg: 'Email sent successfully'});
        }
    });

})
*/

router.post('/account-registration', async (req, res) => {
    const {email} = req.body;

    // Check if the email already exists in the database
    const existingUser = await StudentAuth.findByPk(email);
    if (existingUser) {
        return res.json({error: 'Email already exists'});
    }

    const verificationToken = uuidv4();
    console.log(req.body);
    await StudentAuth.create({verificationToken, keyHash: '20840', email, isEmailVerified: false});

    // Create a transporter object
    const transporter = nodemailer.createTransport({
        host: 'smtp.titan.email',
        port: 587,
        secure: false,
        auth: {
            user: 'knustexpresso@codeden.org',
            pass: 'bob@Cumulus#4717'
        }
    });

    // Define the email options
    const mailOptions = {
        from: 'info@codeden.org',
        to: email,
        subject: 'Email Verification',
        html: `
      <html>
        <head>
          <style>
            .verify-button {
              display: inline-block;
              padding: 10px 20px;
              background-color: #4CAF50;
              color: white;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <h1>Email Verification</h1>
          <p>Thank you for signing up. Please click the button below to verify your email:</p>
          <a class="verify-button" href="http://knustexpresso.codeden.org/verify/?token=${verificationToken}">Verify Email</a>
        </body>
      </html>
    `
    };

    // Send the email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Error occurred:', error.message);
            res.json({msg: 'Error sending email'});
        } else {
            console.log('Email sent successfully!');
            console.log('Message ID:', info.messageId);
            res.json({msg: 'Email sent successfully'});
        }
    });
});


// 5. Handling verification route
router.get('/verify/:id', async (req, res) => {
    const {token} = req.params;

    // 6. Find the user with the matching verification token in the database
    const studentAuth = await StudentAuth.findOne({verificationToken: token});

    if (!studentAuth) {
        // Handle invalid or expired verification tokens
        res.status(400).json({message: 'Invalid or expired verification token.'});
        return;
    }

    // 7. Update user account status to indicate email verification
    studentAuth.isEmailVerified = true;
    studentAuth.verificationToken = undefined; // Optional: Clear the verification token after successful verification
    await studentAuth.save();

    // 9. Redirect user to a success page
    res.redirect('https://google.com');
});


/*router.post('/email', (req, res) => {


});*/

module.exports = router;
