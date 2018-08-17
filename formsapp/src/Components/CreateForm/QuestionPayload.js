import React, { Component } from 'react'

class QuestionPayload extends Component{

    state = {
        type:'text',
        choices: null,
        max: null,
        min: null 
    }

    optionChanged = (e) => {
        this.setState({ type : e.target.value, max:null, min:null, choices:null }, ()=>{this.sendPayload()})
    }

    maxChanged = (e) => {
        this.setState({max : e.target.value}, ()=>{this.sendPayload()})
    }

    minChanged = (e) => {
        this.setState({min : e.target.value}, ()=>{this.sendPayload()})
    }

    choicesChanged = (e) => {
        let choices = e.target.value.split(',')
        this.setState({choices : choices}, ()=>{this.sendPayload()})
    }

    sendPayload = () => {
        let payload = { type : this.state.type }
        if( this.state.max != null ) payload.max = this.state.max
        if( this.state.min != null ) payload.min = this.state.min
        if( this.state.choices != null ) payload.choices = this.state.choices
        this.props.addPayload(payload)
    }
    render(){
        return(
            <div className='row '>
                <p className='grey-text'>
                    Choose the type of the question:
                </p>
                <p>
                    <label>
                    <input type="radio" value="text" name='payload'
                                        checked={this.state.type === 'text'} 
                                        onChange={this.optionChanged} />
                        <span>Text Input |</span>
                    </label>    
                    <div className="radio">
                    </div>
                    <label>
                    <input type="radio" value="number" name='payload'
                                        checked={this.state.type === 'number'} 
                                        onChange={this.optionChanged} />
                        <span>Number Input |</span>
                    </label>
                    <label>
                    <input type="radio" value="multipleChoice" name='payload'
                                        checked={this.state.type === 'multipleChoice'} 
                                        onChange={this.optionChanged} />
                        <span>Multiple Choice |</span>
                    </label>
                    
                    <label>
                    <input type="radio" value="singleChoice" name='payload'
                                        checked={this.state.type === 'singleChoice'} 
                                        onChange={this.optionChanged} />
                        <span>Single Choice</span>
                    </label>
                </p>
                {
                    this.state.type === 'number' && 
                    <div>
                        <form>
                            <input type='number' placeholder='Max value' onChange={this.maxChanged}/>
                            <input type='number' placeholder='Min value' onChange={this.minChanged}/>
                        </form>
                    </div>
                }
                {
                    (this.state.type === 'singleChoice') && 
                    <div className='grey-text'>
                        <br/>
                        <div class="input-field col s12">
                            <textarea className="materialize-textarea" onChange={this.choicesChanged}></textarea>
                            <label for="textarea1">Write comma divided list of elements</label>
                        </div>
                    </div>
                }
                {
                    (this.state.type === 'multipleChoice') && 
                    <div className='grey-text'>
                        <br/>
                        <div class="input-field col s12">
                            <textarea className="materialize-textarea" onChange={this.choicesChanged}></textarea>
                            <label for="textarea1">Write comma divided list of elements</label>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default QuestionPayload