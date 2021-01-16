import React from 'react'
import Div100vh from 'react-div-100vh'

import Helmet from 'components/Helmet'
import Frame from 'components/Frame'

import Header from 'components/Header'

import Heads from 'sections/Heads'
import About from 'sections/About'
import Closed from 'sections/Closed'

import 'styles/index.sass'
import MainScene from 'sections/MainScene'


class App extends React.Component {
  state = {}

  render = () =>
    <Div100vh>
      <Helmet />
      <div className="a">
        <MainScene />
      </div>
      <div className="App">
        <Closed />
        {/* <MainScene />
        <div className="App__content">
          <Frame>
          </Frame>
        </div> */}
      </div>
    </Div100vh>
}

export default App
