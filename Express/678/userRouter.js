
const express = require('express');
const app = express();
const port =  3001; 
const fs = require('fs');
const cors = require('cors');
const arr = [];
const argon2 = require('argon2');
const user = process.env.USER;
const PW = process.env.PW;

//---------------
const jwt = require('jsonwebtoken')
const payload = { username: 'sugarplumfairy' }
const secret = 'haloo'
const options = { expiresIn: '0.25h'}
let token = jwt.sign(payload, secret, options)
console.log(token)
//Tehtävä 6---------



//7
const secretKey = 'AAA';
const tokenToVerify = 'BBB';

try {
  const decoded = jwt.verify(token, 'haloo');
  console.log('Token is valid. Decoded payload:');
  console.log(decoded);
} catch (err) {
  console.error('Token verification failed. Error message:');
  console.error(err.message);
}

//7



//8

const authenticate = (req, res, next) => {
    const auth = req.get('Authorization')
    if (!auth?.startsWith('Bearer ')) {
        return res.status(401).send('Invalid token')
    }
    const token = auth.substring(7)
    const secret = 'haloo'
    try {
        const decodedToken = jwt.verify(token, secret)
        req.user = decodedToken
        next()
    } catch (error) {
        return res.status(401).send('Invalid token')
    }
}


//8

app.use(cors());
app.use(express.json())
app.get('/', authenticate, (req, res) => {
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
        const password = await argon2.hash(password);
        const username = await argon2.hash(username);
        const a = arr.find((value) => value.password === password && username === username);
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