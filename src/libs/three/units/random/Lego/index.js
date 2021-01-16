import * as THREE from 'three'
import Model from 'libs/three/units/Model'


export default class Fence extends Model {
  constructor(props) {
    super(props)
  }

  animate = props => {
    if (this.model) {
      if (!this.loaded) {
        this.loaded = true
        this.model.scale.set(.5, .5, .5)
        this.model.rotation.y = Math.PI
      }

      let alpha = props.frameNumber / props.maxFrameNumber

      this.model.rotation.x = Math.PI + Math.sin(alpha * 15 * Math.PI)
      this.model.rotation.y = Math.cos(alpha * 15 * Math.PI)
      this.model.rotation.z = alpha * 15 * Math.PI

      this.mixer && this.mixer.update(props.clock.getDelta())
    }

  }
  dispose = props => {}
}