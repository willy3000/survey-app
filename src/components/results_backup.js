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
import './results.css'
import { Fragment } from 'react'
import {reInitialize} from '../slices/surveySlice'



export default function Results() {

    const dispatch = useDispatch()

    const questions = useSelector((state) => state.survey.value)
    const answers = useSelector((state) => state.survey.results)

    const overall = useSelector((state) => state.survey.overallResults)

    console.log(overall)


    let count = 0

  return (
    <Fragment>
        <Link to="/">
        <Button onClick={() => dispatch(reInitialize())} className='return' variant='outlined'> Home </Button>
        </Link>
<div className='results-container'>
    <h3>Survey Results</h3>
    <table>
        <tbody>
        <tr>
        <th>Survey id</th>
        {answers.map((answer) =>
        <th key={count+=1}>{answer.id}</th>
        )}

    </tr>
    <tr>
        <td>{questions.id}</td>
        {answers.map((answer) => 
        <td key={count+=1}>{answer.answer}</td>
        )}
    </tr>
        </tbody>

    </table>

    
</div>

    </Fragment>

  )
}