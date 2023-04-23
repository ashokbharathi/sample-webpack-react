// noinspection JSUnusedLocalSymbols
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
        //commented to build a custom pages
        // "optimization": {
        //     splitChunks: {
        //         cacheGroups: {
        //             vendor: {
        //                 chunks: 'all',
        //                 name: 'vendor',
        //                 test: 'vendor',
        //                 enforce: true
        //             },
        //         }
        //     },
        //     runtimeChunk: true
        // },
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"],
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

        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
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
