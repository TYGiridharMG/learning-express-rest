const express = require('express');
const feedRoutes = require('./routes/feed');
const cors = require('cors');

const app = express();
app.use(cors({
    allowedHeaders: '*',
    origin: '*',
    methods: '*',
    credentials: 'true'
}))
app.use('/feed', feedRoutes);
app.listen(3000);