import { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const prodConfig: Configuration = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};

export default prodConfig;
