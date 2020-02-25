const adaptCanonical = (canonical) => `# Canonical URL; the most common URL for accessing this security.txt file.
${canonical}`

const setCanonical = (content, canonical) => canonical
    ? content.replace('# Canonical #', adaptCanonical(canonical))
    : content.replace('# Canonical #', '')

module.exports = setCanonical