const {Sequelize} = require('sequelize');
const express = require('express')
const db=require('./config/db')
const app = express()
const path = require('path');
const PORT=process.env.PORT || 9999;
const userRouter=require('./routes/users')

// ADD THIS
var cors = require('cors');
app.use(cors());
app.use(express.json())

tryConnection().then(r =>{
    db.sync()
        .then(() => {
            console.log('Tables created successfully');
        })
        .catch((err) => {
            console.error('Error creating tables: ', err);
        });

    app.listen(PORT,()=>console.log(`Listening to PORT :${PORT}`))
});



app.use(express.static(path.join(__dirname, 'client/build')));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/users',userRouter);

app.get('/',(req,res)=>{
    res.send("Over Here Nothing dey /")
})



/*// Handle all other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});*/


async function tryConnection() {

    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
