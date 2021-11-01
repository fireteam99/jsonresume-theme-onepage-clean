const fs = require("fs");
const path = require('path');
const Handlebars = require("handlebars");
const { DateTime } = require("luxon");

Handlebars.registerHelper('formatDate', function(dateString) {
    let specificity = dateString.split('-').length;

    dt = DateTime.fromISO(dateString);
    return  dt.toLocaleString(specificity === 3 ? DateTime.DATE_MED : { month: 'short', year: 'numeric' })
})

function render(resume) {
    var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
    var tpl = fs.readFileSync(__dirname + "/resume.hbs", "utf-8");
    var partialsDir = path.join(__dirname, 'partials');
    var filenames = fs.readdirSync(partialsDir);

    filenames.forEach(function(filename) {
        var matches = /^([^.]+).hbs$/.exec(filename);
        if (!matches) {
            return;
        }
        var name = matches[1];
        var filepath = path.join(partialsDir, filename)
        var template = fs.readFileSync(filepath, 'utf8');

        Handlebars.registerPartial(name, template);
    });
    return Handlebars.compile(tpl)({
        css: css,
        resume: resume
    });
}

module.exports = {
    render: render
};