import React, { useEffect, useState } from 'react';

import './App.css';
import "./css/bal.css"
import "./css/new-styles.css"
import "./css/styles.css"
import "./css/styleErr.css"

import { MyBetsHeaderMouse } from "./component/NavBar.js"
import { ScrolApuestas } from "./component/Bets.js"
import { BalElement } from "./component/BalElement.js"  
import ContactFormContainer from "./component/Form/Form.js"
import { Menu } from "./component/DropDownMenu/Menu.js"

import { useSelector, useDispatch } from 'react-redux'
import { addBet, deleteBet, editBet, changeFlagForm, initStore } from "./Redux_t/reducer.js"

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {initBets, addBetsThunk} from "./Redux_t/thunk.js" 





function Bet365 () {

  
  const [flagBal, setFlagBal] = useState(false);
  const [flagMenu, setFlagMenu] = useState(false);
  
  const balance = useSelector( state => state.BETS.balance )

  return (
    <div className="App" >
      <div className="wc-WebConsoleModule_Header">
        <div className="hm-HeaderModule">
          <div className="hm-MainHeaderNarrow ">

            <div className="hm-MainHeaderLHSNarrow hm-MainHeaderLHSNarrow-loggedin ">


              <div className="hm-MainHeaderLHSNarrow_AZWrapper hm-MainHeaderLHSNarrow_Link " onClick={ () => setFlagMenu(prev => !prev) }>

                { flagMenu ? <Menu /> : null }

                <div className="hm-MainHeaderLHSNarrow_AZIcon "></div>
                <div className="hm-MainHeaderLHSNarrow_AZText ">А-Z</div>
              </div>

              <div className="hm-MainHeaderLHSNarrow_InPlayWrapper hm-HeaderMenuItem ">
                <div className="hm-MainHeaderLHSNarrow_InPlayLabel ">Directo</div>
              </div>

            </div>

            <div className="hm-MainHeaderLogoNarrow_Cover hm-MainHeaderLogoNarrow_Cover_styleEr"></div>
            <div className="hm-MainHeaderLogoNarrow ">
              <div className="hm-MainHeaderLogoNarrow_Bet365LogoImage "></div>
            </div>
            <div className="hm-MainHeaderNarrow_Indicator Hidden hm-MainHeaderNarrow_Indicator_styleEr "></div>
            <div className="hm-MainHeaderRHSLoggedInNarrow hm-MainHeaderRHSLoggedInNarrow_MyBets ">

              <div className="hm-MainHeaderRHSLoggedInNarrow_MyBetsWrapper hm-HeaderMenuItemMyBets hm-HeaderMenuItemMyBets_WidthState-1 hm-HeaderMenuItem_LinkSelected hm-HeaderMenuItem_LinkSelected-underscore ">
                <div className="hm-MainHeaderRHSLoggedInNarrow_MyBetsLabel ">Mis apuestas</div>
              </div>

              <div className="hm-MainHeaderMembersNarrow ">
                <div className="hm-MainHeaderMembersNarrow_MembersWrapper " onClick={() => setFlagBal((prev) => !prev)} >
                  <div className={ !flagBal ? "hm-MainHeaderMembersNarrow_MembersMenuIcon" : "whiteBal" }></div>
                  <div className="hm-MainHeaderMembersNarrow_Balance hm-Balance ">{balance}€</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      
      

      {flagBal ? <BalElement balance={balance} /> : null}

      <div className="wc-PageView">
        <div className="wc-PageView_Main wc-MyBetsPageResponsive_PageViewMain ">
          <div className="wc-MyBetsPageResponsive_Container ">
            <div className="myb-MyBetsModule ">
              <div className="myb-MyBets myb-MyBets_Breakpoints-1 myb-MyBets-mousemode ">

                {/*  */}
                    <MyBetsHeaderMouse />
                {/*  */}



                {/*  */}
                    <ScrolApuestas />
                {/*  */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}







function App() {

  const betsList = useSelector( (state) => state.BETS.betsList );
  const formdata = useSelector( (state) => state.form  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(  addBetsThunk( e, formdata )   )
    dispatch( changeFlagForm() )
  }


  useEffect(() => {
    dispatch( initBets() ) 
  }, [])

  console.log(betsList);
  // console.log("forma", formdata);

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
