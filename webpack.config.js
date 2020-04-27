const path = require('path');
const autoprefixer = require('autoprefixer');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = [{
    entry: ['./app.scss', './app.js'],
    output: {
        // This is necessary for webpack to compile
        // But we never use style-bundle.js
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CopyPlugin([
            { from: 'static', to: '.' }
        ]),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'bundle.css',
                        },
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: ['./node_modules']
                            },
                            // Prefer Dart Sass
                            implementation: require('sass'),

                            // See https://github.com/webpack-contrib/sass-loader/issues/804
                            webpackImporter: false,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer Dart Sass
                            implementation: require('sass'),

                            // See https://github.com/webpack-contrib/sass-loader/issues/804
                            webpackImporter: false,
                            sassOptions: {
                                includePaths: ['./node_modules']
                            },
                        },
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                  presets: ['@babel/preset-env'],
                } 
            }
        ]
    },
}];
