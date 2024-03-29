// Omid Latifi
//     1199455

/* Post Model */

const mongoose = require('mongoose');

let legsSchema = new mongoose.Schema ({

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

let Legs = mongoose.model('Legs', legsSchema);
module.exports = Legs;