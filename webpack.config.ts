import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/assembly/buildWebpackConfig';
import { buildEnv, buildPaths } from './config/assembly/types/config';

export default (env: buildEnv) => {

    const paths: buildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'assembly'), 
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }
    
    const PORT = env.port || 3000;
    const mode = env.mode || 'development'

    const isDev = mode == 'development';
    
    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode,
        paths,
        port: PORT,
        isDev,
    })

    return config;
};