import React, { useState } from "react"

import { useSelector, useDispatch } from "react-redux"

import { changeFlagForm, deleteAllBets, deleteBet } from "../../Redux_t/reducer.js"

import { deleteAllThunk } from "../../Redux_t/thunk.js"

import ContactForm from "./FormAddBets.js"
import { Menu } from '../DropDownMenu/Menu.js';

import deletePng from "./Icons/delete.png"
import settingPng from "./Icons/settingPng.png"

import "./form.css"


const ContactFormContainer = props => {

  const { handleSubmit } = props
  const flagForm = useSelector( (state) => state.BETS.flagForm )

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

  return (
    <div>
      <div className="container_btn">
        <div>
          <button onClick={ () => setFlagMenu( (prev) => !prev ) } className = { flagMenu ? "flagMenu" : " flagMenu active_btn" } >Меню</button>

          { flagMenu && <div className='cnt_menu_form'><Menu /></div> }

          <button className="btn_add" onClick={ () => dispatch( changeFlagForm() ) }>Создать</button>

          <button className="btn_delete" onClick={ () => dispatch( deleteAllThunk() ) } >Удалить все</button>
        </div>
      </div>

      <div className='container_block_data_bets'> 
        { betsList && betsList.map((el, i) => { return <DataBets idEl = { i } ID={ el.id } dataBet={el.dataBet} /> })}
      </div>
    </div>
  );
}



const DataBets = ({dataBet, idEl, ID}) => {
  const dispatch = useDispatch();

  let type
  let sum

  if (dataBet) {
     type = dataBet.type
     sum = dataBet.sum
  }
  const id = ID 

  return (
    <div className={`container_data_bets data_bets_${id} `}>
      <div>№{ idEl + 1}</div>
      <div>Тип: { type }</div>
      <div>Ставка: { sum }</div>



      {/* запрос на перезапись строки в бд по id */}
      <button>
        <img src={ settingPng } alt='settingPng' className='settingPng'></img>
      </button>

      {/* запрос на удаление к бд по id */}
      <button onClick={ () => dispatch( deleteBet(id) ) }>
        <img src={ deletePng } alt='delPng' className='delPng'></img>
      </button>

    </div>
  )
}



export default ContactFormContainer