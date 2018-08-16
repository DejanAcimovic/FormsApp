import React, { Component } from 'react'

class QuestionPayload extends Component{

    state = {
        type:'text'
    }

    optionChanged = (e) => {
        this.setState({ type : e.target.value })
        
    }

    maxChanged = (e) => {
        this.setState({max : e.target.value})
    }

    minChanged = (e) => {
        this.setState({min : e.target.value})
    }

    choicesChanged = (e) => {
        let choices = e.target.value.split(',')
        this.setState({choices})
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
                    (this.state.type === 'multipleChoice' || this.state.type === 'singleChoice') && 
                    <div className='grey-text'>
                        <br/>
                        Write comma divided list of elements:
                        <form>
                            <textarea  onChange={this.minChanged}/>
                        </form>
                    </div>
                }
            </div>
        )
    }
}

export default QuestionPayload