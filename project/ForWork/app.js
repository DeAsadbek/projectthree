const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
// const exhbs = require('express-handlebars');
const r_Users = require('./routers/users');
// const hbs = exhbs.create({
//     defaultLayout: 'main',
//     extname: 'hbs'
// });
const r_Index = require('./routers/index');
const port = 3000;
const app = express();

//mongoose settings
mongoose.connect('mongodb://localhost:27017/web')
const db = mongoose.connection;

db.on('open', (err, data) => {
    console.log('mongoose running');
});

db.on('error', (err) => {
    console.log(err, 'mongoo err running');
});


//body-parser 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set views files
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'views')));
// shakar views ni bunday olmaydi. Shart emas . Tepada yozgansanku uni
app.use(express.static(path.join(__dirname, 'public')));


// run index
app.use(r_Index);
app.use(r_Users);


// server has been started
app.listen(port, (err, data) => {
    console.log(`server has been started on http://localhost:${port}`);
});