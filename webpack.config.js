const webpack = require("webpack");
var path = require('path');
const fs = require('fs');

module.exports = (env, argv) => {
    let obj = {
        entry: {
            "app": "./src/index.jsx",
        },
        output: {
            filename: argv.mode === "production" ? "dist/js/[name].min.js" : "dist/js/[name].js",
            path: __dirname
        },
        module: {
            rules: [
                { 
                    test: /\.(js|jsx)$/, 
                    exclude: /node_modules/, 
                    use: { 
                    loader: "babel-loader", 
                    options: { 
                    presets: ["@babel/preset-env", "@babel/preset-react"], 
                    } 
                    } 
                    }
            ]
        },
        externals: {
            
        },
        devServer: {
            client: {
                overlay: {errors: true, warnings: false}
            },
            static: [
                {
                    directory: path.join(process.cwd())
                },
                {
                    directory: path.join(__dirname, '../node_modules'),
                    publicPath: '/node_modules'
                }
            ]
        }
    };


    return obj;
};
