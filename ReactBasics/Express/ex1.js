const express = require('express');
const app = express();
const port = process.env.PORT || 3001; 
const fs = require('fs');
const cors = require('cors');
const arr = [];
app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello world');
});


app.listen(port, () => {
  console.log(`Palvelin käynnissä portissa ${port}`);
});