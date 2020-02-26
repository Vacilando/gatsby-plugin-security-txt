const adaptEncryption = (encryption) => `# Link to a key for secure communication.
Encryption: ${encryption}`

const setEncryption = (content, encryption) => encryption
    ? content.replace('# Encryption #', adaptEncryption(encryption))
    : content.replace('# Encryption #', '# Encryption')

module.exports = setEncryption