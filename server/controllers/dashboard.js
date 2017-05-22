var mongoose = require('mongoose');
var Owl = mongoose.model('Owl');

module.exports = {
    show: function(req, res){
        Owl.find({}, function(req, results){
            res.render('index', {owls: results})
        });
    },
    newOwl: function(req, res){
        res.render('newOwl')
    },
    createOwl: function(req, res){
        var owl = new Owl({name: req.body.name, age: req.body.age, gender: req.body.gender})
        owl.save(function(err){
            if(err){
                console.log("Could not create an owl");
                res.render('newOwl', {title: 'Fix your Owl!', errors: owl.errors})
            }
            else{
                console.log("You have successfully made an owl");
                res.redirect('/')
            }
        })
    },
    info: function(req, res){
        Owl.findOne({_id: req.params.id},function(req, singleOwl){
            res.render('singleOwl',{ owl: singleOwl})
        })
    },
    edit: function(req, res){
        Owl.findOne({_id: req.params.id}, function(req, singleOwl){
            res.render('edit', {owl: singleOwl})
        })
    },
    update: function(req, res){
        var owlID = req.params.id
        // Used only because we are rendering on a post for errors
        var singleOwl = Owl.find({_id: req.params.id})
        var owl = Owl.update({_id: req.params.id}, {
            name: req.body.name,
            age: req.body.age
        }, {runValidators: true}, function(err){
            // Run original validations to make sure no empty fields
            if(err){
                console.log("There is an error");
                res.render('edit', {owl: singleOwl, errors: err.errors})
            }
            // If it passes, update the current owl
            else{
                res.redirect('/owls/' + owlID);
            }
        })
    },
    delete: function(req, res){
        Owl.remove({_id: req.params.id}, function(err){
            res.redirect('/');
        })
    }
}
