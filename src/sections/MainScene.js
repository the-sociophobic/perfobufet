import React from 'react'

import ThreeScene from 'components/ThreeScene'

import Lego from 'libs/three/units/random/Lego'
import Heads from 'libs/three/units/Heads'
import Lights from 'libs/three/units/Lights'
import Environment from 'libs/three/units/Environment'
import Controls from 'libs/three/units/Controls'
import Fence from 'libs/three/units/Fence'
import Music from 'libs/three/units/Music'
import PERFOBUFET from 'audio/MBMK.mp3'


class MainScene extends React.Component {
  state = {}

  render = () =>
    <ThreeScene
      id="sceneClosed"
      ref={this.props.sceneRef}
      react={this.props.react}
      setLoaded={this.props.setLoaded}
      units={{
        env: {
          unit: Environment,
          disabled: false,
        },
        lego: {
          unit: Lego,
          disabled: false,
        },
        heads: {
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
        fence: {
          unit: Fence,
          disabled: false,
        },
        // music: {
        //   unit: Music,
        //   disabled: false,
        //   args: {
        //     file: PERFOBUFET
        //   },
        // },
      }}
    />
}

export default MainScene
