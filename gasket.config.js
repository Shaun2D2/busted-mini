module.exports = {
  plugins: {
    presets: [
      '@gasket/nextjs',
    ],
    add: [
      '@gasket/jest',
    ],
  },
  webpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'react-svg-loader'
        }
      ]
    }
  }
};
