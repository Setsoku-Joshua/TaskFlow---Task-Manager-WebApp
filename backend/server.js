const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/task-manager';
process.env.JWT_SECRET = process.env.JWT_SECRET || 'task-manager-local-dev-secret';

app.use(express.json());
app.use(cookieParser());
app.use(cors((req, callback) => {
    const allowedOrigins = new Set([
        'http://localhost',
        'http://127.0.0.1',
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'null'
    ]);
    const origin = req.header('Origin');

    callback(null, {
        origin: !origin || allowedOrigins.has(origin),
        credentials: true
    });
}));

mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB Database'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

app.get('/', (req, res) => {
    res.send('Task Manager API is running...');
});

app.get('/api/health', (req, res) => {
    res.json({
        api: 'ok',
        mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'not connected'
    });
});

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
