import React from "react";
import { Swiper, SwiperSlide } from "./swiper.js"
import { Field, reduxForm } from "redux-form"




const ContactForm = ( { handleSubmit } ) => {

    return (
      <form className="container_form" onSubmit={handleSubmit}>
        <Swiper virtual navigation>
          <SwiperSlide>
            <BlockBasic />
          </SwiperSlide>
          <SwiperSlide>
            <BlockBetsInfo1 />
          </SwiperSlide>
          <SwiperSlide>
            <BlockBetsInfo2 />
          </SwiperSlide>

          <SwiperSlide>
            <BlockBetsInfo3 />
          </SwiperSlide>
        </Swiper>
        <div className="container_submit_btn">
          <button className="submit_btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
}


const BlockBasic = () => {
    return (
      <div className="form">
        <div>
          <label>Single, Double, Triples и т.п.</label>
          <Field name="Triples input" component="input" type="text"  />
        </div>
        <div>
          <label>Кол-во исходов</label>
          <Field name="quantity res" component="input" type="text"  />
        </div>
        <div>
          <label>Кол-во ставок</label>
          <Field name="quantity bets" component="input" type="text"  />
        </div>
        <div>
          <label>Сумма ставки</label>
          <Field name="sum bet" component="input" type="text"  />
        </div>
      </div>
    );
}

const BlockBetsInfo1 = () => {
    return (
      <div className="form">
        <div>
          <label>Название результата исхода(Menos de 2.5)</label>
          <Field name="Mas/Menos_1" component="input" type="text" />
        </div>
        <div>
          <label>Название исхода(Total de goles)</label>
          <Field name="Total_1" component="input" type="text" />
        </div>
        <div>
          <label>Итог</label>
          <Field name="res_1" component="input" type="text" />
        </div>
        <div>
          <label>Первая команда</label>
          <Field name="comand-1_1" component="input" type="text" />
        </div>
        <div>
          <label>Вторая команда</label>
          <Field name="comand-2_1" component="input" type="text" />
        </div>
        <div>
          <label>Лига события - 1</label>
          <Field name="liga-1_1" component="input" type="text" />
        </div>
        <div>
          <label>Лига события - 2</label>
          <Field name="liga-2_1" component="input" type="text" />
        </div>
        <div>
          <label>Коэффицент</label>
          <Field name="cf_1" component="input" type="text" />
        </div>

        <div>
          <label>Счет в мтче</label>
          <Field name="match_score_1" component="input" type="text" />
        </div>
        
        <div>
          <label>Дата события</label>
          <Field name="date_1" component="input" type="text" />
        </div>

        <div>
          <label>Дата ставки</label>
          <Field name="date_bets_1" component="input" type="text" />
        </div>

      </div>
    );
}

const BlockBetsInfo2 = () => {
  return (
    <div className="form">
      <div>
        <label>Название результата исхода(Menos de 2.5)</label>
        <Field name="Mas/Menos_2" component="input" type="text" />
      </div>
      <div>
        <label>Название исхода(Total de goles)</label>
        <Field name="Total_2" component="input" type="text" />
      </div>
      <div>
        <label>Итог</label>
        <Field name="res_2" component="input" type="text" />
      </div>
      <div>
        <label>Первая команда</label>
        <Field name="comand-1_2" component="input" type="text" />
      </div>
      <div>
        <label>Вторая команда</label>
        <Field name="comand-2_2" component="input" type="text" />
      </div>
      <div>
        <label>Лига события - 1</label>
        <Field name="liga-1_2" component="input" type="text" />
      </div>
      <div>
        <label>Лига события - 2</label>
        <Field name="liga-2_2" component="input" type="text" />
      </div>
      <div>
        <label>Коэффицент</label>
        <Field name="cf_2" component="input" type="text" />
      </div>

      <div>
        <label>Счет в мтче</label>
        <Field name="match_score_2" component="input" type="text" />
      </div>
      
      <div>
        <label>Дата события</label>
        <Field name="date_2" component="input" type="text" />
      </div>

      <div>
        <label>Дата ставки</label>
        <Field name="date_bets_2" component="input" type="text" />
      </div>

    </div>
  );
}

const BlockBetsInfo3 = () => {
  return (
    <div className="form">
      <div>
        <label>Название результата исхода(Menos de 2.5)</label>
        <Field name="Mas/Menos_3" component="input" type="text" />
      </div>
      <div>
        <label>Название исхода(Total de goles)</label>
        <Field name="Total_3" component="input" type="text" />
      </div>
      <div>
        <label>Итог</label>
        <Field name="res_3" component="input" type="text" />
      </div>
      <div>
        <label>Первая команда</label>
        <Field name="comand-1_3" component="input" type="text" />
      </div>
      <div>
        <label>Вторая команда</label>
        <Field name="comand-2_3" component="input" type="text" />
      </div>
      <div>
        <label>Лига события - 1</label>
        <Field name="liga-1_3" component="input" type="text" />
      </div>
      <div>
        <label>Лига события - 2</label>
        <Field name="liga-2_3" component="input" type="text" />
      </div>
      <div>
        <label>Коэффицент</label>
        <Field name="cf_3" component="input" type="text" />
      </div>

      <div>
        <label>Счет в мтче</label>
        <Field name="match_score_3" component="input" type="text" />
      </div>
      
      <div>
        <label>Дата события</label>
        <Field name="date_3" component="input" type="text" />
      </div>

      <div>
        <label>Дата ставки</label>
        <Field name="date_bets_3" component="input" type="text" />
      </div>

    </div>
  );
}



let createReduxForm = reduxForm({ form: 'contact' })


export default createReduxForm(ContactForm)