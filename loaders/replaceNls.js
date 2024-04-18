const fs = require("fs");
const nls = require.resolve("../nls.js");

module.exports = function (content, _map, _meta) {
    const pathRegExp = /monaco-editor[\\\/]esm[\\\/]vs[\\\/]nls\.js$/;

    if (!pathRegExp.test(this.resourcePath)) return content;
    const _content = fs.readFileSync(nls, { encoding: "utf8" });
    return _content;
};
