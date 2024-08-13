const path = require('path');

// module.exports = {
//   output: {
//     filename: 'my-first-webpack.bundle.js',
//   },
//   module: {
//     rules: [{ test: /\.txt$/, use: 'raw-loader' }],
//   },
// };

module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            { loader: 'sass-loader' },
          ],
        },
      ],
    },
  };