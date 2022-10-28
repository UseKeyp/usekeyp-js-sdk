const webpack = require('webpack');
const path = require('path');

module.exports = {
    require: [
        path.join(__dirname, './dist/output.css')
    ],
    dangerouslyUpdateWebpackConfig(config) {
        config.module.rules.push({
            test: /.\.md$/,
            type: "javascript/auto"
        });
        config.plugins.push(
            new webpack.NormalModuleReplacementPlugin(
                /react-styleguidist\/lib\/loaders\/utils\/client\/requireInRuntime$/,
                "react-styleguidist/lib/loaders/utils/client/requireInRuntime"
            )
        );
        config.plugins.push(
            new webpack.NormalModuleReplacementPlugin(
                /react-styleguidist\/lib\/loaders\/utils\/client\/evalInContext$/,
                "react-styleguidist/lib/loaders/utils/client/evalInContext"
            )
        );
        return config;
    },
};