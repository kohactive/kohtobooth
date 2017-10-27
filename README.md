# kohtobooth

* [2017 Halloween Party - darkohbooth.kohactive.com](http://darkohbooth.kohactive.com)
* [2016 Halloween Party - psykohbooth.kohactive.com](http://psykohbooth.kohactive.com)

## The Physical Photobooth Setup

* iPad on a stand with a ring light
* [Simple Booth Event Edition app](https://www.simplebooth.com/apps)

## How the Images Get to this App
* [ifttt](https://itunes.apple.com/us/app/ifttt/id660944635?mt=8) app pushes all new photos on the iPad to a Google Drive folder(currently info@kohactive.com/Halloween Photo Booth/2017)
  * The ifttt app must be running in the background for this to happen(should run every 5-10 mins), otherwise it will sync every time the ifttt app is opened.
* [Zapier](zapier.com) checks the Drive folder every 5 minutes and sends a new record to [Firebase](https://firebase.google.com) for each new photo

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd my-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
