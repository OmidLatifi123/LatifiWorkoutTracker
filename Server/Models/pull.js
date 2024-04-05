// Omid Latifi
//     1199455

/* Post Model */

const mongoose = require('mongoose');

let pullSchema = new mongoose.Schema ({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    reps: {
        type: Number,
        min: 1
    },
      username: {
        type: String
    },
    file: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File' 
    }
});

let Pull = mongoose.model('Pull', pullSchema);
module.exports = Pull;