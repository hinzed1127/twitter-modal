module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: '/node_modules/',
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1'],
                    plugins: ['add-module-exports']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: 9000
    },
    watch: true
};
