var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "/public/dist");

var config = {
    entry: DEV + "/index.jsx",
    output: {
        path: OUTPUT,
        filename: "myCode.js"
    },
    module: {
        loaders: [{
            include: DEV,
            loader: "babel-loader",
        }]
    }
}

module.exports = config;