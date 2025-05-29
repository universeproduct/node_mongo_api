
// routes/protected.js
import express from'express';
import authenticateToken from'../middleware/authMiddleware.js';

const router = express.Router();

// Protected route example
router.get('/dashboard', authenticateToken, (req, res) => {
  res.status(200).json({ message: `Welcome ${req.user.username}!` });
});

export default router;
