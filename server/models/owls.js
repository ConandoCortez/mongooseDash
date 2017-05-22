// Requir emongoose
var mongoose = require('mongoose');
// Create the schema
var OwlSchema = new mongoose.Schema({
    name: {type: String, required: [true, "The owl needs a name"], minlength: 3},
    age: { type: Number, required: [true, "How old is the owl??"]},
    gender: String
}, {timestamps: true});

mongoose.model("Owl", OwlSchema);
var Owl = mongoose.model('Owl');
