# Gatsby Plugin security.txt

When security risks in web services are discovered by independent security researchers who understand the severity of the risk, they often lack the channels to disclose them properly. As a result, security issues may be left unreported. security.txt defines a standard to help organizations define the process for security researchers to disclose security vulnerabilities securely.

security.txt is currently an Internet draft that has been submitted for [RFC review](https://tools.ietf.org/html/rfc5785).

**Gatsby Plugin security.txt** creates a text file called security.txt under the .well-known directory of your project on every Gatsby build.

## Getting Started

1. Install the package with **npm** or **yarn**

   `npm install gatsby-plugin-security-txt`

   `yarn add gatsby-plugin-security-txt`

2. Add to plugins in your gatsby-config.js

```javascript
module.exports = {
  plugins: ['gatsby-plugin-security-txt'],
}
```

## Options

| **Name**             | **Type**                        | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------------------- | :------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contact          | string                  | A link or e-mail address for people to contact you about security issues. Remember to include "https://" for URLs, and "mailto:" for e-mails.                                                                                                                                                                                                                                                                                                                                                                                                       |
                                                                                                                                                                                                                                                                           |

### Example Options:

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        contact: 'https://www.example.com/johndoe',
      },
    },
  ],
}
```

## Contributing

Every contribution is very much appreciated.
Feel free to file bugs, feature- and pull-requests.

**If this plugin is helpful for you, star it on [GitHub](https://github.com/Vacilando/gatsby-plugin-security-txt).**

## Thanks

The security.txt syntax follows [security.txt](https://securitytxt.org/).
