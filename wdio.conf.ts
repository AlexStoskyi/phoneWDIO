exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'nataliiaonashko_rXGzWK',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'vs7UbyaJDEqkyBmyz7Hs',

  updateJob: false,
  specs: [
    './test/specs/**/*.ts'
  ],
  exclude: [],

  capabilities: [{
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android',
    name: 'first_test',
    device: 'Google Pixel 3',
    os_version: "9.0",
    app: process.env.BROWSERSTACK_APP_ID || 'bs://f837db62705b267f7e48ac86bff936c7b8e47cef',
    'browserstack.debug': true
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};