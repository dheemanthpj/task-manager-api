require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Root route for base URL
app.get('/', (req, res) => {
  res.send('Task Manager API is running.');
});

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch(err => console.error('DB connection error:', err));
