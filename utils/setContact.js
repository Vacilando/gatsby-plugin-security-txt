const adaptContact = (contact) => `# How to contact us about security issues.
Contact: ${contact}`

const setContact = (content, contact) => contact
    ? content.replace('# Contact #', adaptContact(contact))
    : content.replace('# Contact #', '')

module.exports = setContact