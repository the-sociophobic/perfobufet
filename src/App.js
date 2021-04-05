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
