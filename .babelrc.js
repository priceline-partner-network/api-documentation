module.exports = {
    presets: ["@babel/preset-env"],
    plugins: [
        ["module-resolver", {
            root: ["./src"],
            alias: {
                assets: "./src/assets"
            }
        }]
    ]
};