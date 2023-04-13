const path = require('path');
module.exports = {
    entry: './server/index.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename : 'main.js'
    },
    mode:'production'
}