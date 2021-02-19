import React from 'react'

import ThreeScene from 'components/ThreeScene'

import Lego from 'libs/three/units/random/Lego'
import Heads from 'libs/three/units/heads/Heads'
import Lights from 'libs/three/units/Lights'
import Environment from 'libs/three/units/Environment'
import Controls from 'libs/three/units/Controls'


class MainScene extends React.Component {
  state = {}

  render = () =>
    <ThreeScene
      id="sceneClosed"
      ref={this.props.sceneRef}
      react={this.props.react}
      units={{
        env: {
          unit: Environment,
          disabled: false,
        },
        lego: {
          unit: Lego,
          disabled: false,
        },
        head: {
          unit: Heads,
          disabled: false,
        },
        lights: {
          unit: Lights,
          disabled: false,
        },
        controls: {
          unit: Controls,
          disabled: false,
        },
      }}
    />
}

export default MainScene
