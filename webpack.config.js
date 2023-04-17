const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  resolve: {
    // 対象にする拡張子の指定,
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  // entry: {
  //   // エントリーポイントの指定
  //   client: './src/client.tsx',
  // },
  entry: {
    server: './server/index.js',
    client: './src/index.tsx',
  },
  target: 'node',
  output: {
    // アウトプット先のディレクトリを指定(assets)
    path: path.resolve(__dirname, 'public/dist'),
    // アウトプットするファイルの名前を指定(名前は変更しない)
    filename: '[name].js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src/css'),
        use: ['style-loader', 'css-loader'],
      },
      {
        test: [/\.ts(x?)$/, /\.js(x?)$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: 3,
                }],
              ['@babel/preset-react',
                {
                  useBuiltIns: 'usage',
                  corejs: 3,
                }],
              '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
};
