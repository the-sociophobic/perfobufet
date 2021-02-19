import React, { useRef } from 'react'

import ResizeObserver from 'resize-observer-polyfill'

import Scene from '../libs/three/Scene'
// import Character from 'libs/3d/units/Character'
// import Landscape from 'libs/3d/units/Landscape'
// import Coins from 'libs/3d/units/Coins'
// import Lights from 'libs/3d/units/Lights'
// import Fog from 'libs/3d/units/Fog'
// import Controls from 'libs/3d/units/Controls'

// import EasterEgg from 'libs/3d/units/EasterEgg'


export default class ThreeScene extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.viewerRef = new React.createRef()

    this.scene = new Scene(props)
  }

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
