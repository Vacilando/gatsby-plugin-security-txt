# Gatsby Plugin security.txt

<sup></sup>When security risks in web services are discovered by independent security researchers who understand the severity of the risk, they often lack the channels to disclose them properly. As a result, security issues may be communicated on inappropriate channels or left unreported.

security.txt is an Internet draft standard, submitted for [RFC review](https://tools.ietf.org/html/draft-foudil-securitytxt-08), to help website owners define the process for security researchers to disclose security vulnerabilities securely.

Gatsby plugin "gatsby-plugin-security-txt" creates a text file called security.txt under the .well-known directory (see [RFC5785](https://tools.ietf.org/html/rfc5785)) of your project on every Gatsby build.

## Getting Started

1. Install the package with **npm** or **yarn**

   `npm install gatsby-plugin-security-txt`

   `yarn add gatsby-plugin-security-txt`

2. Add to plugins in your **gatsby-config.js**

```javascript
module.exports = {
  plugins: ['gatsby-plugin-security-txt'],
};
```

3. Run `gatsby build`

NB The resulting file will appear on path /.well-known/security.txt of your site only after it's built. It is **not enough** to run `gatsby develop`.

## Options

| **Name**         | **Type** | **Description**                                                                                                                                                                                                                                                                                                                                        |
| :--------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| intro            | string   | [OPTIONAL] Introductory words describing the use of the file. Default: "Information related to reporting security vulnerabilities of this site."                                                                                                                                                                                                       |
| contact          | string   | [REQUIRED] A link or e-mail address for people to contact you about security issues. Remember to include "https://" for URLs, and "mailto:" for e-mails. See https://tools.ietf.org/html/draft-foudil-securitytxt#section-3.5.3 Default: —                                                                                                             |
| encryption       | string   | [OPTIONAL] A link to a key which security researchers should use to securely talk to you. Remember to include "https://". See https://tools.ietf.org/html/draft-foudil-securitytxt#section-3.5.4 Default: —                                                                                                                                            |
| acknowledgements | string   | [OPTIONAL] A link to a web page where you say thank you to security researchers who have helped you. Remember to include "https://". See https://tools.ietf.org/html/draft-foudil-securitytxt#section-3.5.1 Default: —                                                                                                                                 |
| languages        | string   | [OPTIONAL] A comma-separated list of language codes that your security team speaks. You may include more than one language. See https://tools.ietf.org/html/draft-foudil-securitytxt#section-3.5.7 Default: en                                                                                                                                         |
| canonical        | string   | [OPTIONAL] The most common URL for accessing your security.txt file. It is important to include this if you are digitally signing the security.txt file, so that researchers can know for sure that you didn't just steal someone else's file with the same content. See https://tools.ietf.org/html/draft-foudil-securitytxt#section-3.5.2 Default: — |
| policy           | string   | [OPTIONAL] A link to a policy detailing what security researchers should do when searching for or reporting security issues. Remember to include "https://". See https://datatracker.ietf.org/doc/html/draft-foudil-securitytxt#section-3.5.7 Default: —                                                                                                         |
| hiring           | string   | [OPTIONAL] A link to any security-related job openings in your organisation. Remember to include "https://". See https://datatracker.ietf.org/doc/html/draft-foudil-securitytxt#section-3.5.6 Default: —                                                                                                                                                         |
| expires          | string   | [OPTIONAL] An ISO 8601 date and time after which the data contained in the "security.txt" file is considered stale and should not be used. See https://datatracker.ietf.org/doc/html/draft-foudil-securitytxt#section-3.5.5 Default: —                                                                                                                                                         |

### Example Options

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-security-txt',
      options: {
        contact: 'https://www.example.com/johndoe',
        canonical: 'https://www.example.com/.well-known/security.txt',
        languages: 'en, es, fr',
      },
    },
  ],
};
```

### Example Implementations

A few real-world implementation examples of security.txt

- https://www.bbc.com/.well-known/security.txt
- https://www.theguardian.com/.well-known/security.txt
- https://www.google.com/.well-known/security.txt
- https://www.npmjs.com/.well-known/security.txt
- https://www.facebook.com/.well-known/security.txt
- https://www.raiffeisen.ch/.well-known/security.txt

## More documentation

A body of additional documentation is growing at https://vacilando.org/article/gatsby-plugin-securitytxt

We also welcome links to sites that make use of this plugin. Send us a representative link to your security.txt and we will consider it for inclusion on the documentation page.

## Thanks

The security.txt syntax follows specifications of the excellent [security.txt](https://securitytxt.org/).

## Maintenance and development

Developed and maintained by [Vacilando](https://github.com/Vacilando) since 2020/02/10 — see the [main article](https://vacilando.org/article/gatsby-plugin-securitytxt).

Every contribution is very much appreciated. Feel free to file bugs, feature- and pull-requests.

If this plugin is helpful for you, please star it on [GitHub](https://github.com/Vacilando/gatsby-plugin-security-txt).
<sup></sup>
