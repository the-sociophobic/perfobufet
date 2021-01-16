import React from 'react'

import Frame from 'components/Frame'
import ThreeScene from 'components/ThreeScene'
import Social from 'components/Social'

import Lego from 'libs/three/units/random/Lego'
import Lights from 'libs/three/units/Lights'
import Environment from 'libs/three/units/Environment'


class Heads extends React.Component {
  state = {}

  render = () =>
    <div
      id="closed"
      className="closed"
    >
      <Frame>
        <ThreeScene
          id="sceneClosed"
          units={{
            env: {
              unit: Environment,
              disabled: false,
            },
            // head: {
            //   unit: Lego,
            //   // args: {file: fence},
            //   disabled: false,
            // },
            // lights: {
            //   unit: Lights,
            //   disabled: false,
            // },
          }}
        />
      </Frame>
    </div>
}

export default Heads
