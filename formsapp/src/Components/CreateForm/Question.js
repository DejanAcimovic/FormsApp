import React from 'react'


const Question = (props)=>(
    <div className='blue-grey'>
      <div className='container'>
        <p className='left'>{props.index+1}. {props.question}</p>
        <br/>
        {
          props.payload.type==='text' &&
          <input type='text' 
          disabled={!!props.disabled}
          placeholder = { (!!props.disabled && props.hasOwnProperty('answer')) ? props.answer : null }
          onChange={(e)=>{
            props.onAnswerChange(props.index, e.target.value)
          }}/>
        }
        {
          props.payload.type==='number' &&
          <input type='number' className="validate white-text" 
            min={props.payload.min} 
            max={props.payload.max} 
            defaultValue={props.payload.min}
            value = { (!!props.disabled && props.hasOwnProperty('answer')) ? props.answer : null}
            disabled={!!props.disabled}
            onChange={(e)=>{
              if(e.target.value >= props.payload.min && e.target.value <= props.payload.max)
                props.onAnswerChange(props.index, e.target.value)
            }}/>
        }
        {
          props.payload.type==='singleChoice' &&
          <form>
          {
          props.payload.choices.map((choice)=>(
            <p>
              <label>
                <input name={'r'+props.index} type="radio" value={choice} 
                disabled={!!props.disabled} 
                checked = { (!!props.disabled && props.hasOwnProperty('answer') && props.answer === choice) ? true : null }
                onChange = { (e) => {
                    props.onAnswerChange(props.index, e.target.value)
                  }
                }/>
                <span>{choice}</span>
              </label>
            </p>
          ))
          }
          
        </form>
        }
        {
          props.payload.type==='multipleChoice' &&
          <form>
          {
          props.payload.choices.map((choice)=>(
            <p>
              <label>
                <input name={'c'+props.index} 
                  type="checkbox" 
                  value={choice} 
                  disabled={!!props.disabled}
                  checked = { !!props.disabled ? (props.hasOwnProperty('answer') && props.answer.includes(choice) ? true : false) : null }
                  onChange={(e) => {
                    props.onMultipleChoiceChanged(props.index, e.target.value)
                  }} />
                <span>{choice}</span>
              </label>
            </p>
          ))
          }
          
        </form>
        }
        </div>
      </div>
  );

  export default Question;