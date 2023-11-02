import type { buildOptions } from './types/config'
import type { Configuration as ConfigurationDevServer } from 'webpack-dev-server'

export function buildDevServer (options: buildOptions): ConfigurationDevServer {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
