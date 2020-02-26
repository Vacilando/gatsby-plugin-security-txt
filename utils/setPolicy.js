const adaptPolicy = (policy) => `# What security researchers should do when searching for or reporting security issues.
Policy: ${policy}`

const setPolicy = (content, policy) => policy
    ? content.replace('# Policy #', adaptPolicy(policy))
    : content.replace('# Policy #', '# Policy')

module.exports = setPolicy