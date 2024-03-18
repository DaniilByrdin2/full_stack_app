import React, { useState } from "react"

import { useSelector, useDispatch } from "react-redux"

import { changeFlagForm, changeFlagUpdateBet,  } from "../../Redux_t/reducer.js"

import { deleteAllThunk, deleteBetThunk } from "../../Redux_t/Thunk/Thunk.js"

import ContactForm from "./FormAddBets.js"
import { Menu } from '../DropDownMenu/Menu.js';

import deletePng from "./Icons/delete.png"
import settingPng from "./Icons/settingPng.png"

import "./form.css"


const ContactFormContainer = props => {

  const { handleSubmit } = props
  const dispatch = useDispatch();
  const flagForm = useSelector( (state) => state.BETS.flagForm )
  const flagUpdate = useSelector( (state) => state.BETS.flagUpdate );

  // useEffect(() => {

  //   if (flagUpdate) {
  //     dispatch(initBets());
  //     console.log("useEffect");
  //   }
  // }, [ flagUpdate ]);

  return (
    <div className="container_stavki">
      { flagForm ? <ContactForm handleSubmit={handleSubmit} /> : <BetsList /> }
    </div>
  );
}



const BetsList = () => {

  const betsList = useSelector( (state) => state.BETS.betsList );
  const dispatch = useDispatch();

  const [ flagMenu, setFlagMenu ] = useState(false)

  function animated_btn( target ) {
    target.classList.add("animated_btn_del");
    setTimeout(() => {
      target.classList.remove("animated_btn_del");
    }, 200);
  }
  
  return (
    <div>
      <div className="container_btn">
        <div onClick={ (e) => animated_btn(e.target) }>
          <button className="flagMenu" onClick={ () => setFlagMenu( (prev) => !prev ) } >Меню</button>

          { flagMenu && <div className='cnt_menu_form'><Menu /></div> }

          <button className="btn_add" onClick={ (e) => { dispatch( changeFlagForm() ) } }>Создать</button>

          <button id="btn_del" className="btn_delete" onClick={ (e) => { dispatch( deleteAllThunk()) } } >Удалить все</button>
        </div>
      </div>

      <div className='container_block_data_bets'> 
        { betsList && betsList.map((el, i) => { return <DataBets idEl = { i } ID={ el.id } dataBet={el.dataBet} /> })}
      </div>
    </div>
  );
}



const DataBets = ({dataBet, idEl, ID}) => {

  const dispatch = useDispatch() 

  const { type, sum, totalSum } = dataBet
  const id = ID 

  return (
    <div className={`container_data_bets data_bets_${id} `}>
      <div>№{ idEl + 1}</div>
      <div>Тип: { type }</div>
      <div>Ставка: { sum }</div>

      <button onClick={ () => { dispatch( changeFlagUpdateBet(id) ) } }>
        <img src={ settingPng } alt='settingPng' className='settingPng'></img>
      </button>

      <button onClick={ () => dispatch( deleteBetThunk( id, totalSum ) ) } >
        <img src={ deletePng } alt='delPng' className='delPng'></img>
      </button>

    </div>
  )
}



export default ContactFormContainer