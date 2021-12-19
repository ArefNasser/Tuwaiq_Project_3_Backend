const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;   // create a user schema
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true , unique:true},
    password: { type: String, required: true },
    height: { type: Number, required: false },
    weight: { type: Number, required: false },
    program1: { type: Number, required: false },
    program2: { type: Number, required: false },
    program3: { type: Number, required: false },
    role: { type: String, required: false },

    
  },
  {  // automatically manage createdAt and UpdatedAt
    timestamps: true,
  }
);


const User = mongoose.model("User", userSchema);
module.exports = User;