let Form = require('../Models/Forms')

exports.create_form = function(req, res){
    let formObject = new Form({
        title: req.body.title,
        description: req.body.description,
        creator_id: req.body.creator_id,
        questions:req.body.questions
    })

    formObject.save(function(err, form){
        if(err){
            console.log(err.message)
        }else{
            res.send('nebitno')
        }
    })
}

exports.get_form = function(req, res){
    Form.findById(req.params.id, '-answers', (err, form)=>{
        if(err){
            console.log('Greska prilikom dobavljanja iz baze')
        }else{
            res.send(form)
        }
    })
}

exports.add_answer = function(req, res){
    Form.updateOne({_id: req.body.id},{$push:{answers:{answer: req.body.answer}}}, (err, form)=>{
       if(err){
           console.log(err)
       }else{	
        res.send(form)
       }
    })
}

exports.get_forms = function(req,res){
    Form.find({creator_id: req.params.creator_id}, '+title +description +_id', (err, forms)=>{
        if(err){
            console.log(err.message)
        }else{
            res.send(forms)
        }
    })
}

exports.get_individual_results = function(req,res){
    Form.findOne({_id : req.params.id},(err, form)=>{
        if(err){
            console.log(err)
        }else{
            res.send(form)
        }
    })
}
