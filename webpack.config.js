const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        filename: path.resolve(__dirname, 'src/js/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    devServer: {
        port: 3001,
        compress: true, 
        hot: true, 
        static: {
            directory: path.join(__dirname, 'dist')
        }
    }

}