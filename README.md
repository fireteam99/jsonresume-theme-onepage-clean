# jsonresume-theme-onepage-updated

This theme is an update of the updated onepage theme (https://github.com/ainsleyc/jsonresume-theme-onepage) to work with version 1.0.0 of [JSON Resume](http://jsonresume.org/) specifications. Features include updating styling along with responsive design for mobile/tablet viewports (html only).  

The project structure was changed based on the boilerplate (https://github.com/jsonresume/jsonresume-theme-boilerplate).

Added certificates and projects sections and some minor chnages.

See <a href="/resume.pdf" download="">resume.pdf</a> for an example

## Installing Locally

```
npm install -g resume-cli
git clone https://github.com/danielrodcaball/jsonresume-theme-onepage-updated.git
cd jsonresume-theme-onepage-updated
npm install
resume serve --theme .
```

## Exporting
You can export in either `html` or `pdf` format. Uses [puppeteer](https://github.com/puppeteer/puppeteer) to export `pdf` format due to layout consistancy reasons.
```
# pdf
npm run export

# html
npm run export:html
```

See also [boilerplate project](https://github.com/jsonresume/jsonresume-theme-boilerplate) and [original project](https://github.com/ainsleyc/jsonresume-theme-onepage)

## License

Available under [the MIT license](http://mths.be/mit).
