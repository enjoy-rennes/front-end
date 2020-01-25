const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')

module.exports = () => {
    const fs = require('fs')
    const path = require('path')
    const themeVariables = lessToJS(
        fs.readFileSync(path.resolve(__dirname, './src/styles/antd-custom.less'), 'utf8')
    )
    /* eslint-disable */
    // Where your antd-custom.less file lives
    // fix: prevents error when .less files are required by node
    if (typeof require !== 'undefined') {
        require.extensions['.less'] = file => { }
    }
    return withLess({
        lessLoaderOptions: {
            javascriptEnabled: true,
            modifyVars: themeVariables // make your antd custom effective
        }
    })
};
