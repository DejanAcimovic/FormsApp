import React from 'react';

const Question = (props)=>(
    <div>
      <p>{props.question}</p>
      {
        props.payload.type==='text' &&
        <input type='text'/>
      }
      {
        props.payload.type==='number' &&
        <input type='number' className="validate white-text" min={props.payload.min} max={props.payload.max} defaultValue={props.payload.min}/>
      }
      {
        props.payload.type==='singleChoice' &&
        <form>
        {
        props.payload.choices.map((choice)=>(
          <p>
            <label>
              <input name={'r'+props.index} type="radio" value="option1" />
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
              <input type="checkbox" value="option1" />
              <span>{choice}</span>
            </label>
          </p>
        ))
        }
        
      </form>
      }
      </div>
  );

  export default Question;