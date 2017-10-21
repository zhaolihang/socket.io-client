// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replacePlugin from 'rollup-plugin-replace';
import alias from 'rollup-plugin-alias';
import * as path from 'path'

export default {
    entry: './lib/index.js',
    format: 'umd',
    plugins: [ //注意插件使用顺序
        alias({
            debug: path.join(__dirname, './support/noop.js'),
            ['engine.io-client']: path.join(__dirname, './engine.io-client/lib/index.js')
        }),
        resolve({}),
        commonjs(),
        babel(),
    ],
    dest: './dist/socket.io.js',
    moduleName: 'io',
    sourceMap: true,
    context: 'window',
    exports: 'named',
}