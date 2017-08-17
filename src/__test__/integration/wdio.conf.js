'use strict'

const isDebug = !!process.env.DEBUG
const path = require('path')
const integrationRoot = __dirname
const config = {
  execArgv: isDebug ? ['--inspect'] : undefined,
  specs: [
    process.env.SPEC || `${integrationRoot}/**/*.e2e.js`
  ],
  exclude: [
  ],
  maxInstances: 10,
  capabilities: isDebug
    ? [{browserName: 'chrome'}]
    : [{
      maxInstances: 5,
      browserName: 'chrome'
    }],
  sync: true,
  logLevel: isDebug ? 'verbose' : 'error',
  coloredLogs: true,
  bail: 1, // not honored?
  screenshotPath: path.join(integrationRoot, 'errorShots'),
  baseUrl: 'http://localhost:3000',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: [
    'selenium-standalone'
  ],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: isDebug ? 6e5 : 10000 // 10m or 10s
  }
}

console.log(config.specs)
exports.config = config
