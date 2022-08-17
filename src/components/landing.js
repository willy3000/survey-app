import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import './landing.css'

export default function Landing({fetched}) {
  return (
    <div className='main-container'>
        <h3>Survey Application</h3>
        <div className='btns'>
            <Link disabled={!fetched} to="/survey">
                <Button disabled={!fetched} variant="outlined"> Take Survey </Button>
            </Link>
            
                <Button variant="outlined" color="warning" ><Link to="/results">  View results </Link></Button>
        </div>
    </div>
  )
}
