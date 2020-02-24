const adaptContact = (contact) => `
Contact: ${contact}
`

const setSecurityTXT = (content, contact) => contact
    ? content.replace('### CONTACT ###', adaptContact(contact))
    : content.replace('### CONTACT ###', '')

module.exports = setSecurityTXT