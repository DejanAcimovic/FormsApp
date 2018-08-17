import React, { Component } from 'react'
import QuestionPayload from './QuestionPayload'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { css } from 'glamor'

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
        if( this.state.question === ''  ) toast('Unos nije validan', {
            position: toast.POSITION.TOP_CENTER,
            className: css({
                background: '#b71c1c',
                color: 'white'
              }),
              progressClassName: css({
                background: 'grey'
              })
            }) 
        this.props.addQuestion(this.state)
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