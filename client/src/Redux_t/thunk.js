import axios from "axios";

import {initStore, deleteAllBets } from "./reducer"
import { stringToJson, joinHelperForm } from "./helperFunc"


export const initBets = () => async ( dispanch ) => {
  await axios
  .get("http://localhost:5000")
  .then( (res) => { 
    const data = stringToJson(res.data)

    dispanch( initStore(  data ) ) 
  })
  .catch( (e) => { console.log(e) })

} 


export const addBetsThunk = (e, formdata) => async (dispatch) => {

  const objBetJson = joinHelperForm( formdata )

  await axios.post(
      "http://localhost:5000/add",
      objBetJson,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then( () => dispatch( initBets() ) )
    .catch((e) => console.log(e));
}



export const deleteAllThunk = () => async (dispatch) => {
  await axios.delete("http://localhost:5000/deleteAll", )
  .then( () => deleteAllBets() )
  .then( () => dispatch( initBets() ) )
  .catch( e => console.log(3) )
}