const   express = require('express'),
        app = express(),
        bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/contact', function(req, res) {
    res.send("Under Construction");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("connected and listening");
});