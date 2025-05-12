const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 

dotenv.config();
connectDB();


const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
