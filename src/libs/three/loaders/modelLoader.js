import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import isProd from 'libs/utils/isProd'


export default async (model, debug) =>
  new Promise((res, rej) =>
    new GLTFLoader()
      .load(
        model,
        gltf =>
          res(gltf),
          progress => {
            const url = progress.srcElement.responseURL.split('/')
            const name = url[url.length - 1].split('.')
  
            !isProd() && debug &&
              console.log(`loading ${name[0]}.${name[2]} ${Math.floor(progress.loaded / 1024 / 10.24) / 100}mb`)
          },
        error =>
          rej(error),
      )
  )
