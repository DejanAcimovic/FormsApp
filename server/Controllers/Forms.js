let Form = require('../Models/Forms')

exports.create_form = function(req, res){

    let mock_answers = []
    for(i=0; i<req.body.questions.length; i++){
        if(req.body.questions[i].payload.type === 'number'){
            mock_answers.push({answer : 0})
        }else if(req.body.questions[i].payload.type !== 'text'){
            mock_answers.push({ answer : new Array(req.body.questions[i].payload.choices.length).fill(0) })
        } else {
            mock_answers.push({answers : null})
        }
    }

    let formObject = new Form({
        title: req.body.title,
        description: req.body.description,
        creator_id: req.body.creator_id,
        questions:req.body.questions,
        agregated_results:{
            number_of_answers : 0,
            answers : mock_answers
        }
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
    Form.findById(req.body.id, 'questions agregated_results', (err, form)=>{
        if(err){
            console.log(err.message)
        }else{

            let number_of_answers = form.agregated_results.number_of_answers + 1
            console.log(req.body)
            mock_answers = form.agregated_results.answers
            req.body.answer.map( (answer, i)=>{
                if(form.questions[i].payload.type === 'number'){
                    mock_answers[i].answer = mock_answers[i].answer + parseInt(answer)
                }else if(form.questions[i].payload.type === 'singleChoice'){
                    mock_answers[i].answer[form.questions[i].payload.choices.indexOf(answer)]++
                }else if(form.questions[i].payload.type === 'multipleChoice'){
                    answer.map( (choice, j) =>{
                        mock_answers[i].answer[form.questions[i].payload.choices.indexOf(choice)]++
                    })
                }
            })
            
            let agregated_results = {
                number_of_answers : number_of_answers,
                answers : mock_answers
            }

            Form.updateOne({_id: req.body.id},{$push:{answers:{answer: req.body.answer}}, $set: {agregated_results : agregated_results}}, (err, form)=>{
                if(err){
                    console.log(err)
                }else{	
                 res.send(form)
                }
             })
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
