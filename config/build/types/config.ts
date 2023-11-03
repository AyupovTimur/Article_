export type buildMode = 'production' | 'development'

export interface buildEnv {
  mode: buildMode
  port: number
}

export interface buildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface buildOptions {
  mode: buildMode
  paths: buildPaths
  port: number
  isDev: boolean
}
