const fs = require('fs-extra')
const path = require('path')

const setIntro = require('./utils/setIntro')
const setContact = require('./utils/setContact')
const setEncryption = require('./utils/setEncryption')
const setAcknowledgements = require('./utils/setAcknowledgements')
const setPreferredLanguages = require('./utils/setPreferredLanguages')
const setCanonical = require('./utils/setCanonical')
const setPolicy = require('./utils/setPolicy')
const setHiring = require('./utils/setHiring')
const setExpires = require('./utils/setExpires')

const getPath = (htPath, program) => path.join(program.directory, htPath, '.well-known/security.txt')
const contentReadFile = pathToFile => fs.readFileSync(pathToFile, 'utf8')

const getContent = (pathToFile, pluginOptions) => {
  let content = contentReadFile(pathToFile)
  content = setIntro(content, pluginOptions.intro)
  content = setContact(content, pluginOptions.contact)
  content = setEncryption(content, pluginOptions.encryption)
  content = setAcknowledgements(content, pluginOptions.acknowledgements)
  content = setPreferredLanguages(content, pluginOptions.languages)
  content = setCanonical(content, pluginOptions.canonical)
  content = setPolicy(content, pluginOptions.policy)
  content = setHiring(content, pluginOptions.hiring)
  content = setExpires(content, pluginOptions.expires)
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
