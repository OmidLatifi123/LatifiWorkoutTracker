// Omid Latifi
//     1199455

/* Post Model */

const mongoose = require('mongoose');

let pushSchema = new mongoose.Schema ({

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

let Push = mongoose.model('Push', pushSchema);
module.exports = Push;