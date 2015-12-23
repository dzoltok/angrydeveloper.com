module.exports = {
  entry: ['./client/main.jsx'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel', query: { presets: [ 'react', 'es2015' ] } }
    ]
  },
  plugins: [],
  devServer: {
    historyApiFallback: true
  }
};
