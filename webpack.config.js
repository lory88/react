const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: './src/add-todo.js',
    mode:'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: [
            {loader:"babel-loader"},
            {loader:"prettier-loader"},
            ]
        },
        ],
    },
};
