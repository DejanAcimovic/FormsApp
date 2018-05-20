import React, { Component } from 'react'

class NumberFormPiece extends Component{

  constructor(props)
  {
    super(props)
    this.state = {
      key:this.props.keyy,
      type:'NumberForm',
      maxValue:null,
      minValue:null,
      question: ''
    }

    this.props.onChange(this.state)

    this.setThisState = this.setThisState.bind(this)
    this.onMaxChange = this.onMaxChange.bind(this)
    this.onMinChange = this.onMinChange.bind(this)
    this.onQuestionChange = this.onQuestionChange.bind(this)
  }

  setThisState()
  {
    this.setState({
      key:this.state.key,
      type:this.state.type,
      maxValue:this.state.maxValue,
      minValue:this.state.minValue,
      question: this.state.question
    })
      
    this.props.onChange(this.state)

  }

  onQuestionChange(){
    this.state.question = this.refs.question.value
    this.setThisState();
  }

  onMaxChange(){
    this.state.maxValue = this.refs.maxValue.value
    this.setThisState();
  }

  onMinChange(){
    this.state.minValue = this.refs.minValue.value
    this.setThisState();
  }

  render()
  {
    return(
      <div className='container'>
        <div className="row">
          <div className="input-field col s12">
            <input id="TextFormName" type="text" className="validate white-text" ref='question' onBlur={this.onQuestionChange}/>
            <label htmlFor="TextFormName">Type your question</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input disabled  id="disabled" type="number" className="validate" />
            <label htmlFor="disabled">Answer (this is preview so it is disabled)</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="min" type="Number" className="validate" ref="minValue" onBlur={this.onMinChange}/>
            <label htmlFor="min">Min value (leave empty for no restrictions)</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="max" type="Number" className="validate" ref='maxValue' onBlur={this.onMaxChange}/>
            <label htmlFor="max">Max value (leave empty for no restrictions)</label>
          </div>
        </div>
      </div>
    );
  }
}

export default NumberFormPiece
