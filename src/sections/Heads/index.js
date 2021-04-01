import React from 'react'

import Frame from 'components/Frame'
import ThreeScene from 'components/ThreeScene'
import ExternalLink from 'components/ExternalLink'

import Head from 'libs/three/units/Head'
import Lights from 'libs/three/units/Lights'
import Controls from 'libs/three/units/Controls'


class Heads extends React.Component {
  state = {
    currentHead: Math.floor(Math.random() * 4.9),
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
  toggleHeads = () =>
    this.sceneRef?.current?.scene?.scene?.units?.heads?.toggleHeads?.()


  render = () =>
    <Frame clouds className="frame--last" bottom='лид груп'>
      <ThreeScene
        sceneRef={this.sceneRef}
        react={{
          index: this.state.index
        }}
        setLoaded={() => this.setState({ loaded: true })}
      />
    </Frame>
}

export default Heads
