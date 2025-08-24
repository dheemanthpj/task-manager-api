const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

exports.signup = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password || password.length < 6)
      return res.status(400).json({ error: 'Invalid username/password' });

    const exists = await User.findOne({ username });
    if (exists) 
      return res.status(409).json({ error: 'Username already taken' });

    const user = await User.create({ username, password });
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password)))
      return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    next(err);
  }
};
