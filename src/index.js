const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:5173', 
  }));
// app.use(bodyParser.json());
app.use(express.json());


const referralRoutes = require('./routes/referralRoutes');
app.use('/api/referrals', referralRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
