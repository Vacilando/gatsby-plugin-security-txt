const adaptContact = (contact) => `# How to communicate about security issues.
Contact: ${contact}`

const setContact = (content, contact) => contact
    ? content.replace('# Contact #', adaptContact(contact))
    : content.replace('# Contact #', '# Contact')

module.exports = setContact