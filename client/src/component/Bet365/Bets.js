import React from "react";
import { useSelector } from "react-redux"

export const ScrolApuestas = () => {

  const data = useSelector( (state) => state.BETS.betsList ) ;

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


const Bets = ( { bet } ) => {

    const mas_menos_res = [];
    const won_lost_arr = [];

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

    const mas_menos = () => {

      const splitStr = (str = 'undefined') => {
        return str ? str : "undefined" 
      }

      bet.dataBet.comands.forEach( el => {

        mas_menos_res.push( ' ' + splitStr(el.res?.won) )

        won_lost_arr.push( Object.keys( el.res )[0] )
      } )

      return mas_menos_res.join() 
    }

    const marker_mas_menos = mas_menos()
    const sumBetTrunc = Math.trunc( Number.parseFloat(bet.dataBet.sum) )
    const totalSum = bet.dataBet.totalSum
    

    return (
      <>
        <div className="myb-BetItemsContainer_BetItemsContainer">
          <div className="myb-SettledBetItem myb-SettledBetItem_Collapsed">

            <div id={`switchClassHeaderBets_${bet.id}`} className="myb-SettledBetItemHeader " onClick={toggleTab} >
              <div className="myb-SettledBetItemHeader_HeaderTextContainer ">
                <div className="myb-SettledBetItemHeader_Title ">
                  <div className="myb-SettledBetItemHeader_Text ">
                    <span className="">{ sumBetTrunc },00€ {bet.dataBet.type}</span>
                  </div>
                </div>
                <div className="myb-SettledBetItemHeader_SubHeaderText ">{ marker_mas_menos }</div>
              </div>
              <div className="myb-SettledBetItem_BetStateContainer ">
                <div className="myb-SettledBetItem_BetStateWrapper">
                  <div className="myb-SettledBetItem_BetReturnLabel ">{ totalSum }€</div>
                  <div className="myb-SettledBetItem_BetStateLabel ">Ganancias pot. obtenidas</div>
                </div>
              </div>
            </div>

            <div className="result-hidden" id={`results_${bet.id}`}>

              <div>
                { bet.dataBet.comands && bet.dataBet.comands.map( (el, i) => {
                    const m_m_res = mas_menos_res[i]
                    const won_lost_marker =  won_lost_arr[i]

                    return <ResBet key={bet.id} id={bet.id} mas_menos_res={ m_m_res } cf={el.cf} comands_name={ el.comands_name } won_lost={ won_lost_marker } />
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
                    <div className="myd-StakeDisplay_StakeWrapper">{sumBetTrunc},00€</div>
                  </div>

                  <div className="myb-SettledBetItemFooter_BetInformationWrapper ">
                    <div className="myb-SettledBetItemFooter_BetInformationLabel block_just_left">Ganancias</div>
                    <div className="myb-SettledBetItemFooter_ReturnTextWrapper block_just_left">
                      <span className="myb-SettledBetItemFooter_TextCurrency "></span>
                      <span className="myb-SettledBetItemFooter_BetInformationText ">{ totalSum }€</span>
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

const ResBet = ( { mas_menos_res, comands_name, cf, won_lost } ) => {

  const strSplitTypeEvent = (str) => {
    if (str === "undefined") return "undefined"

    const res = []

    for (let i = 0; i < str.length; i++) {
      const el = str[i];
      
      if ( (str[i + 1] + str[i + 2]) === "de" ) {
        res.push(el)
        res.push(' ')
      } else {
        res.push(el)
      }

    }

    return res.join('')
  }

  const typeBetsEvent = strSplitTypeEvent(comands_name[1])
  const comand_name = `${comands_name[0][0]} v ${comands_name[0][1]}` 


  return (
    <div className="myb-BetParticipant myb-SettledBetParticipant ">
      <div className="myb-BetParticipant_TopContainer ">
        <div className="myb-BetParticipant_LeftContainer ">
          <div className="myb-BetParticipant_HeaderTitle ">
            {/* flag won los */}

            <div className={`myb-WinLossIndicator myb-WinLossIndicator-${won_lost}`}></div>
            <div className="myb-BetParticipant_HeaderText ">
              <span className="myb-BetParticipant_ParticipantSpan ">{ mas_menos_res }
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
            <div className="myb-BetParticipant_MarketDescription ">{ typeBetsEvent }</div>
          </div>
          <div className=" bets_left myb-BetParticipant_FixtureDescription myb-SettledBetParticipant_FixtureDescription ">
            <div className="myb-BetParticipant_FixtureName ">{ comand_name }</div>
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