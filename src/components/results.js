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



export default function Results() {

    const questions = useSelector((state) => state.survey.value)
    const answers = useSelector((state) => state.survey.results)

    const overall = useSelector((state) => state.survey.overallResults)

    console.log(overall)


    let count = 0
    let count2 = 0


if(overall.length>0){
    return (
        <Fragment>
            <Link to="/">
            <Button className='return' variant='outlined'> Home </Button>
            </Link>
    <div className='results-container'>
        <h3>Survey Results</h3>
        <table>
            <tbody>
            <tr>
            <th>Survey id</th>
            {overall[0].map((record) => 
                <th>{record.id}</th>
                )}
            </tr>
    
    
            {overall.map((list) =>
                <tr>
                <td>{count+=1}</td>
                {list.map((record) => 
                <td>{record.answer}</td>
                )}
                </tr>
            )}
    
    
    
            </tbody>
    
        </table>
    
        
    </div>
    
        </Fragment>
    
      )
}else{
    return(
        <div className='no-results'>No results yet</div>
    )
} 

}
