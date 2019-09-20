const router = require('express').Router();
const Users = require('./auth-model')
const restricted = require('./authenticate-middleware')

const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")

// REGISTER
router.post('/register', (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); 
  user.password = hash;

  Users.add(user)
    .then(userData => {
      res.status(201).json(userData);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// LOGIN
router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`, token
        });
      } else {
        res.status(401).json({ message: 'You shall not pass!' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// GET all users
router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

// generate token function
function generateToken(user) {
  const payload = {
    username: user.username
  }
  const options = {
    expiresIn: "1d"
  }
  return jwt.sign(payload, "keep it secret", options)
}

module.exports = router;