var express = require('express');
var router = express.Router();
var Blog=require('../models/blog');

router.get('/', (req, res,next)=>{
  Blog.find()
    .then(blogs=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(blogs);
    },(err)=>next(err))
    .catch(err=>next(err));
});

router.get('/:id', (req, res,next)=>{
    let id=req.params.id;
    Blog.findById(id)
    .then(blog=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(blog);
    },(err)=>next(err))
    .catch(err=>next(err));
});

router.post('/add', (req, res,next)=>{
    let blog=new Blog(req.body);
    blog.save().then((blog)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(blog);
    },err=>next(err))
    .catch(err=>next(err));
});

/*
Need Authentication

router.post('/', (req, res,next)=>{
    Blog.create(req.body)
    .then((blogs) => {
        console.log('Blogs Created ', blogs);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(blogs);
    }, (err) => next(err))
    .catch((err) => next(err));
}); */

/*
Need Authentication

router.delete('/', (req, res,next)=>{
    Blog.deleteMany({}).then(()=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json("Deleted succesfully");
    },err=>next(err))
    .catch(err=>next(err));
}); */

module.exports = router;