import { createSlice } from "@reduxjs/toolkit";


export const SurveySlice = createSlice({
    name: "survey",
    initialState: {value: [], current_question: 0, results: []},
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
            console.log(state.results)
        },

        reInitialize: (state, action) => {
            state.value = []
            state.current_question = 0
            state.results = []
        }
    }
})


export const {loadData, nextQuestion, reInitialize} = SurveySlice.actions

export default SurveySlice.reducer