const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.render('index',{title: 'Home'});
});

router.get('/about', (req,res,next)=>{
    res.render('about',{title: 'About Me'});
});

router.get('/projects', (req,res,next)=>{
    res.render('projects',{title: 'Projects'});
});

router.get('/contact', (req,res,next)=>{
    res.render('contact',{title: 'Contact Me'});
});

router.get('/services', (req,res,next)=>{
    res.render('Services',{title: 'Services'});
});

module.exports = router;