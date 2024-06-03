const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const db = require('./Database');
const app = express();
const port = 5000;

// Secret key for JWT
const SECRET_KEY = '2024';

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.post('/api/login', (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({ message: 'Please provide user and password' });
  }

  const query = 'SELECT * FROM user WHERE user = ? AND password = ?';
  db.query(query, [user, password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }
    if (results.length > 0) {
      const token = jwt.sign({ user }, SECRET_KEY, { expiresIn: '24h' });
      return res.status(200).json({ message: 'Login successful', token });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

app.get('/api/check-auth', (req, res) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ authenticated: false });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ authenticated: false });
    }
    return res.status(200).json({ authenticated: true, user: decoded.user });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});