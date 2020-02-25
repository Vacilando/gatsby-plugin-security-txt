const adaptIntro = (intro) => `# ${intro}`

const setIntro = (content, intro) => intro
    ? content.replace('# Intro #', adaptIntro(intro))
    : content.replace('# Intro #', '# Information related to reporting security vulnerabilities of this site.')

module.exports = setIntro