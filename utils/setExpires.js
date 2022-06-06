const adaptExpires = (expires) => `Expires: ${expires}`

const setExpires = (content, expires) => expires
    ? content.replace('# Expires #', adaptExpires(expires))
    : content.replace('# Expires #', '# Expires')

module.exports = setExpires