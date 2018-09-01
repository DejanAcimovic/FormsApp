import React, {Component} from 'react'
import axios from 'axios'
import Question from '../CreateForm/Question'


class FromResult extends Component{
    state = {
        loaded : false
    }

    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`http://localhost:5000/form/result/${id}`)
        .then((res)=>{
            console.log(res)
            this.setState({form : res.data, loaded: true, individualView: true, currentAnswer : 0})
        })
        .catch((err)=>{
            console.log(err.message)
        })
        
    }

    nextAnswer = ()=>{
        this.setState((prevState)=>{
            let number = prevState.currentAnswer + 1
            if(number > this.state.form.answers.length-1)
                number = 0
            return {currentAnswer : number}
        })
    }

    previousAnswer = ()=>{
        this.setState((prevState)=>{
            let number = prevState.currentAnswer - 1
            if(number < 0)
                number = this.state.form.answers.length-1
            return {currentAnswer : number}
        })
    }
    render() {
        return(
            <div>
                {
                    !this.state.loaded && 
                    <div>
                        Loading...
                    </div>
                }
                {
                    this.state.loaded && 
                    <div>
                        <h1>{this.state.form.title}</h1>
                        <p>{this.state.form.description}</p>
                        
                        {
                            this.state.form.answers[this.state.currentAnswer].answer.map((question_answer, index)=>{
                                    return <Question  {...this.state.form.questions[index]} answer={question_answer}  disabled={true} index={index} />
                                })
                        }
                        <div className="card-action">
                            <a className="btn-large waves-effect waves-light yellow darken-4 center center" onClick={this.previousAnswer}>PREVIOUS ANSWER</a>
                            {" "}
                            <a className="btn-large waves-effect waves-light yellow darken-4 center center" onClick={this.nextAnswer}>NEXT ANSWER</a>
                        </div>
                    </div>
                }
            </div>
        )
    }

}

export default FromResult