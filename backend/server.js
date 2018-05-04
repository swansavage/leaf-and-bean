const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const Comment = require('./models/comment.js')

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3001;

app.use(express.urlencoded({extended:false}));
app.use(logger('dev'));


router.get('/', (req, res)=> {
    res.json({message: 'Hello World!'});
});

router.get('/comments', (req, res) => {
    Comment.find((err, comments) => {
        if (err)
            return res.json({success: false, error: err});
        return res.json({ success: true, data: comments });
    });
});

router.post('/comments', (req, res) => {
    const comment = new Comment();
    const { author, text } = req.body;

    if (!author || !text) {
        return res.json({
            success: false,
            error: 'You must provide an author and comment'
        });
    }
    comment.author = author;
    comment.text = text;
    comment.save(err => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});

mongoose.connect('mongodb://localhost:27017/LeafAndBean');
mongoose.connection.once('open', ()=> {
    console.log('connected to mongod');
})

app.use('/api', router);
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
