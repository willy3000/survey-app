import React from 'react'
import { Card, CardActions, CardContent } from '@mui/material'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import {CardHeader} from '@mui/material'
import './survey.css'
import { blue } from '@mui/material/colors'
import {Button,TextField} from '@mui/material'
import {nextQuestion} from '../slices/surveySlice'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useRef } from 'react'
import { Fragment } from 'react'
import {reInitialize} from '../slices/surveySlice'


export default function Survey() {
    

    const answer = useRef()
    const gender = useRef()

    let textinputType = true


    const dispatch = useDispatch()

    const question_id_no = useSelector((state) => state.survey.current_question)
    const questions = useSelector((state) => state.survey.value)
    let question_id
    console.log(question_id_no)
    console.log(questions)
    try{
        question_id = questions.questions[question_id_no].id
    }catch{
        question_id = "q_farmer_name"
    }

    const options = questions.questions.find(x => x.id===question_id).options


    let [current_option, changeOption] = useState()

    const [answered, answerState] = useState(false)
    const [surveyTaken, surveyState] = useState(false)


    const enableBtn = (event) => {
        textinputType = true
        if(event.target.value.length>0){
            answerState(true)
        }else{
            answerState(false)
        }
    }

    const nextSurvey = (val) => {
        answerState(false)
        if(val === 1){
            surveyState(true)
            console.log("survey state is ",surveyTaken)
        }
        try{
            dispatch(nextQuestion({id:question_id, answer: answer.current.value}))
        }
        catch{
            dispatch(nextQuestion({id:question_id, answer: gender.current.textContent}))
        }
    }

    const selectOption = (option_key, option_value) => {
        answerState(true)
        changeOption(option_key)
        textinputType = false
        console.log(gender.current.textContent)

    }


  return (
    <Fragment>
    {!surveyTaken && <Card sx={{backgroundColor: blue[100]}} className="question-container">
            <CardHeader
            title="Question"
            subheader ={question_id_no+1}
            />
            <CardContent>
            <h1>
                {questions.strings.en[question_id]}
            </h1>

            {options.length>0 && <div>
                {options.map((option) => 
                    <div ref={gender} className={option.display_text===current_option ? 'option selected' : "option"} key={option.display_text} onClick={() => selectOption(option.display_text, option.value)}>
                        {option.value}
                    </div>
                )}
            </div>}

            {!options.length>0 && <div>
                <TextField inputRef={answer} variant='outlined' label='answer' onChange={(event) => {enableBtn(event)}}></TextField>
            </div>}

            </CardContent>
    
            <CardActions>
                {question_id_no<questions.questions.length-1 && <Button variant="contained" disabled={!answered} onClick={() => nextSurvey(0)}>Next</Button>}
                <Link to="/results">
                {question_id_no===questions.questions.length-1 && <Button variant="contained" disabled={!answered} onClick={() => nextSurvey(1)}>Finish</Button>}
                </Link>
            </CardActions>


        </Card>}

        {surveyTaken && <div>
            survey already taken
        </div>}
    </Fragment>

  )
}
