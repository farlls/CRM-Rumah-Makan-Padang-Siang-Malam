// const express = require('express')
// const router = express.Router()
// const db = require('./Database')
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser')

// const SECRET_KEY = '2024';

// router.use(bodyParser.json())

// router.post('/login', (req, res) => {
//   const { user, password } = req.body

//   if (!user || !password) {
//     return res.status(400).json({ message: 'Please provide user and password' });
//   }

//   const query = 'SELECT * FROM user WHERE user = ? AND password = ?';
//   db.query(query, [user, password], (err, results) => {
//     if (err) {
//       return res.status(500).json({ message: 'Server error' });
//     }
//     if (results.length > 0) {
//       const token = jwt.sign({ user: results[0].user }, SECRET_KEY, { expiresIn: '24h' });
//       return res.status(200).json({ message: 'Login successful', token });
//     } else {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//   })
// })

// const verifyToken = (req, res, next) => {
//   const token = req.headers['authorization'];
//   if (!token) {
//     return res.status(403).json({ message: 'No token provided' });
//   }

//   jwt.verify(token, SECRET_KEY, (err, decoded) => {
//     if (err) {
//       return res.status(500).json({ message: 'Failed to authenticate token' });
//     }
//     req.userId = decoded.id;
//     next();
//   });
// };

// app.get('/api/dashboard', verifyToken, (req, res) => {
//   res.status(200).json({ message: 'Welcome to the dashboard' });
// });


// module.exports = router
