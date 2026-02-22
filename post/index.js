//create express setup
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); //return in jason format
const { randomBytes } = require('crypto');
//store for now in memory
const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    //associate a id with a post created 
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id]={
        id,title
    };  

    res.status(201).send(posts[id]);
});

app.listen(4000, () => {
    console.log('Post service Listenning 4000 port.');
});