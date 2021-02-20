import Unit from 'libs/three/Unit'


export default class Lowpoly extends Unit {
  constructor(props) {
    super(props)

    const { scene, THREE } = props

    this.light2 = new THREE.AmbientLight( 0xFFFFFF )
    this.light0 = new THREE.HemisphereLight( 0xffffff, 0x444444, 1.15 )
    this.light0.position.set( -7, 25, -7 )
    this.light1 = new THREE.HemisphereLight( 0xffffff, 0x444444, 1.15 )
    this.light1.position.set( 10, 25, 10 )
    // this.light0.castShadow = true
    scene.add( this.light0 )
    scene.add( this.light1 )
    scene.add( this.light2 )

    props.unitLoaded()
  }

  animate = props => {}
  dispose = () => {}
}
