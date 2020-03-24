const express = require('express');
const path = require('path');
const http = require('http');
const app= express();

var cors = require('cors');

/* app.use(cors());

app.use(express.static(path.join(__dirname, 'dist'))); */

/* app.get('/',function(req,res){
 res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/about',function(req,res){
 res.sendFile(path.join(__dirname+'/about.html'));
});
app.get('/contacts',function(req,res){
 res.sendFile(path.join(__dirname+'/contacts.html'));
}); */

app.get('/api/products',function(req,res){
 res.sendFile(path.join(__dirname+'/products.json'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

/*
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
 */
