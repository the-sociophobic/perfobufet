import * as THREE from 'three'
import Unit from 'libs/three/Unit'
import isMobile from 'libs/utils/isMobile'
import pcdLoader from 'libs/three/loaders/pcdLoader'
import tapEvent from 'libs/utils/tapEvent'
import timingFunctions from 'libs/three/handlers/transitionHandler/timingFunctions'

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

const frusVec = new THREE.Vector3()
const rotationVec = new THREE.Vector3()
const forward = new THREE.Vector3(0, 1, 0)
const quaternion = new THREE.Quaternion()


export default class Heads extends Unit {
  constructor(props) {
    super(props)

    this.index = this.props.react.index
    this.openedHeads = false

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
        -R * .75,
        -Math.cos(alpha) * R / 2 + R / 2
      )
      head.material.size *= 35
  
      // console.log(this.props)
      // head.cursor = 'pointer'
      // tapEvent(head, () =>
      //   this.toggleHeads())
    })

    this.props.onComplete && this.props.onComplete()

    this.props.unitLoaded()
  }

  toggleHeads = () => {
    this.heads.forEach(head =>
      head.scale.multiplyScalar(this.openedHeads ? 1 / 2 : 2))
    this.openedHeads = !this.openedHeads
  }

  animate = props => {
    frusVec.set(
      props.camera.near * Math.tan(props.camera.fov / 2) * -props.units.controls.mouse.alphaX,
      props.camera.near * Math.tan(props.camera.fov / 2) * props.units.controls.mouse.alphaY / props.camera.aspect,
      props.camera.near
    ).add(props.camera.position)

    this.heads.forEach((head, index) => {
      if (head && head.rotation) {
        const alpha = (headsLength + index - this.index) / headsLength * Math.PI * 2
        const radius = this.openedHeads ? (isMobile() ? R * 2.55 : 120) : R

        head.position.set(
          Math.sin(alpha) * radius * 1.5 + (isMobile() || this.openedHeads ? 0 : radius / 3),
          this.openedHeads && !isMobile() ? -R * .85 : -R * .75 - R * 1.25,
          -Math.cos(alpha) * radius / 2 + R / 2
        )

        // head.position.copy(frusVec)

        const alphaTime = props.frameNumber / props.maxFrameNumber
        const alphaProgressY = timingFunctions["easeInOutQuad"](Math.cos(alphaTime * 249 * Math.PI))
        const alphaProgressZ = timingFunctions["easeInOutQuad"](Math.sin(alphaTime * 249 * Math.PI))
        // const alphaProgressY = timingFunctions["easeInOutQuad"](Math.cos(12.5 * 505 * Math.PI))
        // const alphaProgressZ = timingFunctions["easeInOutQuad"](Math.sin(12.5 * 505 * Math.PI))

        head.rotation.x = -Math.PI / 2 - props.units.controls.mouse.alphaY
        head.rotation.y = alphaProgressY * .25
        head.rotation.z = alphaProgressZ * .15 + (.5 - props.units.controls.mouse.alphaX / 5) * 2 * Math.PI + (this.openedHeads ? Math.PI : 0)


        // this.model.rotation.x = Math.PI + Math.sin(alpha * 15 * Math.PI)
        // this.model.rotation.y = Math.cos(alpha * 15 * Math.PI)
        // this.model.rotation.z = alpha * 15 * Math.PI
  
        // rotationVec
        //   .copy(frusVec)
        //   .sub(head.position)
        //   .normalize()
        // head.quaternion.setFromUnitVectors(forward, rotationVec)
        // head.quaternion.copy(quaternion)
      } 
    })
  }
  dispose = props => {}
}