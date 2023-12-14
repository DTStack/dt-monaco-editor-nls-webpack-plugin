/**
 * dt-monaco-editor-nls-webpack-plugin
 * This plugin is referenced from https://github.com/microsoft/monaco-editor/tree/main/webpack-plugin
 */
const replaceNls = require.resolve("./loaders/replaceNls");
const replaceLocalizeLoader = require.resolve("./loaders/replaceLocalize");

const initialOptions = {
    /** currently only zh-cn is supported */
    locale: "zh-cn",
};

// create rules loader
function createLoaderRules(_options) {
    return [
        {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            enforce: "pre",
            include: /[\\\/]monaco-editor[\\\/]esm/,
            use: [
                {
                    loader: replaceNls,
                },
                {
                    loader: replaceLocalizeLoader,
                },
            ],
        },
    ];
}

// add webpack rules to webpack config
function addCompilerRules(compiler, rules) {
    const compilerOptions = compiler.options;
    if (!compilerOptions.module) {
        compilerOptions.module = { rules };
    } else {
        const moduleOptions = compilerOptions.module;
        moduleOptions.rules = (moduleOptions.rules || []).concat(rules);
    }
}

class DTMonacoEditorNlsPlugin {
    constructor(options = initialOptions) {
        this.options = options;
    }
    apply(compiler) {
        const rules = createLoaderRules(this.options);
        addCompilerRules(compiler, rules);
    }
}

module.exports = DTMonacoEditorNlsPlugin;
