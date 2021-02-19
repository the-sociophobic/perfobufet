import * as THREE from 'three'
import Unit from 'libs/three/Unit'
import isMobile from 'libs/utils/isMobile'
import pcdLoader from 'libs/three/loaders/pcdLoader'
import tapEvent from 'libs/utils/tapEvent'

import Demidkin from 'models/heads/Demidkin.pcd'
import Naumov from 'models/heads/Naumov.pcd'
import Tomilov from 'models/heads/Tomilov.pcd'
import Belysh from 'models/heads/Belysh.pcd'
import Khuzin from 'models/heads/Khuzin.pcd'


const array = [
  Demidkin,
  Naumov,
  Tomilov,
  Belysh,
  Khuzin,
]
const R = isMobile() ? 37 : 55
const headsLength = 5



export default class Heads extends Unit {
  constructor(props) {
    super(props)

    this.index = this.props.react.index

    this.loadModel()
  }

  setIndex = _index =>
    this.index = _index

  loadModel = async () => {
    this.heads = [headsLength]
    this.heads[0] = await pcdLoader(Demidkin)
    this.heads[1] = await pcdLoader(Naumov)
    this.heads[2] = await pcdLoader(Tomilov)
    this.heads[3] = await pcdLoader(Belysh)
    this.heads[4] = await pcdLoader(Khuzin)

    this.heads.forEach((head, index) => {
      this.props.scene.add(head)

      head.scale.multiplyScalar(R)
      head.rotation.x -= Math.PI / 2
      const alpha = ((headsLength + index - this.index) % headsLength) / headsLength * Math.PI * 2
      head.position.set(
        Math.sin(alpha) * R * 1.5 + (isMobile() ? 0 : R / 3),
        -R,
        -Math.cos(alpha) * R / 2 + R / 2
      )
      head.material.size *= 35
  
      console.log(this.props)
      // head.cursor = 'pointer'
      // tapEvent(head, () => this.props.react.toggleDesc())
    })

    this.props.onComplete && this.props.onComplete()
  }

  animate = props => {
    this.heads.forEach((head, index) => {
      if (head && head.rotation) {
        // let alpha = props.frameNumber / props.maxFrameNumber * 7

        // this.model && (this.model.rotation.z = (alpha + .5) * 2 * Math.PI)
        head.rotation.x = -Math.PI / 2 - props.units.controls.mouse.alphaY
        head.rotation.z = (.5 - props.units.controls.mouse.alphaX / 5) * 2 * Math.PI
    
        const alpha = (headsLength + index - this.index) / headsLength * Math.PI * 2
        head.position.set(
          Math.sin(alpha) * R * 1.5 + (isMobile() ? 0 : R / 3),
          -R,
          -Math.cos(alpha) * R / 2 + R / 2
        )
  
        // //ANIMATION
        // this.mixer && this.mixer.update(props.clock.getDelta()) 
      } 
    })
  }
  dispose = props => {}
}