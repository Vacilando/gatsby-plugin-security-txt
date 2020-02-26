const adaptAcknowledgements = (acknowledgements) => `# Link to a page listing security researchers who have helped us.
Acknowledgments: ${acknowledgements}`

const setAcknowledgements = (content, acknowledgements) => acknowledgements
    ? content.replace('# Acknowledgements #', adaptAcknowledgements(acknowledgements))
    : content.replace('# Acknowledgements #', '# Acknowledgements')

module.exports = setAcknowledgements