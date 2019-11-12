//console.log('Hello world')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const path = require('path')
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.json());

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");
app.listen(3000, function () {
    console.log('listening on 3000')
})
/* //app.get(path, callback)
app.get('/', (req, res) => {
    res.send('Hello world')
})/
//app.get(path, callback)
app.get('/about', (req, res) => {
    res.send('about us page')
})
//post methods
app.post('/', (req, res) => {
    res.send('Got a post')
})
// put method
app.put('/', (req, res) => {
    res.send('Got a put request at /user')
})
// delete method
app.delete('/', (req, res) => {
    res.send('Got a delete at /user')
})
// params
app.get('/users/:name', (req, res) => {
    res.send('hello  ' + req.params.name)
})
//error page
//app.get('*', (req, res) => {
// res.send('Dont worry about this we will sort it soon')
//})
app.get('/users', (req, res) => {
    res.send('This is a class' + req.query.class + 'cohort' + req.query.cohort)
})

 */

app.get('/register_form', (req, res) => {
    //    console.log('body',req.body)
    //    console.log('query',req.query)
    res.render('begin')
})


app.post('/newPath', (req, res) => {
    //res.send("Hello " + req.body.firstname);
    res.render('start', {
        fname: req.body.firstname,
        lname: req.body.lastname

    });
})
// another method for post
/* app.post('/register_form', (req, res) => {
    console.log("form has been posted")
    console.log('body', req.body)
    console.log('query', req.query)
    console.log('query params', req.query)
    res.render('register_form')

}) */
var nameSchema = new mongoose.Schema({
    firstname: String,
    lastname: String
});
var User = mongoose.model("User", nameSchema);



app.post('/newPath', (req, res) => {
    // res.send('hello')
    res.render("newForm", {
        name: req.body.firstName,
        gn: req.body.gender,
    });
})
app.post("/register_form", (req, res) => {//express app
    var myData = new User(req.body);//myData creates user(a module which )
    myData.save()//module method
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});