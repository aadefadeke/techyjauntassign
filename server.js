
// THE DEPENDENCIES 
require('dotenv').config();
const express = require('express'); 
const morgan = require('morgan');
const connectDB = require('./config/db');
const itemRoutes = require('./src/routes/itemRoutes');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();

// Basic middleware that connects requests to response
app.use(express.json());
app.use(morgan('dev'));

// Routes : Routing
app.use('/api/items', itemRoutes);

// Error handler (centralized)
app.use(errorHandler);

// Start server after DB connection using app.listen that listens to the 4 digit port number
const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });
