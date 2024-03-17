import { createSlice } from '@reduxjs/toolkit'
import { joinHelperForm } from "./Helpers_Function/Helper"



const initialState = {
    betsList: [],
    balance: 0.00,
    flagForm: false,
    updateId: '',
    flagUpdate: true
}


export const counterSlice = createSlice({
    name: 'bets',
    initialState,
    reducers: {

        initStore: (state, {payload} ) => {
            state.betsList = payload.reverse()
            state.balance = 0
            payload.forEach( el => { state.balance += Number.parseFloat( el.dataBet.totalSum )  } )
            state.flagUpdate = false
        },

        addBet: ( state, {payload} ) => {
            const totalSum = Number.parseFloat( payload.bet.dataBet.totalSum )

            state.balance = totalSum + state.balance
            state.betsList.push( payload.bet )
        },

        deleteBet: (state, {payload}) => {
            const totalSum = Number.parseFloat( payload.sum )

            state.balance = state.balance - totalSum
            const newArr = state.betsList.filter( (el) => { 
                return el.id !== payload.id
            } )
            state.betsList = newArr
        },

        deleteAllBets: (state) => {
            state.betsList = []
            state.balance = 0.00
        },

        editBet: (state, {payload}) => {

            
            state.betsList.forEach( el => {
                if (el.id === state.updateId ) {
                    el.dataBet = payload
                }
                
            } )
            
            state.flagUpdate = true
        },

        
        changeFlagForm: (state) => {
            state.flagForm = !state.flagForm
        }, 

        changeUpdateId: (state) => {
            state.updateId = ''
        },

        cancelUpdateBet: (state) => {
            state.flagForm = !state.flagForm
            state.updateId = ''
        },

        changeFlagUpdateBet: (state, { payload }) => {
            state.flagForm = !state.flagForm
            state.updateId = payload
        },
    },
})

export const {
  addBet,
  deleteBet,
  editBet,
  changeFlagForm,
  deleteAllBets,
  initStore,
  changeFlagUpdateBet,
  cancelUpdateBet,
  changeUpdateId,
  additionBalance
} = counterSlice.actions;

export default counterSlice.reducer