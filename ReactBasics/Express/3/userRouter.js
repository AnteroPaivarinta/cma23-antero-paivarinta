
const express = require('express');
const app = express();
const port = process.env.PORT || 3001; 
const fs = require('fs');
const cors = require('cors');
const arr = [];
const argon2 = require('argon2');
app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.post('/register', async(req, res) => {
    console.log('REQ', req.body)
    const {username, password } = req.body;
    const arr = [];
    try {
        const password = await argon2.hash(password);
        const username = await argon2.hash(username);
        arr.push({password: password, username: username })

      } catch (err) {
        console.log('Jotain meni pieleen')
      }
      console.log(arr);
    res.send('Post succesful').status(201);
  });

  app.post('/login', async(req, res) => {
    console.log('REQ', req.body)
    const {username, password } = req.body;
    const arr = [];
    try {
        const one = await argon2.hash(password);
        const two = await argon2.hash(username);
        arr.push({password: one, username: two })

      } catch (err) {
        console.log('Jotain meni pieleen')
      }
      console.log(arr);
    res.send('Post succesful').status(201);
  });
app.listen(port, () => {
  console.log(`Palvelin käynnissä portissa ${port}`);
});