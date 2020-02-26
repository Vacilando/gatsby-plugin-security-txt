const adaptHiring = (hiring) => `# Link to any security-related job openings in your organization.
Hiring: ${hiring}`

const setHiring = (content, hiring) => hiring
    ? content.replace('# Hiring #', adaptHiring(hiring))
    : content.replace('# Hiring #', '# Hiring')

module.exports = setHiring