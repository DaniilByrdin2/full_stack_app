import axios from "axios";

import {initStore, deleteAllBets, deleteBet, editBet, changeFlagForm, changeUpdateId, addBet } from "../reducer"
import { stringToJson, joinHelperForm } from "../Helpers_Function/Helper"


export const initBets = () => async ( dispanch ) => {
  await axios
  .get("http://localhost:5000")
  .then( (res) => { 
    const data = stringToJson(res.data)
    dispanch( initStore(  data ) ) 
  })
  .catch( (e) => { console.log(e) })

} 

export const addBetsThunk = (formdata) => async (dispatch) => {
  const objBetJson = joinHelperForm( formdata )

  await axios.post( "http://localhost:5000/add", { bet: objBetJson },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
  .then( ( res ) => { dispatch( addBet( { bet: { id: res.data, dataBet: JSON.parse(objBetJson.dataBet) } } ) )} )
  .catch((e) => console.log(e));
}

export const deleteAllThunk = () => async (dispatch) => {
  const all = "all"
  await axios.delete(`http://localhost:5000/delete${all}`, )
  .then( () => dispatch( deleteAllBets() ) )
  .catch( e => console.log(e) )
}

export const deleteBetThunk = ( id, sum ) => async (dispatch) => {
  
  await axios.delete( `http://localhost:5000/delete${id}`, )
  .then( () => { dispatch( deleteBet( { id, sum } ) )} )
  .catch( e => console.log(e) )
}

export const updateThunk = (payload) => async ( dispatch ) => {
  const objBetJson = joinHelperForm( payload.dataBet )
  const bet = JSON.parse( objBetJson.dataBet )

  await axios.put( `http://localhost:5000/update${payload.id}`, { bet: objBetJson }, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  } )
  .then( () => dispatch( editBet( bet ) ) )
  .then( () => dispatch( changeUpdateId() ) )
  .then ( () => dispatch( changeFlagForm() ) )
  .then( () => dispatch( initBets() )  )
  .catch( e => console.log(e) )  

} 