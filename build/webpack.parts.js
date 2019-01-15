const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurifyCSSPlugin = require('purifycss-webpack')

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    stats: 'errors-only', // Display only errors to reduce the amount of output.
    host,
    port,
    open:  true, // Open the page in browser

    // WDS overlay does not capture runtime errors of the application.
    overlay: true, // display error in browser

    // watchOptions: {
    // Delay the rebuild after the first change
    // aggregateTimeout: 300,
    //
    // // Poll 轮询 using interval (in ms, accepts boolean too)
    // poll: 1000,
    // },

    hot: true // HMR 这个和poll二选一
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 配合hot:true打开HMR
  ]
})

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,

        // evaluated from right to left.
        // This means that loaders: ["style-loader", "css-loader"]
        // can be read as styleLoader(cssLoader(input)).
        use: ['style-loader', 'css-loader']
      }
    ]
  }
})

exports.loadSCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include,
        exclude,
        use:  ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
})

exports.extractCSS = ({ include, exclude, use = [] } = {}) => {
  // Output extracted CSS to a file
  const plugin = new MiniCssExtractPlugin({
    filename: 'styles/[name].css'
  })

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,

          use: [MiniCssExtractPlugin.loader].concat(use)
        }
      ]
    },
    plugins: [plugin]
  }
}

exports.purifyCSS = ({ paths }) => ({
  plugins: [new PurifyCSSPlugin({ paths })]
})

exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        include,
        exclude,
        use:  {
          loader: 'url-loader',
          options
        }
      }
    ]
  }
})

exports.loadJavaScript = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        use:  'babel-loader'
      }
    ]
  }
})

exports.setFreeVariables = (variables = {}) => {
  const env = {}
  for (let key in variables) {
    if (variables.hasOwnProperty(key)) {
      env[key] = JSON.stringify(variables[key])
    }
  }

  return {
    plugins: [new webpack.DefinePlugin(env)]
  }
}
