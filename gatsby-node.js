const fs = require('fs-extra')
const path = require('path')

const setSecurityTXT = require('./utils/setSecurityTXT')

const getPath = (htPath, program) => path.join(program.directory, htPath, 'security.txt')
const contentReadFile = pathToFile => fs.readFileSync(pathToFile, 'utf8')

const getContent = (pathToFile, pluginOptions) => {
  let content = contentReadFile(pathToFile)
  content = setSecurityTXT(content, pluginOptions.contact)
  return content
}

exports.onPostBuild = async ({ store }, pluginOptions) => {
  const { program } = store.getState()

  const htPath = getPath('public', program)
  const htContent = getContent(path.join(__dirname, 'utils/files/security.txt'), pluginOptions)

  // Return a promise chain
  try {
    await fs.ensureFile(htPath)
  } catch (e) {
    console.error('onPostBuild error gatsby-plugin-security-txt', JSON.stringify(e))
    return
  }
  await fs.writeFile(htPath, htContent)

  return
}
