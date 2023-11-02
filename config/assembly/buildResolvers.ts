import { type ResolveOptions } from 'webpack'
import { type buildOptions } from './types/config'

export function buildResolvers (options: buildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [
      options.paths.src,
      'node_modules'
    ],
    mainFiles: ['index'],
    alias: {}
  }
}
