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
        type: String
    },
      username: {
        type: String
    }
});

let Pull = mongoose.model('Pull', pullSchema);
module.exports = Pull;