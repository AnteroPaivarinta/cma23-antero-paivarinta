const express = require('express');
const app = express();
const port = process.env.PORT || 3001; 
const fs = require('fs');
const cors = require('cors');
const arr = [];
fs.readFile('notes-db.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Virhe luettaessa JSON-tiedostoa:', err);
      return;
    }
    const jsonData = JSON.parse(data);
    jsonData.forEach((todo) => {
        arr.push(todo);
    });
  });
app.use(cors());
app.use(express.json())
app.get('/notes', (req, res) => {
  res.json((arr));
});

app.post('/notes', (req, res) => {
    console.log('REQ', req.body)
    arr.push(req.body)
    res.send('Post succesful');
  });

app.get('/notes/:id', (req, res) => {
    
  const result = arr.filter((value) => value.id === parseInt(req.params.id));
  res.json(result);
});

app.delete('/delete/:id', (req, res) => {

    const index = arr.findIndex((value) => value.id === parseInt(req.params.id));
    arr.splice(index, 1)
    res.json(arr);
  });
  

app.listen(port, () => {
  console.log(`Palvelin käynnissä portissa ${port}`);
});