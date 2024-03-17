import React, { useState } from "react";
import { useSelector } from 'react-redux'

import { MyBetsHeaderMouse } from "./NavBar.js"
import { ScrolApuestas } from "./Bets.js"
import { BalElement } from "./BalElement.js"
import { Menu } from "../DropDownMenu/Menu.js"  

import { splitToDigits } from "../../Redux_t/Helpers_Function/Helper.js"

export function Bet365 () {

  
    const [flagBal, setFlagBal] = useState(false);
    const [flagMenu, setFlagMenu] = useState(false);
    
    const balance =  splitToDigits( useSelector( state => state.BETS.balance ) ) 
  
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
  
        
        
  
        {flagBal ? <BalElement balance={ balance } /> : null}
  
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