import fs from 'fs'
import path from 'path'

const PAGES_DIR = path.join(__dirname, '../client/pages')

function AsyncPageGenPlugin(options) {}

AsyncPageGenPlugin.prototype.apply = function(compiler) {
  let pages = `
    /**
     *
     *  DONT EDIT THIS FILE: IT WILL BE OVERWRITTEN BY WEBPACK NEXT TIME YOU SAVE ANYTHING!
     *
     */

    import universal from 'react-universal-component'
  `
  let names = []
  fs.readdirSync(PAGES_DIR).forEach(file => {
    const filepath = path.join(PAGES_DIR, file)
    if (fs.statSync(filepath).isDirectory()) {
      throw new Error('todo: handle nested page directories')
    } else {
      const name = file.split('.')[0]
      if (name !== 'index') {
        names.push(name.toLowerCase())
        pages += `
          export const ${name.toLowerCase()} = universal(
            () => import(/* webpackChunkName: '${name}' */ '${filepath}'),
            {
              resolve: () => require.resolveWeak('${filepath}'),
              chunkName: '${name}',
              minDelay: 100
            }
          )
        `
      }
    }
  })

  fs.writeFileSync(path.join(PAGES_DIR, 'index.js'), pages)
}

module.exports = AsyncPageGenPlugin
