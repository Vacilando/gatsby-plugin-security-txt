<sup></sup># Gatsby Plugin security.txt

When security risks in web services are discovered by independent security researchers who understand the severity of the risk, they often lack the channels to disclose them properly. As a result, security issues may be left unreported. security.txt defines a standard to help organizations define the process for security researchers to disclose security vulnerabilities securely.

security.txt is currently an Internet draft that has been submitted for [RFC review](https://tools.ietf.org/html/draft-foudil-securitytxt-08).

**Gatsby Plugin security.txt** creates a text file called security.txt under the .well-known directory (see [RFC5785](https://tools.ietf.org/html/rfc5785)) of your project on every Gatsby build.

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

| **Name** | **Type** | **Description** |
| :- | :- | :- |
| intro          | string                  | [OPTIONAL] Introductory words describing the use of the file. Default: "Information related to reporting security vulnerabilities of this site." |
| contact        | string                  | [REQUIRED] A link or e-mail address for people to contact you about security issues. Remember to include "https://" for URLs, and "mailto:" for e-mails. See https://tools.ietf.org/html/draft-foudil-securitytxt#section-3.5.3 Default: — |
| canonical          | string                  | [OPTIONAL] The most common URL for accessing your security.txt file. It is important to include this if you are digitally signing the security.txt file, so that researchers can know for sure that you didn't just steal someone else's file with the same content. See https://tools.ietf.org/html/draft-foudil-securitytxt#section-3.5.2 Default: — |

### Example Options:

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-security-txt',
      options: {
        contact: 'https://www.example.com/johndoe',
        canonical: 'https://www.example.com/.well-known/security.txt',
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
<sup></sup>
