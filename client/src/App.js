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


function Bet365 () {

  
  const [flagBal, setFlagBal] = useState(false);
  const [flagMenu, setFlagMenu] = useState(false);
  
  const data = useSelector( (state) => state.BETS.betsList );
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
                    <ScrolApuestas data = { data }/>
                {/*  */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}























const createBet = ( [ com1, com2, com3 ], [ cf1, cf2, cf3 ], [ resType1, resType2, resType3 ], id, sum ) => {
  return { 
    id: `${id}`, 
    comands: [
        { 
            comands_name: [ com1, "Totales de goles"], 
            cf: `${cf1}`, 
            date: "",
            res: { win: resType1}
        },
        { 
            comands_name: [ com2, "Totales de goles"],
            cf: `${cf2}`,
            date: "",
            res: { win: resType2}
        },
        { 
            comands_name: [ com3, "Totales de goles"],
            cf: `${cf3}`,
            date: "",
            res: { win: resType3} 
        }
    ], 

    type: "Triples",
    sum: `${sum}`
  }

}

const joinHelperForm = ( arrInputs, id ) => {

  const comands = []
  const cf = []
  const resType = []
  let sum

  for (let i = 0; i < arrInputs.length; i++) {
    const element = arrInputs[i].value;
    
    if ( arrInputs[i].name.includes("sum") ) {
      sum = arrInputs[i].value
    }

    if ( arrInputs[i].name.includes("comand") ) {
      comands.push( element )
    }

    if ( arrInputs[i].name.includes("cf") ) {
      cf.push( element )
    }

    if ( arrInputs[i].name.includes("res") ) {
      resType.push( element )
    }
  }

  return createBet( comands, cf, resType , id, sum )

}



function App() {

  const betsList = useSelector( (state) => state.BETS.betsList );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const id = betsList.length + 1

    e.preventDefault();

    // запрос на добавление к бд
    dispatch( addBet( joinHelperForm( e.target, id ) ) )
    dispatch( changeFlagForm() )

  }




  const payloadStore = [
    { 
        id: "1", 
        comands: [
            { 
                comands_name: ["Atlas v Monterrey", "Totales de goles"], 
                cf: "2.02", 
                date: "",
                res: { win: "Mas de 2.5"}
            },
            { 
                comands_name: ["Atlas v Monterrey2", "Totales de goles"],
                cf: "2.06",
                date: "",
                res: { win: "Menos de 2.5"}
            },
            { 
                comands_name: ["Atlas v Monterrey3", "Totales de goles"],
                cf: "1.95",
                date: "",
                res: { win: "Mas de 2.5"} 
            }
        ], 

        type: "Triples",
        sum: "760.00"
    },

    { 
        id: "2", 
        comands: [
            { 
                comands_name: ["Atlas v Monterrey", "Totales de goles"], 
                cf: "2.02", 
                date: "",
                res: { win: "Mas de 2.5"}
            },
            { 
                comands_name: ["Atlas v Monterrey2", "Totales de goles"],
                cf: "2.06",
                date: "",
                res: { win: "Mas de 2.5"}
            },
            { 
                comands_name: ["Atlas v Monterrey3", "Totales de goles"],
                cf: "1.95",
                date: "",
                res: { win: "Mas de 2.5"}
            }
        ], 

        type: "Triples",
        sum: "760.00"
    },

  ]



  const [state, setState] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  useEffect(() => {
    callBackendAPI()
    .then(res => setState(res.express))
    .catch(err => console.log(err));
  }, [])

  console.log(state);

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
