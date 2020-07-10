import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

import ResizeObserver from 'resize-observer-polyfill'

import Scene from '../libs/three/Scene'
// import Character from 'libs/engines/3d/units/Character'
// import Landscape from 'libs/engines/3d/units/Landscape'
// import Coins from 'libs/engines/3d/units/Coins'
// import Lights from 'libs/engines/3d/units/Lights'
// import Fog from 'libs/engines/3d/units/Fog'
// import Controls from 'libs/engines/3d/units/Controls'

// import EasterEgg from 'libs/engines/3d/units/EasterEgg'


interface Props {

}

export default class ThreeScene extends React.Component {
  viewerRef = useRef<HTMLDivElement>(null)
  resizeObs
  readonly scene = new Scene({
    react: {},
    units: {
      // Controls: {
      //   unit: Controls,
      //   disabled: false,
      // },
      // EasterEgg: {
      //   unit: EasterEgg,
      //   disabled: false,
      // },
      }
    })

  componentDidMount() {
    this.resizeObs = new ResizeObserver(this.resize.bind(this))
      .observe(this.viewerRef.current)

    this.scene.init(this.viewerRef.current)
  }

  componentWillUnmount = () => {
    this.scene.dispose()
    // this.viewerRef.removeChild(this.renderer.domElement)
  }

  resize() {
    const ViewerDiv = this.viewerRef.current
    
    if (!ViewerDiv)
      return

    this.scene.resize(ViewerDiv.clientWidth, ViewerDiv.clientHeight)
  }

  render = () =>
    <div
      className="Viewer"
      ref={this.viewerRef}
    >
    </div>
}
