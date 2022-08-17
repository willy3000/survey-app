import { createSlice } from "@reduxjs/toolkit";


export const SurveySlice = createSlice({
    name: "survey",
    initialState: {value: [], current_question: 0, results: [], overallResults : []},
    reducers: {
        loadData : (state, action) => {
            state.value = action.payload
            // state.current_question = action.payload.start_question_id
            // state.current_question = state.value.questions
        },

        nextQuestion: (state, action) => {
            state.current_question = state.current_question+1
            const newList = [...state.results]
            newList.push(action.payload)
            state.results = newList
        },

        reInitialize: (state, action) => {
            const newList = state.overallResults
            newList.push(state.results)
            state.overallResults = newList
            state.current_question = 0
            state.results = []
        }
    }
})


export const {loadData, nextQuestion, reInitialize} = SurveySlice.actions

export default SurveySlice.reducer