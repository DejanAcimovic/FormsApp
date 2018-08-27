let Form = require('../Models/Forms')

exports.create_form = function(req, res){
    let formObject = new Form({
        title: req.body.title,
        description: req.body.description,
        creator_id: req.body.creator_id,
        questions:req.body.questions
    })

    formObject.save(function(err){
        if(err){
            console.log(err.message)
        }

        res.send('Uspjesno je upisano')
    })
}

exports.get_form = function(req, res){
    From.findById(req.params.id, '-questions', (err, form)=>{
        if(err){
            console.log('Greska prilikom dobavljanja iz baze')
        }
        res.send(form);
    })
}