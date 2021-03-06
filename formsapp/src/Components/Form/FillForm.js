import React, {Component} from 'react'
import Question from '../CreateForm/Question'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import notify from '../notify'


class FillForm extends Component {

    constructor(props){
        super(props)

        this.state = { loaded : false}
    }
    
    componentDidMount(){
        const id = this.props.match.params.id
        console.log(id)

        axios.get(`http://localhost:5000/form/${id}`).then((res)=>{

            console.log(res)
            var data = res.data
            var length = res.data.questions.length
            this.setState({
                loaded : true,
                id: id,
                title: data.title,
                description: data.description,
                questions: data.questions,
                answers:new Array(length)
            }, ()=>{
                res.data.questions.map((question, index)=>{
                    if(question.payload.type === 'number'){
                        if(question.payload.hasOwnProperty('min'))
                            this.state.answers[index] = question.payload.min
                        else 
                            this.state.answer[index] = 0
                    }
                })
            })
        }).catch((err)=>{
            notify(err.message)
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
        if(Object.values(this.state.answers).includes(null) === false){
            axios.post('http://localhost:5000/form/addAnswer', {id: this.state.id, answer : this.state.answers }).then((res)=>{
                window.location.href='/success'
            }).catch((err)=>{
                notify(err.message)
            })
        } else {
            notify('One or more fields is invalid')
        }
        
    }

    render(){
        const loaded = this.state.loaded
        return(
            <div>
                {!loaded && <div>Loading...</div>}
                {loaded && 
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
                        <br/>
                        <div className="card-action">
                            <a className="btn-large waves-effect waves-light yellow darken-4 center center" onClick={this.submitForm}>SUBMIT</a>
                        </div>
                        <ToastContainer/>
                    </div>
                }
            </div>
        )
    }
}

export default FillForm