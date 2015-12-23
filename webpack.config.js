module.exports = {
  entry: ['./client/main.jsx'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel', query: { presets: [ 'react', 'es2015' ] } },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  },
  plugins: [],
  devServer: {
    historyApiFallback: true
  }
};
