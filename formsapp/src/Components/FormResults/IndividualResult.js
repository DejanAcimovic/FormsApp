IndividualResult = (props) =>{
    return(
        <div className='conteiner'>
            {props.questions.map((question, index)=>{
                <p>{index+1} {question.question}</p>
                {
                    (question.payload.type==='text' || question.payload.type === 'number' || question.payload.type === 'singleChoice')&&
                    <div>
                        Answer: {props.answer[index]}
                    </div>
                  }

                  {
                    question.payload.type==='multipleChoice' &&
                    <div>
                        Answer:{props.answer.map((answer)=>{
                            return(
                                <div>
                                    {answer}
                                </div>
                            )
                        })}
                    </div>
                  }
            })}
        </div>
    )
}

export default IndividualResult