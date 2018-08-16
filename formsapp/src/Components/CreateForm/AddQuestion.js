import React, { Component } from 'react'
import QuestionPayload from './QuestionPayload'

class AddQuestion extends Component {

    state = {
        question:''
    }

    onQuestionChange = (e)=>{
        this.setState({question: e.target.value})
    }

    addPayload = (payload) => {
        this.setState({ payload })
    }

    render(){
        return(
            <div className="blue-grey lighten-5">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="TextFormName" type="text" className="validate teal-text" onChange={this.onQuestionChange}/>
                        <label htmlFor="TextFormName">Type your question</label>
                    </div>
                </div>
                <div className='row'>
                    <QuestionPayload addPayload={this.addPayload}/>
                </div>
                <div className="row">
                    <a className="waves-effect waves-light btn-small brown right-align">Add question</a>
                </div>
                <br/>
            </div>
        )   
    }
}

export default AddQuestion