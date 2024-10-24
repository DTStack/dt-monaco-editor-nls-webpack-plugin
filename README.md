*NOTE* : **Package no longer supported. Please use `monaco-editor-i18n-plugin` to instead.**


# dt-monaco-editor-nls-webpack-plugin

<a href="https://www.npmjs.com/package/dt-monaco-editor-nls-webpack-plugin"><img alt="NPM Status" src="https://img.shields.io/npm/v/dt-monaco-editor-nls-webpack-plugin.svg?style=flat"></a>

> nls: National Language Support

This package is designed for utilizing zh-CN in `monaco-editor@0.30.1` or `monaco-editor@0.31.1`.

The Chinese localization JSON file `/i18n/dt-zh-hans.json` is a simplified version of [vscode-loc](https://github.com/microsoft/vscode-loc/blob/release/1.63.3/i18n/vscode-language-pack-zh-hans/translations/main.i18n.json)  and This is only relevant to DTStack and it supply the `nls.js` to replace the `monaco-editor/esm/vs/nls.js`.


## Install

`npm install dt-monaco-editor-nls-webpack-plugin -D`

## Using

-   `ko.config.js` [ko - Project toolkit for React Applications](https://github.com/DTStack/ko)

```js
const plugin = [
    ...,
    {
        key: 'WebpackPlugin',
        action: 'add',
        opts: {
            name: 'DTMonacoEditorNlsWebpackPlugin',
            fn: () => {
                return new DTMonacoEditorNlsWebpackPlugin();
            },
        },
    }
]
```

-   `webpack.config.js`

```js
const DTMonacoEditorNlsWebpackPlugin = require("dt-monaco-editor-nls-webpack-plugin");

module.exports = {
    ...,
    plugins: [new DTMonacoEditorNlsWebpackPlugin()],
    ...,
};
```

## Notice

Our monaco-editor version: `0.30.1` or `0.31.1`.

If you need the support zh-CN or other languages, you can fork this repository, locate your json file in [vscode-loc](https://github.com/microsoft/vscode-loc) and move it to `/i18n/***.json`. Additionally, you will need to modify the code with the json file path in `nls.js`.
