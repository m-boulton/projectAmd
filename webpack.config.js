const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./assets/scripts/main.js",
  output: {
    publicPath: '/dist/',
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: 'source-map',
  // plugins: [new HtmlWebpackPlugin({ title: "Development" })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./"),
    compress: true,
    port: 9000,
  },
};
