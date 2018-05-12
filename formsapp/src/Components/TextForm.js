import React, { Component } from 'react'

class TextForm extends Component{

  constructor(props)
  {
    super(props)
    this.state = {
      key : this.props.key,
      type : 'TextForm',
      question : ''
    }

    this.onQuestionChange = this.onQuestionChange.bind(this)
  }

  onQuestionChange(){
    this.setState({
      key : this.state.key,
      type : this.state.type,
      question : this.refs.question.vaue
    })

    this.props.onPieceChange(this.state)
  }

  render()
  {
    return(
      <div className='container'>
        <div className="row">
          <div className="input-field col s12">
            <input id="TextFormName" type="text" className="validate white-text" ref="question" onBlur={this.onQuestionChange}/>
            <label htmlFor="TextFormName">Type your question</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input disabled  id="disabled" type="text" className="validate" />
            <label htmlFor="disabled">Answer (this is preview so it is disabled)</label>
          </div>
        </div>
      </div>
    );
  }
}

export default TextForm
