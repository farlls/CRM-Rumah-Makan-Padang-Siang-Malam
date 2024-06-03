const express = require('express')
const router = express.Router()
const db = require('./Database')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.post('/login', (req, res) => {
  const { user, password } = req.body

  if (!user || !password) {
    return res.status(400).json({ message: 'Please provide username and password' })
  }

  const query = 'SELECT * FROM user WHERE user = ? AND password = ?'
  db.query(query, [user, password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' })
    }
    if (results.length > 0) {
      return res.status(200).json({ message: 'Login successful' })
    } else {
      return res.status(401).json({ message: 'Invalid credentials' })
    }
  })
})

module.exports = router
