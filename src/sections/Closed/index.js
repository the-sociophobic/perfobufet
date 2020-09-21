import React from 'react'

import Frame from 'components/Frame'
import ThreeScene from 'components/ThreeScene'

import Fence from 'libs/three/units/Fence'
import Lights from 'libs/three/units/Lights'

import fence from './fence.glb'


class Heads extends React.Component {
  state = {}

  render = () =>
    <div
      id="closed"
      className="closed"
    >
      <Frame
        bottom={"АРХИВ"}
      >
        <ThreeScene
          id="sceneClosed"
          units={{
            head: {
              unit: Fence,
              args: {file: fence},
              disabled: false,
            },
            lights: {
              unit: Lights,
              disabled: false,
            }
          }}
        />
      </Frame>
    </div>
}

export default Heads
