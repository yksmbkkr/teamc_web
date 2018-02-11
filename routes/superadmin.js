let express = require('express');
let router = express.Router();
let bodyParser=require('body-parser');
let mongoose=require('mongoose');
const path = require('path');
let {initialspace,endspace,findname}= require('./search.js');
let admission=require('../models/Admission');

router.post('/form', function(req, res) {

    let newUser=new admission(req.body);
    newUser.save(req.body);

    res.redirect('/admissionPage');
});

router.get('/alladmissions', function(req, res){
    admission.find({}, function (err, data) {
        if(err){
            console.log(err);
        }else{
            //console.log(data);
            res.render('alladmission.ejs', {data: data});
        }
    });
});

router.post('/search',function(req,res){
    console.log('reached');
    let search = req.body.search;
    admission.find({},function(err,data){
        if(err)
            throw err;
        initialspace(search,function(search1){
            endspace(search1,function(search2){
                findname(search2,data,function(data){
                    res.render('alladmission.ejs',{data: data});
                });
            });
        });

    });
});

module.exports = router;