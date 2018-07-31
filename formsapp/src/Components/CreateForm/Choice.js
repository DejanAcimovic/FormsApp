import React, {Component} from 'react'

class Choice extends Component{

    constructor(props) {
      super(props)
      this.state = {
          key: this.props.keyy,
          question:''
      }
    }
  
    onQuestionChange = (e) => {
      this.setState({question : e.target.value}, () => {
        this.props.onChange(this.state)
      })
    }
  
    render()
    {
      return(
        <label>
          <input name="group1" type={(this.props.type ==='SingleChoice') ? 'radio' : 'checkbox'} disabled="disabled"/>
          <span>
            <input type="text" className="validate white-text" onChange={this.onQuestionChange}/>
            <label htmlFor='TextFormName1'>Type your choice</label>
          </span>
        </label>
      )
    }
  }

  export default Choice
  