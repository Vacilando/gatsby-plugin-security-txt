const adaptExpires = (
  expires
) => `# Date and time after which this data is considered stale
Expires: ${expires}`;

const setExpires = (content, expires) =>
  expires
    ? content.replace('# Expires #', adaptExpires(expires))
    : content.replace('# Expires #', '# Expires');

module.exports = setExpires;
