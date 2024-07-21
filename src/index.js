const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.use(cors({
    origin: 'http://localhost:5173', 
  }));

app.use(express.json());


const referralRoutes = require('./routes/referralRoutes');
app.use('/api/referrals', referralRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
