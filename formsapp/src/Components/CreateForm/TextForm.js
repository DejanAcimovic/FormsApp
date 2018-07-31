import React, { Component } from 'react'

class TextForm extends Component{

  constructor(props)
  {
    super(props)
    this.state = {
      key : this.props.keyy,
      type : 'TextForm',
      question : ''
    }
  }

  onQuestionChange = (e) =>{
    this.setState({question : e.target.value}, () => this.props.onChange(this.state))
  }

  render()
  {
    return(
      <div className='container'>
        <div className="row">
          <div className="input-field col s12">
            <input id="TextFormName" type="text" className="validate white-text" onChange={this.onQuestionChange}/>
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
