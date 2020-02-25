const fs = require('fs-extra')
const path = require('path')

const setIntro = require('./utils/setIntro')
const setContact = require('./utils/setContact')
const setCanonical = require('./utils/setCanonical')

const getPath = (htPath, program) => path.join(program.directory, htPath, '.well-known/security.txt')
const contentReadFile = pathToFile => fs.readFileSync(pathToFile, 'utf8')

const getContent = (pathToFile, pluginOptions) => {
  let content = contentReadFile(pathToFile)
  content = setIntro(content, pluginOptions.intro)
  content = setContact(content, pluginOptions.contact)
  content = setCanonical(content, pluginOptions.canonical)
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
