import React, { Component } from 'react'

class NumberFormPiece extends Component{
  render()
  {
    return(
      <div className='container'>
        <div className="row">
          <div className="input-field col s12">
            <input id="TextFormName" type="text" className="validate white-text" />
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
            <input id="min" type="Number" className="validate" />
            <label htmlFor="min">Min value (leave empty for no restrictions)</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="max" type="Number" className="validate" />
            <label htmlFor="max">Max value (leave empty for no restrictions)</label>
          </div>
        </div>
      </div>
    );
  }
}

export default NumberFormPiece
