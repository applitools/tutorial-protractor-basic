'use strict'

// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    default: 'test/*.test.js'
  },
  capabilities: {
    browserName: 'chrome',
    // 'goog:chromeOptions': {
    //   args: ['headless']
    // }
  },
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 300000,
  }
}
