const connectToDatabase = require('./db');
const dotenv = require('dotenv');
const express = require('express');

dotenv.config({ path: '/home/saini008/Documents/p05_inotebook/config.env' });
connectToDatabase();
const app = express();
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});