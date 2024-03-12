import { createSlice } from '@reduxjs/toolkit'




const initialState = {
    betsList: [],
    balance: "22.222,24",
    flagForm: false
}


export const counterSlice = createSlice({
    name: 'bets',
    initialState,
    reducers: {

        initStore: (state, {payload} ) => {
            state.betsList = payload
        },

        addBet: ( state, {payload} ) => {
            
            state.betsList.push(payload)
            
        },

        deleteBet: (state, {payload}) => {
            state.betsList = state.betsList.filter( (el) => { 
                return el.id !== payload
            } )
        },

        editBet: (state) => {
            console.log("edit");
        },

        changeFlagForm: (state) => {
            state.flagForm = !state.flagForm
        }, 

        deleteAllBets: (state) => {
            state.betsList = []
        }

    },
})

export const { addBet, deleteBet, editBet, changeFlagForm, deleteAllBets, initStore } = counterSlice.actions
export default counterSlice.reducer