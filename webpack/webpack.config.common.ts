import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

const commonConfig: Configuration = {
  entry: {
    main: './src/App.tsx',
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[chunkhash].js',
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    alias: {},
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: { loader: 'babel-loader', options: { plugins: ['@babel/plugin-syntax-dynamic-import'] } },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      templateParameters: {
        env: process.env.NODE_ENV === 'development' ? '(개발용)' : '',
      },
    }),
    new WebpackManifestPlugin({
      fileName: 'chunk.json',
      basePath: '/',
    }),
  ],
};

export default commonConfig;
