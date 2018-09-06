import React, {Component} from 'react'
import axios from 'axios'
import Question from '../CreateForm/Question'
import {HorizontalBar} from 'react-chartjs-2'

class FromResult extends Component{
    state = {
        loaded : false
        
    }

    componentDidMount(){
        let id = this.props.match.params.id

        let token = undefined
        if(localStorage.hasOwnProperty('token')){
            token = 'Bearer ' + localStorage.getItem('token')
        }

        axios.get(`http://localhost:5000/form/result/${id}`, { headers: { Authorization: token } })
        .then((res)=>{
            console.log(res)

            this.setState({form : res.data, 
                loaded: true, individualView: true, 
                currentAnswer : 0,
                  })
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
                        <div className='container'> 

                        <h1>{this.state.form.title}</h1>
                        <p>{this.state.form.description}</p>
                        <br/>
                        <br/>
                            Results:<br/>
                            Number of answers:{this.state.form.agregated_results.number_of_answers}

                        <div className="card-action">
                            <a className="btn-small waves-effect waves-light yellow darken-4 center center" onClick={()=>{this.setState({individualView : !this.state.individualView})}}>CHANGE VIEW</a>
                        </div>
                        <br/>
                            {this.state.individualView &&
                                <div>
                                    { this.state.form.answers.length !== 0 && 
                                        <div>
                                            {this.state.form.answers[this.state.currentAnswer].answer.map((question_answer, index)=>{
                                                    return <Question  {...this.state.form.questions[index]} answer={question_answer}  disabled={true} index={index} />
                                                })
                                            }
                                        </div>
                                    }
                                    <div className="card-action">
                                        <a className="btn-large waves-effect waves-light yellow darken-4 center center" onClick={this.previousAnswer}>PREVIOUS ANSWER</a>
                                        {" "}
                                        <a className="btn-large waves-effect waves-light yellow darken-4 center center" onClick={this.nextAnswer}>NEXT ANSWER</a>
                                    </div>
                                </div>
                            }
                            {
                                !this.state.individualView &&
                                <div>
                                    <div className='container'>
                                        {
                                            this.state.form.agregated_results.answers.map((answer, i)=>{
                                                if(this.state.form.questions[i].payload.type !== 'text' &&
                                                    this.state.form.questions[i].payload.type !== 'number') {
                                                    const data = {
                                                    labels: this.state.form.questions[i].payload.choices,
                                                    datasets: [
                                                    {
                                                        label: this.state.form.questions[i].question,
                                                        backgroundColor: '#FF7800',
                                                        borderWidth: 1,
                                                        hoverBackgroundColor: '#d86600',
                                                        data: answer.answer
                                                    }
                                                    ]
                                                };

                                                    return (
                                                        <div>
                                                            <p className='left'><b>{i+1}.{this.state.form.questions[i].question}</b></p>
                                                            <HorizontalBar data = {data}/> 
                                                        </div>)
                                                } else if(this.state.form.questions[i].payload.type === 'number'){
                                                    let average = this.state.form.agregated_results.answers[i].answer/this.state.form.agregated_results.number_of_answers
                                                        
                                                    return (
                                                        <div>
                                                            <p><b>{i+1}.{this.state.form.questions[i].question}</b></p><br/>
                                                            <p>Average response is: {average} </p>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                                }
                        </div>
                }
                
            </div>
        )
    }

}

export default FromResult