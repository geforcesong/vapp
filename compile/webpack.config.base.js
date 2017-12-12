const path = require('path');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('../package.json');

module.exports = function (isDev) {
    return {
        entry: {
            about: [
                './web/views/about/client/code/_aboutController.js'
            ],
            home: [
                './web/views/home/client/code/_homeController.js',
                './web/views/common/client/style/main.scss'
            ],
            admin: [
                './web/views/admin/client/code/_adminController.js'
            ]
        },
        output: {
            path: path.resolve(__dirname, '..', 'public'),
            filename: `[name].${pkg.version}.js`,
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [{
                            loader: 'css-loader',
                            options: {
                                minimize: !isDev
                            }
                        }, {
                            loader: 'sass-loader'
                        }]
                    })
                },
                {
                    test: /\.vue$/,
                    use: [
                        {
                            loader: 'vue-loader',
                            options: {
                                loaders: {
                                    js: 'babel-loader',
                                    scss: 'vue-style-loader!css-loader!sass-loader'
                                },
                                preserveWhitespace: false
                            }
                        }
                    ]
                },
                {
                    test: /\.js$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)\w*/,
                    use: ['file-loader']
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.vue'],
            alias: {
                vue: 'vue/dist/vue.common.js'
            }
        },
        plugins: [
            new ExtractTextPlugin({
                filename: `styles.[name].${pkg.version}.css`,
                disable: false,
                allChunks: true
            }),
            new Webpack.HotModuleReplacementPlugin(),
            new Webpack.NamedModulesPlugin(),
            new Webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'
            }),
            new Webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                Popper: 'popper.js'
            })
        ]
    };
}