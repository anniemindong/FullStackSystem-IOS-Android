const express = require('express');
const mongoose = require('mongoose')

const app = express();

app.use(express.json());

const authRoutes = require('./routes/auth');
const verifyToken = require('./routes/verifyToken');

app.get('/', (req, res) => {
    res.send('Welcome to the auth system');
})

app.get('/api/user/profile', verifyToken, (req, res) => {
    console.log(req.user)
    res.send({success:true, data:req.user});
})

app.use('/api/users', authRoutes);
    mongoose.connect('mongodb+srv://king_auth:7KckJMsEXKqhV8u@cluster0.f7nsr.mongodb.net/auth_system?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(3000, () => console.log('Server is running'));
    })
    .catch(err => console.log(err))

