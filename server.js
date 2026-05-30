const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB Database'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

    app.get('/', (req, res) => {
    res.send('Task Manager API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const authRoutes = require('./routes/authRoutes');

app.use('/api/auth', authRoutes);

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes'); 

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes); 