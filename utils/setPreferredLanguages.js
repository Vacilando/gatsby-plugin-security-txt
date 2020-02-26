const adaptPreferredLanguages = (languages) => `# Preferred languages for communication.
Preferred-Languages: ${languages}`

const setPreferredLanguages = (content, languages) => languages
    ? content.replace('# Preferred languages #', adaptPreferredLanguages(languages))
    : content.replace('# Preferred languages #', `# Preferred languages for communication.     
    Preferred-Languages: en`)

module.exports = setPreferredLanguages