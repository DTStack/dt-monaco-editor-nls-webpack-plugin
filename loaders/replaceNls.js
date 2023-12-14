const fs = require('fs');
const nls = require.resolve('../nls.js');

module.exports = function (content, _map, _meta) {
    const regExp = /monaco-editor\/esm\/vs\/nls\.js/;

    if (!regExp.test(this.resourcePath)) return content;
    const _content = fs.readFileSync(nls, { encoding: 'utf8' });
    return _content;
};
