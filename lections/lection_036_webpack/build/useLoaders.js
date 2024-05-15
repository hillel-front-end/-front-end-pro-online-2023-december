const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env) => {
  const isDev = env.NODE_ENV === "development";

  const useStyles = (ext = []) => {
    return {
      test: /\.s?[ca]ss$/i, // 'main.scss|sass'
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        "css-loader",
          ...ext
      ],
    }
  }

  const babelLoader = {
    test: /\.(js|ts|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          '@babel/preset-env',
          "@babel/preset-typescript",
          "@babel/preset-react"
        ]
      }
    }
  }

  return [
    useStyles(['sass-loader']),
    babelLoader
  ]
}