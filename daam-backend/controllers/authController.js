const User = require('../models/user');
const generateToken = require('../utils/generateToken');

async function registerAdmin (req, res) {
  try { 
  const { name, email, password } = req.body;

  if (!name || !password || !email) {
    return res.status(400).json({ message: 'Please fill all sections'});
  }

  const existingUser = await User.findOne({ email });

  if(existingUser) {
    return res.status(400).json({ message: 'An account with this email already exists' });
  }

  const user = await User.create({ name, email, password });

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user._id),
  });
  } catch(err) {
    res.status(500).json({ message: 'Server error', error: err.message});
  }
}


async function loginAdmin(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password'});
    }

    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch(err){
    res.status(500).json({ message: 'Server error', error: err.message});
  }
}

async function getMe(req, res) {
  res.json(req.user);
}

module.exports = { registerAdmin, loginAdmin, getMe }