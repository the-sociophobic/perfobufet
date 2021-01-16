import * as THREE from 'three'

const textureLoader = async (file, debug) =>
  new Promise((res, rej) =>
    new THREE.TextureLoader()
      .load(file,
        texture =>
          res(texture),
        progress => {
          const url = progress.srcElement.responseURL.split('/')
          const name = url[url.length - 1].split('.')

          if (debug)
            console.log(`loading ${name[0]}.${name[2]} ${Math.floor(progress.loaded / progress.total * 100)}%`)
        },
        error =>
          rej(error)
      )
  )


export default textureLoader