import React, { Component } from 'react'
import QuestionPayload from './QuestionPayload'
import { ToastContainer } from 'react-toastify'
import notify from './notify'

class AddQuestion extends Component {

    state = {
        question:'',
        payload:{type:'text'}
        
    }

    onQuestionChange = (e)=>{
        this.setState({question: e.target.value})
    }

    addPayload = (payload) => {
        this.setState({payload})
    }

    addQuestion = () =>{
        if( this.state.question === ''  ){
            notify('Question field can not be left empty!')
        } else if(this.state.payload.hasOwnProperty('min') && this.state.payload.hasOwnProperty('max') && this.state.payload.max < this.state.payload.min){
            notify('Value of minimum can not be larger than that of a maximum!')
        } else if(this.state.payload.hasOwnProperty('choices') && this.state.payload.choices.length == 0){
            notify('You have to enter at least one choice for this question')
        } else{
            this.props.addQuestion(this.state)
        }    
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
                    <div className='container'>
                        <QuestionPayload addPayload={this.addPayload}/>
                    </div>
                </div>
                <ToastContainer />
                <div className="row">
                    <a className="waves-effect waves-light btn-small brown right-align" onClick={this.addQuestion}>Add question</a>
                </div>
                <br/>
            </div>
        )   
    }
}

export default AddQuestion