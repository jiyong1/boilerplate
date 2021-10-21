import path from 'path';
import { Configuration } from 'webpack';

const devConfig: Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, '../public'),
    port: 8081,
    historyApiFallback: true,
  },
};

export default devConfig;
