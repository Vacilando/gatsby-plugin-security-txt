const adaptCanonical = (canonical) => `# The most common URL for accessing this security.txt file.
Canonical: ${canonical}`

const setCanonical = (content, canonical) => canonical
    ? content.replace('# Canonical #', adaptCanonical(canonical))
    : content.replace('# Canonical #', '# Canonical')

module.exports = setCanonical