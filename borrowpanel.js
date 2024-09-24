const mongoose = require("mongoose");

const borrowSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',

    },
    bookId: {
        type: mongoose.Schema.ObjectId,
        ref: 'book',

    },
    Created_date: {
        type: String,
    },
    Updated_date: {
        type: String,
    },
})

const borrowpanel = mongoose.model('borrow', borrowSchema);
module.exports = borrowpanel;