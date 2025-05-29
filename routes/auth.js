import users from "../models/usermodel.js";
import express from'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  
  // Check if user already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }
  
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Store user
  const newUser = { username, password: hashedPassword };
  users.push(newUser);
  
  res.status(201).json({ message: 'User registered successfully' });
});

//get user

router.get('/register',async(req,res)=>{
  res.json(users)
})


// Login a user
router.post('/login', async (req, res) => {
  const secretKey=process.env.JWT_SECRET;
  const { username, password } = req.body;
  
  // Find the user
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Create JWT payload
  const payload = { username: user.username };

  // Sign the token
  const token = jwt.sign(payload,secretKey, { expiresIn: '1h' });

  res.status(200).json({ token });
});

 export default  router;

