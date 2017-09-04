/**
 * Created by HARVEY on 2017/9/3.
 */

var path = require('path');
module.exports = {
    devtool: 'source-map',
    entry: "./src/js/app/index.js",
    output: {
        path: path.resolve(__dirname, 'public/'),
        filename: 'bundle1.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    }
}