const { Router } = require('express');
const Schema = require('../model/sChema');
const router = Router();

router.get('/users', (req, res) => {
    res.render('users');
});

router.post('/users', (req, res) => {
    // console.log(req.body)
    const db = new Schema({
        title: req.body.title,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    db.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });

});

module.exports = router;