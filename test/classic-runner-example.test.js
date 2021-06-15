'use strict';

const { Eyes, ClassicRunner, Target, RectangleSize, Configuration, BatchInfo} = require('@applitools/eyes-protractor');

describe('DemoApp - ClassicRunner', function () {
  beforeAll(() => {
    browser.waitForAngularEnabled(false)
  })
  
  let runner, eyes;

  beforeEach(async () => {
    // Initialize the Runner for your test.
    runner = new ClassicRunner();

    // Initialize the eyes SDK (IMPORTANT: make sure your API key is set in the APPLITOOLS_API_KEY env variable).
    eyes = new Eyes(runner);

    // Initialize the eyes configuration.
    const conf = new Configuration()

    // You can get your api key from the Applitools dashboard
    conf.setApiKey(process.env.APPLITOOLS_API_KEY)

    // set new batch
    conf.setBatch(new BatchInfo("Demo Batch - Protractor - Classic"));

    // set the configuration to eyes
    eyes.setConfiguration(conf)
  });

  it('Smoke Test', async () => {
    // Start the test by setting AUT's name, test name and viewport size (width X height)
    await eyes.open(browser, 'Demo App - Protractor - Classic', 'Smoke Test - Protractor - Classic', new RectangleSize(800, 600));

    // Navigate the browser to the "ACME" demo app.
    browser.get("https://demo.applitools.com");

    // To see visual bugs after the first run, use the commented line below instead.
    // await browser.get("https://demo.applitools.com/index_v2.html");

    // Visual checkpoint #1 - Check the login page.
    await eyes.check("Login Window", Target.window().fully());

    // This will create a test with two test steps.
    element(by.id("log-in")).click();

    // Visual checkpoint #2 - Check the app page.
    await eyes.check("App Window", Target.window().fully());

    // End the test.
    await eyes.close();
  });

  afterEach(async () => {
    // If the test was aborted before eyes.close was called, ends the test as aborted.
    await eyes.abort();

    // Wait and collect all test results
    const allTestResults = await runner.getAllTestResults();
    console.log(allTestResults);
  });
});
