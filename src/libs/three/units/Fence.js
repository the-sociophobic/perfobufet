import * as THREE from 'three'
import Model from 'libs/three/units/Model'


export default class Fence extends Model {
  constructor(props) {
    super(props)
  }

  animate = props => {
    let alpha = props.frameNumber / props.maxFrameNumber * 7

    this.model && (this.model.rotation.y = alpha * 2 * Math.PI)
  }
  dispose = props => {}
}