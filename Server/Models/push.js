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
        type: String
    },
      username: {
        type: String
    }
});

let Push = mongoose.model('Push', pushSchema);
module.exports = Push;