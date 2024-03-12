import React from "react";





const ResBet = ( {id, mas_menos_res, comands_name, cf } ) => {
    return (
      <div className="myb-BetParticipant myb-SettledBetParticipant ">
        <div className="myb-BetParticipant_TopContainer ">
          <div className="myb-BetParticipant_LeftContainer ">
            <div className="myb-BetParticipant_HeaderTitle ">
              <div className={`myb-WinLossIndicator_${id} myb-WinLossIndicator-won_${id}`}></div>
              <div className="myb-BetParticipant_HeaderText ">
                <span className="myb-BetParticipant_ParticipantSpan ">{mas_menos_res}
                  <div className="myb-HalfAndHalfPill myb-HalfAndHalfPill_Status-1 ">
                    <div className="myb-HalfAndHalfPill_TextStatus myb-HalfAndHalfPill_TextStatus-1 ">
                      <div className="myb-HalfAndHalfPill_TextStatusLHS myb-HalfAndHalfPill_TextStatusLHS-1 "></div>
                      <div className="myb-HalfAndHalfPill_Slash"></div>
                      <div className="myb-HalfAndHalfPill_TextStatusRHS myb-HalfAndHalfPill_TextStatusRHS-1 "></div>
                    </div>
                  </div>
                </span>
              </div>

            </div>

            <div className="bets_left">
              <div className="myb-BetParticipant_MarketDescription ">{comands_name[1]}</div>
            </div>
            <div className=" bets_left myb-BetParticipant_FixtureDescription myb-SettledBetParticipant_FixtureDescription ">
              <div className="myb-BetParticipant_FixtureName ">{comands_name[0]}</div>
            </div>

            <div>
              <div></div>
            </div>
          </div>
          <div className="myb-BetParticipant_HeaderOdds ">{cf}</div>
        </div>
      </div>
    );
}


const Bets = ( { bet } ) => {


    function toggleTab() {

      // result-hidden 
    document.getElementById(`results_${bet.id}`).classList.toggle(`result-hidden`);

    const element = document.getElementById(`switchClassHeaderBets_${bet.id}`)

    if ( element.parentElement.classList.contains("myb-SettledBetItem_Collapsed")) {

        element.parentElement.classList.remove("myb-SettledBetItem_Collapsed");
        element.parentElement.classList.add("myb-SettledBetItem_DefaultOpen");

        document.querySelectorAll(`.myb-WinLossIndicator_${bet.id}`).forEach((element) => {
        element.classList.remove(`myb-WinLossIndicator-won_${bet.id}`);
      });

      // firing animations
      setTimeout(() => {
        document
          .querySelectorAll(`.myb-WinLossIndicator_${bet.id}`)
          .forEach((element) => {
            element.classList.add(`myb-WinLossIndicator-won_${bet.id}`);
          });
      }, 100);

    } else {
        element.parentElement.classList.add("myb-SettledBetItem_Collapsed");
        element.parentElement.classList.remove("myb-SettledBetItem_DefaultOpen");
    }
    }


    const totalSum = () => {
      let cf = 1;

      bet.comands.reduce( (acc, el) => cf = acc * (+el.cf) , cf )

      const rounded = number => +number.toFixed(2) 

      const res = rounded( cf * (+bet.sum) )
      const totalSum = Math.trunc( res )

      let dr = String( rounded( res - totalSum ) ).split(".")[1]

      if (!dr) {
        dr = "00"
      } else if (dr.length !== 2) {
        dr += "0"
      }

      return [ totalSum, dr ]

    }


    let mas_menos_res = []

    const mas_menos = () => {

      bet.comands.forEach( el => {
        mas_menos_res.push( ' ' + el.res.win )
      } )

      return mas_menos_res.join()
    }

    return (
      <>
        <div className="myb-BetItemsContainer_BetItemsContainer">
          <div className="myb-SettledBetItem myb-SettledBetItem_Collapsed">

            <div id={`switchClassHeaderBets_${bet.id}`} className="myb-SettledBetItemHeader " onClick={toggleTab} >
              <div className="myb-SettledBetItemHeader_HeaderTextContainer ">
                <div className="myb-SettledBetItemHeader_Title ">
                  <div className="myb-SettledBetItemHeader_Text ">
                    <span className="">{Math.trunc(bet.sum)},00€ {bet.type}</span>
                  </div>
                </div>
                <div className="myb-SettledBetItemHeader_SubHeaderText ">{mas_menos()}</div>
              </div>
              <div className="myb-SettledBetItem_BetStateContainer ">
                <div className="myb-SettledBetItem_BetStateWrapper">
                  <div className="myb-SettledBetItem_BetReturnLabel ">{totalSum()[0]},{totalSum()[1]}€</div>
                  <div className="myb-SettledBetItem_BetStateLabel ">Ganancias pot. obtenidas</div>
                </div>
              </div>
            </div>

            <div className="result-hidden" id={`results_${bet.id}`}>

              <div>
                { bet.comands && bet.comands.map( (el, i) => {
                    const m_m_res = mas_menos_res[i]
                    return <ResBet key={bet.id} id={bet.id} mas_menos_res={ m_m_res } cf={el.cf} comands_name={ el.comands_name }  />
                  } )
                }
              </div>

              <div className="myb-SettledBetItemInnerView_BadgeContainer ">
                <div>
                  <div></div>
                </div>
              </div>

              <div>
                <div className="myb-SettledBetItemFooter_BetInformation ">
                  <div className="myb-SettledBetItemFooter_StakeInformationWrapper myd-StakeDisplay  ">
                    <div className="myd-StakeDisplay_Title block_just_left">Imp</div>
                    <div className="myd-StakeDisplay_StakeWrapper">{Math.trunc(bet.sum)},00€</div>
                  </div>

                  <div className="myb-SettledBetItemFooter_BetInformationWrapper ">
                    <div className="myb-SettledBetItemFooter_BetInformationLabel block_just_left">Ganancias</div>
                    <div className="myb-SettledBetItemFooter_ReturnTextWrapper block_just_left">
                      <span className="myb-SettledBetItemFooter_TextCurrency "></span>
                      <span className="myb-SettledBetItemFooter_BetInformationText ">{totalSum()[0]},{totalSum()[1]}€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="myb-BetItemsContainer_SettledViewOlderBetsWrapper Hidden">
          <div className="myb-BetItemsContainer_SettledViewOlderBets "></div>
        </div>
      </>
    );
}





export const ScrolApuestas = ( {data} ) => {

    return (
        <div className="myb-MyBetsScroller">
            <div>
                <div className="myb-MyBets_Container ">
                  { data && data.map( (el) => {
                    return  <Bets key={el.id} bet={el}  />
                  })}
                </div>
            </div>
        </div>
    )
}