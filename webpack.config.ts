import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.ts',
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  externals: [nodeExternals() as any],
  externalsPresets: { node: true },
  plugins: [
    new webpack.IgnorePlugin({
      checkResource (resource) {
        const lazyImports = [
          '@nestjs/microservices/',
          '@nestjs/platform-express',
          'class-transformer/storage',
          '@nestjs/microservices/microservices-module',
          '@nestjs/websockets'
        ];
        if (!lazyImports.includes(resource)) {
          return false;
        }
        try {
          require.resolve(resource);
        } catch (err) {
          return true;
        }
        return false;
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$|tsx/,
        use: { loader: 'ts-loader' },
        exclude: /node_modules/
      }
    ]
  }
};

export default config;
