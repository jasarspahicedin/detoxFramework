const detox = require('detox');
const config = require('../package.json').detox;
const adapter = require('detox/runners/jest/adapter');
const Setings = require('./screens/Settings');

const SettingsScreen = new Setings();
jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  await detox.cleanup();
  await detox.init(config);
});

beforeEach(async () => {
  await adapter.beforeEach();
  await device.reloadReactNative();
  await device.launchApp({
    permissions: { location: 'always', notifications: 'YES', motion: 'YES' },
  });
  await SettingsScreen.setStagingConnectionSettings();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
