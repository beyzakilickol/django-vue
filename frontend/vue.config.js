let BundleTracker = require('webpack-bundle-tracker');
const path = require('path');

const bundleTrackerPlugin = new BundleTracker({
    filename: 'webpack-bundle.json'
});

module.exports = {


    publicPath: 'http://localhost:8080',

    configureWebpack: {
        plugins: [bundleTrackerPlugin],
    }
}