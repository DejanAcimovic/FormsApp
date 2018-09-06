let User = require('../Models/Users')
var bcrypt = require('bcrypt')
const saltRounds = 10
var jwt = require('jsonwebtoken')


exports.registration = function(req, res){
    User.count({username : req.body.username}, (err, count) =>{
        if(err){
            console.log(err.messae)
        }else if(count > 0){
            res.send('Nije dobro')
        }else{
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    let user = new User({
                        username: req.body.username,
                        password: hash
                    })

                    user.save((err, u)=>{
                        if(err){
                            console.log(err)
                        }else{
                            res.send('Registration successfull')
                        }
                    })
                });
            });
        }
    })
}

exports.login = function(req, res){
    User.count({username : req.body.username} ,(err, count)=>{
        if(count === 0){
            res.send('Nepostojeci korisnik')
        } else {
            User.findOne({username : req.body.username}, (err, user)=>{
                
                bcrypt.compare(req.body.password, user.password, function(err, ress) {
                    if(ress === true){

                        jwt.sign({user : {username : user.username, _id: user._id}}, "FormsKey",(err, token)=>{
                            console.log(token)
                            res.json({token})
                        } )
                    } else {
                        res.send('Pogresan password')
                    }
                });
            })
        }
    })
}
