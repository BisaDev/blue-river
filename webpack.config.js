const path = require('path');


module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    './src/ClientApp',
  ],
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './public',
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.json' ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: [ 'babel-loader' ],
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules)/,
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader' ,'css-loader','sass-loader' ],
      },
    ],
  },
};
