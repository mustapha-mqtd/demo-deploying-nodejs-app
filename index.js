var express = require('express');
var hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs');
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});