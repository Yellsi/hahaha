const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
   title: {
    type: String,
    required: true  
   }, 
  year: String
}, {
   timestamps: true
});

module.exports = mongoose.model('movie', MovieSchema);