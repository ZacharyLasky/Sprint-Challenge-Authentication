const router = require('express').Router();
const Users = require('./auth-model')

router.post('/register', (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); 
  user.password = hash;
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
