import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import Survey from './components/survey';
import Results from './components/results';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {loadData} from './slices/surveySlice'
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    getSurveyData()
  }, [])
  
  const dispatch = useDispatch()
  const [fetched, fetchedState] = useState(false)

  const getSurveyData = () => {
    axios.get("https://run.mocky.io/v3/d628facc-ec18-431d-a8fc-9c096e00709a")
    .then((response) => dispatch(loadData(response.data)))
    fetchedState(true)
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing fetched={fetched}></Landing>}/>
        <Route path="/survey" element={<Survey></Survey>}/>
        <Route path="/results" element={<Results></Results>}/>
      </Routes>
    </div>
  );
}

export const {getSurveyData} = App

export default App;
