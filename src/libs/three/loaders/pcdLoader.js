import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js'


export default async (model, debug) =>
  new Promise((res, rej) =>
    new PCDLoader()
      .load(
        model,
        mesh =>
          res(mesh),
          progress => {
            const url = progress.srcElement.responseURL.split('/')
            const name = url[url.length - 1].split('.')
  
            if (debug)
              console.log(`loading ${name[0]}.${name[2]} ${Math.floor(progress.loaded / progress.total * 100)}%`)
          },
        error =>
          rej(error),
      )
  )
