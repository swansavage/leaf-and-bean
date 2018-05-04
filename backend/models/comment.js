const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    author: String,
    text: String,
}, {timestamps: true});

const Comment = mongoose.model('Comment', commentsSchema);

module.exports = Comment;
