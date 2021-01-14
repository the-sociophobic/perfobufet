import * as THREE from 'three'
import Model from 'libs/three/units/Model'


export default class Fence extends Model {
  constructor(props) {
    super(props)
  }

  animate = props => {
    if (this.model)
      if (!this.loaded) {
        this.loaded = true
        this.model.scale.set(1.5, 1.5, 1.5)
      }

    let alpha = props.frameNumber / props.maxFrameNumber * 7

    this.model && (this.model.rotation.y = alpha * 2 * Math.PI)
  }
  dispose = props => {}
}