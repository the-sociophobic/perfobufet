import React from 'react'

import Frame from 'components/Frame'
import ThreeScene from 'components/ThreeScene'

import Head from 'libs/three/units/Head'
import Lights from 'libs/three/units/Lights'
import Mouse from 'libs/three/units/Mouse'

import Tomilov from './Tomilov.glb'
import Naumov from './Naumov.glb'
import Belysh from './Belysh.glb'
import Khuzin from './Khuzin.glb'
import Demidkin from './Demidkin.glb'


class Heads extends React.Component {
  state = {
    currentHead: 0
  }

  renderHead = model => {

  }

  render = () =>
    <div
      id="heads"
      className="heads"
    >
      {[
        {name: "Артём Томилов", file: Tomilov},
        {name: "Иван Наумов", file: Naumov},
        {name: "Дмитрий Белыш", file: Belysh},
        {name: "Рома Хузин", file: Khuzin},
        {name: "Иван Демидкин", file: Demidkin},
      ].map((head, index) =>
        <Frame
          bottom={head.name}
        >
          <ThreeScene
            // id={"scene" + index}
            units={{
              head: {
                unit: Head,
                args: {file: head.file},
                disabled: false,
              },
              lights: {
                unit: Lights,
                disabled: false,
              },
              Controls: {
                unit: Mouse,
                disabled: false,
              },
            }}
          />
        </Frame>
      )}
    </div>
}

export default Heads
