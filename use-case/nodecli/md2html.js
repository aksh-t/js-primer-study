const marked = require("marked");

module.export = (markdown, cliOptions) => {
    return marked(markdown, {
        gfm: cliOptions.gfm,
    });
};