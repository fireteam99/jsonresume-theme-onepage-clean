# jsonresume-theme-onepage-clean

A modified version of [jsonresume-theme-onepage-updated](https://github.com/danielrodcaball/jsonresume-theme-onepage-updated). Works with version 1.0.0 of [JSON Resume](http://jsonresume.org/) specifications.  

Features improved responsiveness including desktop, tablet, mobile, and print.

The project structure was changed based on the boilerplate (https://github.com/jsonresume/jsonresume-theme-boilerplate).

See <a href="/resume.pdf" download="">resume.pdf</a> for an example

## Instaling the theme

Move to the `resume.json` folder and run:

```bash
npm install -g resume-cli
npm install jsonresume-theme-onepage-updated
resume serve -t onepage-updated
```

## Developping

```bash
npm install -g resume-cli
git clone https://github.com/fireteam99/jsonresume-theme-onepage-clean.git
cd jsonresume-theme-onepage-clean
npm install
resume serve --theme .
```

## Usage
```bash
# Export PDF
npm run export

# Export HTML
npm run export:html
```

See also [boilerplate project](https://github.com/jsonresume/jsonresume-theme-boilerplate) and [original project](https://github.com/ainsleyc/jsonresume-theme-onepage)

## License

Available under [the MIT license](http://mths.be/mit).
