
const express = require('express');
const app = express();
const port = process.env.PORT || 3001; 
const fs = require('fs');
const cors = require('cors');
const arr = [];
const argon2 = require('argon2');
 const user = process.env.USER
 const PW = process.env.PW

app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.post('/register', async(req, res) => {
    console.log('REQ', req.body)
    const {username, password } = req.body;
  
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
    try {
        const p = await argon2.hash(password);
        const u = await argon2.hash(username);
        const a = arr.find((value) => value.password === p && username === u);
        if(a){
            res.send('Käyttäjä löytyi').status(201);
           
        } else{
            res.send('Käyttäjää ei löytynyt').status(401);
        }

      } catch (err) {
        res.send('Post Denied').status(201);
      }
      console.log(arr);
   
  });


  app.post('/admin', async(req, res) => {
    console.log('REQ', req.body)
    const {username, password } = req.body;
    try {
   
        if(username === user && password === PW){
            res.send('Käyttäjä löytyi').status(201);
           
        } else{
            res.send('Käyttäjää ei löytynyt').status(401);
        }

      } catch (err) {
        res.send('Post Denied').status(201);
      }
      console.log(arr);
   
  });
app.listen(port, () => {
  console.log(`Palvelin käynnissä portissa ${port}`);
});