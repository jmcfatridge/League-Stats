var mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  ap: Number,
  ad: Number,
  atkSpeed: Number,
  crit: Number
})

module.exports = mongoose.model('Item', itemSchema);