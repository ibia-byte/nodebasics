/*
console.log("hello world")
*/
const express = require('express');
const app  = express();
app.listen(3000, function() {
console.log('listening on 3000')
})
app.get('/', function (req, res){
    res.send('Hello World')
})
app.get('/about', function (req,res){
    res.send('This page is About us')
})
app.post ('/', function (req, res){
    res.send('Got a POST request')
})
app.put ('/', function (req, res){
    res.send('Got a PUT request')
})
app.delete ('/', function (req, res){
    res.send('Got a DELETE request')
})
app.get('/users/:name',function (req, res){
    res.send('hello' +  req.params.name)
})
app.get('*',function(req,res){res.send('oops, The page doesn exist')}
)



