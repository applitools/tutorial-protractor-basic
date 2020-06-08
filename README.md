### Pre-requisites

1. Install Node.js from [here](https://nodejs.org/en/)
2. Run the ChromeDriver that's bundled with with tutorial:
    * `npx chromedriver --port=4444 --url-base=/wd/hub`
    * This will run ChromeDriver on localhost and on port 4444
3. If the bundled ChromeDriver isn't compatible with the version of Chrome installed on your machine, then please download the correct ChromeDriver version from the [ChromeDriver downloads page](https://ChromeDriver.chromium.org/downloads). Here are some additional resources from the internet that'll help you:
   * https://splinter.readthedocs.io/en/0.1/setup-chrome.html
   * https://stackoverflow.com/questions/38081021/using-selenium-on-mac-chrome
   * https://www.youtube.com/watch?time_continue=182&v=dz59GsdvUF8  

### Running the example

1. Download the example
    * Option 1: `git clone https://github.com/applitools/tutorial-protractor-basic.git`
    * Option 2: Download it as a Zip file and extract it
2. CD into the `tutorial-protractor-basic` folder
3. Change the `APPLITOOLS_API_KEY` with your own.
    * Login to Applitools > Click on the Person icon > My API Key
4. run `npm install`
5. run `npm test`

### Adding to an existing Node.js example

```sh
npm install "@applitools/eyes-protractor" --save-dev
```
