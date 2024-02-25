const mongoose = require('mongoose');

const fakeUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
  
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
 
});

// Optional: Add validation, pre-save hooks, etc.
const FakeUser = mongoose.model('fakeUser', fakeUserSchema)
module.exports = FakeUser;