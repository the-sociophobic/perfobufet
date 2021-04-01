import React from 'react'
import Div100vh from 'react-div-100vh'

import { Provider } from 'components/Store'
import Helmet from 'components/Helmet'
import Frame from 'components/Frame'
import ExternalLink from 'components/ExternalLink'
import MainScene from 'sections/MainScene'
import Loader from 'components/Loader'

import Header from 'components/Header'

import Heads from 'sections/Heads'
import About from 'sections/About'
import Closed from 'sections/Closed'

import 'styles/index.sass'


class App extends React.Component {
  state = {
    index: Math.floor(Math.random() * 4.9),
    loaded: false,
    started: false,
  }

  sceneRef = React.createRef()

  setIndex = _index => {
    this.setState({ index: _index })
    this.sceneRef?.current?.scene?.scene?.units?.heads?.setIndex?.( _index )
  }

  start = () => {
    this.sceneRef?.current?.scene?.start?.()
    this.setState({ started: true })
  }

  renderDesc = person =>
    <div className="desc">
      <div className="desc__card">
        <div className="desc__card__title">
          <h1
            className="desc__card__title__h1"
            onClick={() => this.sceneRef?.current?.scene?.scene?.units?.heads?.toggleHeads?.()}
            // onClick={() => console.log(this.sceneRef?.current?.scene)}
          >
              {person.name}
          </h1>
          <div className="desc__card__title__links">
            <ExternalLink newTab to={`https://instagram.com/${person.social.inst}`}>
              <div className="desc__card__title__links__item desc__card__title__links__item--inst" />
            </ExternalLink>
            <ExternalLink newTab to={`https://vk.com/${person.social.vk}`}>
              <div className="desc__card__title__links__item desc__card__title__links__item--vk" />
            </ExternalLink>
            <ExternalLink newTab to={`https://facebook.com/${person.social.fb}`}>
              <div className="desc__card__title__links__item desc__card__title__links__item--fb" />
            </ExternalLink>
          </div>
        </div>
        <div className="desc__text">
          {person.text}
        </div>
      </div>

      <div
        onClick={() => this.setIndex( (this.state.index + 1) % 5 )}
        className="desc__arrow desc__arrow--left"
      />
      <div
        onClick={() => this.setIndex( (this.state.index + 4) % 5 )}
        className="desc__arrow desc__arrow--right"
      />
    </div>

  render = () =>
  <Provider>
    <Div100vh>
      <Helmet />
      {/* <MainScene
        sceneRef={this.sceneRef}
        react={{
          index: this.state.index
        }}
        setLoaded={() => this.setState({ loaded: true })}
      /> */}
      <div className="App">
        
      </div>
      {!this.state.started &&
        <Loader
          loaded={this.state.loaded}
          start={() => this.start()}
        />}

    </Div100vh>
  </Provider>
}

export default App
