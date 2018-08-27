import React, {Component} from 'react'
import Question from '../CreateForm/Question'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import notify from '../notify'


class FillForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            id:1,
            title: 'Proba forma',
            description: 'probni opis',
            questions:[
                {question:'alksdjf', payload:{type:'text'}},
                {question:'alksdjf', payload:{type:'number',min:0,max:10}},
                {question:'alksdjf', payload:{type:'singleChoice',choices:['bla',';bla']}},
                {question:'alksdjf', payload:{type:'singleChoice',choices:['bla',';bla']}},
                {question:'alksdjf', payload:{type:'multipleChoice',choices:['bla',';bla']}}
            ],
            answers:new Array(5)
    }
    }
    
    componentDidMount(){
        const id = this.props.match.params.id
        console.log(id)

        axios.get(`http://localhost:5000/form/${id}`).then((res)=>{
            var data = res.data
            var length = res.data.questions.length
            this.setState({
                id: data.id,
                title: data.title,
                description: data.description,
                questions: data.questions,
                answers:new Array(length)
            })
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    onAnswerChange= (index, answer) => {
        let answers = [...this.state.answers]
        answers[index] = answer
        this.setState({answers})
    }

    onMultipleChoiceChanged = (index, answer) =>{
        let answers = [...this.state.answers]
        if(!answers[index]) answers[index] = []

        if(answers[index].indexOf(answer) === -1){
            answers[index] = [...answers[index], answer]
        }else{
            answers[index] = answers[index].filter(element =>element != answer)
        }

        if(answers[index].length === 0) answers[index] = null

        this.setState({answers})
    }

    submitForm=()=>{
        if(this.state.answers.indexOf(null) === -1){
            notify('One or more fields are ilegal!')
        }else{
            axios.post('http://localhost:5000/createForm', {id: this.state.id, answers : this.state.answers }).then((res)=>{
                alert(res); 
            })
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.description}</h3>
                <div className='container'>
                    {
                        this.state.questions.map(
                            (question,index)=>{
                                return <Question {...question} index={index} disabled={false} onAnswerChange={this.onAnswerChange} onMultipleChoiceChanged={this.onMultipleChoiceChanged}/>
                            })
                    }
                </div>
                <div className="card-action">
                    <a className="btn-large waves-effect waves-light yellow darken-4 center center" onClick={this.submitForm}>SUBMIT</a>
                </div>
                <ToastContainer/>
            </div>
        )
    }
}

export default FillForm