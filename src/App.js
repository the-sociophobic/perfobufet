import React from 'react'
import Div100vh from 'react-div-100vh'

import Header from 'components/Header'

import Heads from 'sections/Heads'
import About from 'sections/About'
import Closed from 'sections/Closed'

import 'styles/index.sass'


class App extends React.Component {
  state = {}

  render = () =>
    <Div100vh>
      <div className="App">
        {/* <div className="container"> */}
          {/* <Header /> */}
          {/* <Heads />
          <About /> */}
          <Closed />
        {/* </div> */}
      </div>
    </Div100vh>
}

export default App
