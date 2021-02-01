const mongoose = require('mongoose');

const Note = mongoose.model('Note', {
  userId: { type: mongoose.ObjectId, ref: 'User' },
  title: String,
  text: String,
  tags: Array,
})

module.exports = Note
