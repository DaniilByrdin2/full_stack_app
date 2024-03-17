import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import { editBet, changeFlagForm, changeUpdateId } from "./Redux_t/Reducer.js"
import { updateThunk } from "./Redux_t/Thunk/Thunk.js"
import {initBets, addBetsThunk} from "./Redux_t/Thunk/Thunk.js" 

import ContactFormContainer from "./component/Form/Form.js"
import { Bet365 } from "./component/Bet365/Bet365.js"

import "./Css_global/Bal.css"
import "./Css_global/New-styles.css"
import "./Css_global/Styles.css"
import "./Css_global/StyleErr.css"


function App() {

  const data = useSelector( (state) => state.BETS );
  // const flagUpdate = useSelector( (state) => state.BETS.flagUpdate );
  const formdata = useSelector( (state) => state.form  );
  const updateId = useSelector( (state) => state.BETS.updateId );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {

    e.preventDefault();

    if (updateId) {

      dispatch( updateThunk( { id: updateId, dataBet: formdata.contact.values } ) )

    } else {
      dispatch(  addBetsThunk( formdata.contact.values )   )
      dispatch( changeFlagForm() )
    }
  }


  useEffect(() => {
      dispatch(initBets());

      console.log( 'ssss' );
  }, []);

  console.log(data);


  return (
    <Router>
      <Routes>
        <Route exact path="/" element= {<ContactFormContainer handleSubmit = { handleSubmit }/>} />
        <Route path="/bet365" element={<Bet365 />} />
      </Routes>
    </Router>
  )
}

export default App;
