// Karma configuration
// Generated on Wed May 31 2017 17:53:02 GMT-0700 (PDT)

'use strict';

const webpackConfig = require('./webpack.config.js');
delete webpackConfig.entry;

module.exports = function(config) {
  config.set({
    webpack: webpackConfig,
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      // 'node_modules/angular/angular.js',
      // 'node_modules/angular-mocks/angular-mocks.js',
      'app/entry.js',
      'test/**/*-test.js',
    ],
    exclude: [
    ],
    preprocessors: {
      '**/app/*.js': 'coverage',
      'app/entry.js': ['webpack'],
      'test/**/*-test.js': ['webpack'],
    },
    // coverageReporter: {
    //   instrumenterOptions: {
    //     istanbul: { noCompact: true },
    //   },
    //   type : 'lcov',
    //   dir : 'coverage/',
    // },
    reporters: ['mocha', 'coverage'],
    // browserConsoleLogOptions: {
    //   level: 'log',
    // },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'ChromeCanary'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox'],
      },
    },
    singleRun: false,
    concurrency: Infinity,
  });
};
