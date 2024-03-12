import { useState } from "react";
import React from "react";



export const MyBetsHeaderMouse = () => {

    const [ elId, setElId ] = useState('')

    const handleClick = (event) => {

        const target = event.target

        console.log( target, target.id );

        const navSlider = document.getElementById("navSlider")

        if (target.id !== elId ) {
            target.classList.add("myb-HeaderButton-selected")
            target.classList.add("myb-HeaderButton-animate")


            if (elId) {
                const removeClass = document.getElementById(elId)
                removeClass.classList.remove("myb-HeaderButton-selected")
                removeClass.classList.remove("myb-HeaderButton-animate")


                navSlider.classList.remove(`positionStyle_${elId}`)
                
            }

            setElId( target.id )
            navSlider.classList.add(`positionStyle_${target.id}`)

        }
    }   

    return (
      <div class="myb-MyBetsHeader myb-MyBetsHeader-mouse  ">
        <div class="myb-MyBetsHeader_Scroller " onClick={ (e) => handleClick(e) }>
          <div id="1" data-content="Cerrar apuesta" class="myb-HeaderButton">
            <div id="navSlider" class="myb-NavBarSlider"></div>Cerrar apuesta</div>
          <div id="2" data-content="Directo" class="myb-HeaderButton">
            <div id="navSlider" class="myb-NavBarSlider"></div>Directo</div>
          <div id="3" data-content="Pendiente" class="myb-HeaderButton">
            <div id="navSlider" class="myb-NavBarSlider"></div>Pendiente</div>
          <div id="4" data-content="Determinadas" class="myb-HeaderButton">
            <div id="navSlider" class="myb-NavBarSlider"></div>Determinadas</div>
          <div id="5" data-content="Todos" class="myb-HeaderButton ">
            <div id="navSlider" class="myb-NavBarSlider"></div>Todo 
          </div>
          {/* <div id="navSlider" class="myb-NavBarSlider"></div> */}
        </div>
      </div>
    );
};