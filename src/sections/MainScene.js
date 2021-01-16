import React from 'react'

import ThreeScene from 'components/ThreeScene'

import Lego from 'libs/three/units/random/Lego'
import Lights from 'libs/three/units/Lights'
import Environment from 'libs/three/units/Environment'


class MainScene extends React.Component {
  state = {}

  render = () =>
    <ThreeScene
      id="sceneClosed"
      units={{
        env: {
          unit: Environment,
          disabled: false,
        },
        head: {
          unit: Lego,
          disabled: false,
        },
        lights: {
          unit: Lights,
          disabled: false,
        },
      }}
    />
}

export default MainScene
