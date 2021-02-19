import * as THREE from 'three'
import Unit from 'libs/three/Unit'
import modelLoader from 'libs/three/loaders/modelLoader'

import file from 'models/fence.glb'


class Fence extends Unit {
  constructor(props) {
    super(props)

    this.loadModel()
  }

  loadModel = async () => {
    this.gtlf = await modelLoader(file)
    this.model = this.gtlf.scene
    this.props.scene.add(this.model)
  }

  animate = props => {
    if (this.model) {
      if (!this.loaded) {
        this.loaded = true
        this.model.scale.set(2.5, 2.5, 2.5)
        this.model.position.set(0, -160, 15)
      }

      let alpha = props.frameNumber / props.maxFrameNumber

      this.model.rotation.x = Math.PI + Math.sin(alpha * 5 * Math.PI)
      this.model.rotation.y = Math.cos(alpha * 15 * Math.PI)
      this.model.rotation.z = alpha * 15 * Math.PI
    }
  }
  dispose = props => {}
}


export default Fence