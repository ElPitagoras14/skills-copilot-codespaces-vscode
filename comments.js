// Create web server
// GET /api/comments
// POST /api/comments
// DELETE /api/comments/:id
// PUT /api/comments/:id

// Load express module
const express = require('express');
// Create router object
const router = express.Router();
// Load mongoose
const mongoose = require('mongoose');
// Load Comment model
const Comment = require('../models/comment');
// Load User model
const User = require('../models/user');

// GET /api/comments
router.get('/', async (req, res) => {
  try {
    // Find all comments in the database
    const comments = await Comment.find({});
    // Send back comments as JSON
    res.json(comments);
  } catch (err) {
    // Send back error as JSON
    res.json(err);
  }
});

// POST /api/comments
router.post('/', async (req, res) => {
  try {
    // Find user in the database
    const user = await User.findById(req.body.user);
    // If user not found, send back error
    if (!user) {
      return res.status(404).json({ user: 'User not found' });
    }
    // Create new comment in the database
    const comment = await Comment.create(req.body);
    // Send back comment as JSON
    res.json(comment);
  } catch (err) {
    // Send back error as JSON
    res.json(err);
  }
});

// DELETE /api/comments/:id
router.delete('/:id', async (req, res) => {
  try {
    // Find comment in the database
    const comment = await Comment.findById(req.params.id);
    // If comment not found, send back error
    if (!comment) {
      return res.status(404).json({ comment: 'Comment not found' });
    }
    // Delete comment from the database
    await comment.remove();
    // Send back comment as JSON
    res.json(comment);
  } catch (err) {
    // Send back error as JSON
    res.json(err);
  }
});

// PUT /api/comments/:id
router.put('/:id', async (req, res) => {
  try {
    // Find comment in the database
    const comment = await Comment.findById(req.params.id);
    // If comment not found, send back error
    if (!comment) {
      return res.status(404).json({ comment: 'Comment not found' });
    }
} catch (err) {
}
});