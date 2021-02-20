import React from 'react'

import Frame from 'components/Frame'


class Loader extends React.Component {
  render = () =>
    <div className="Loader">
      <Frame>
        <div className="Loader__container">
            <div className="Loader__text">
              Добро пожаловать на сайт Перфобуфета!
              <br /><br />
              Мы делаем кучу крутых штук. Для того чтобы рассказать о них, мы почти год разрабатывали этот сайт. Он очень сложный, поэтому загрузка занимает несколько секунд.<br />
              Хорошие Новости: когда вы дочитаете этот текст, кнопка «Начать !» скорее всего будет активна!
            </div>
            <button
              className="Loader__button"
              onClick={() => this.props.start()}
              disabled={!this.props.loaded}
            >
              Начать !
            </button>
        </div>
      </Frame>
    </div>
}


export default Loader
