import { type buildOptions } from './types/config'
import type webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (options: buildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options
  return {
    mode,
    entry: paths.entry,
    devtool: isDev ? 'inline-source-map' : undefined,
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
