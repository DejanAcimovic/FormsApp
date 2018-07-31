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
  }


  onQuestionChange = (e) =>{
    const question = e.target.value;
    this.setState({question}, () => this.props.onChange(this.state))
  }

  onMaxChange = (e) => {
    const maxValue = e.target.value;
    this.setState({ maxValue }, () => this.props.onChange(this.state))
  }

  onMinChange = (e) => {
    const minValue = e.target.value;
    this.setState({ minValue }, () => this.props.onChange(this.state))
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
            <input disabled  id="disabled" type="number" className="validate" />
            <label htmlFor="disabled">Answer (this is preview so it is disabled)</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="min" type="Number" className="validate" onChange={this.onMinChange}/>
            <label htmlFor="min">Min value (leave empty for no restrictions)</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="max" type="Number" className="validate" onChange={this.onMaxChange}/>
            <label htmlFor="max">Max value (leave empty for no restrictions)</label>
          </div>
        </div>
      </div>
    );
  }
}

export default NumberFormPiece
