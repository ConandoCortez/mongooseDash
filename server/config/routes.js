var mongoose = require('mongoose');
var Owl = mongoose.model('Owl');
var owls = require('../controllers/dashboard.js');

module.exports = function(app){
    app.get('/', function(req, res){
        owls.show(req, res);
    })
    app.get('/owls/new', function(req, res){
        owls.newOwl(req,res);
    })
    app.post('/owls', function(req, res){
        owls.createOwl(req, res);
    })

    app.get('/owls/:id', function(req, res){
        owls.info(req, res)
    })
    // Render page that will edit the fields of individual owl
    app.get('/owls/edit/:id', function(req, res){
        owls.edit(req, res);
    })
    // Update owl parameters
    app.post('/owls/:id', function(req,res){
        owls.update(req, res);
    })
    // Delete an object in the database
    app.get('/owls/destroy/:id', function(req, res){
        owls.delete(req, res);
    })
}
