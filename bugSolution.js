const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user || Object.keys(user).length === 0) {
    return res.status(400).json({ error: 'Missing user data' });
  }
  //Further validation
  if (!user.name || !user.email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  console.log('Creating user:', user);
  res.status(201).json({ message: 'User created successfully', user });
});
app.listen(3000, () => console.log('Server listening on port 3000'));