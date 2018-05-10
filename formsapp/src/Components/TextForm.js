import React, { Component } from 'react'

class TextForm extends Component{
  render()
  {
    return(
      <div className='container'>
        <div className="row">
          <div className="input-field col s12">
            <input id="TextFormName" type="text" className="validate white-text" />
            <label for="TextFormName">Type your question</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input disabled  id="disabled" type="text" className="validate" />
            <label for="disabled">Answer (this is preview so it is disabled)</label>
          </div>
        </div>
      </div>
    );
  }
}

export default TextForm
