var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname),
    filename: 'index.js',
    library: 'px2rem',
    libraryTarget: "umd"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: [
        path.join(__dirname, 'src')
      ]
    }]
  }
}