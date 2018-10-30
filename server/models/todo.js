var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
    text: {
        type: String,
        required: true,
        minlenght: 1,
        trim: true  // przycia 
        //https://mongoosejs.com/docs/validation.html
    },
    completed: {
        type: Boolean,
        default: false // nie jest wymagane , a gdy todo zosatnie utworzone to completed będzie= false
    },
    completedAt: {
        type: Number,
        default: null // nie jest wymagane , a gdy todo zosatnie utworzone to completedAt będzie= null boto liczba
    
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

module.exports = {Todo};