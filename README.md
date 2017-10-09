# David Hund's Browserslist Shared Config

[![MIT License][license-image]][license-url]
[![Version][version-image]][version-url]

This configuration is [David Hund's](https://valuedstandards.com) personal preference but (for now) reflects Google's supported browser policy for their suite of web applications.

As such, most of it is taken straight from: [browserslist-config-google](https://github.com/awkaiser/browserslist-config-google/)

## What is Browserslist?

Share browsers list between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env.

* [Browserslist](https://github.com/ai/browserslist) (Github repo)
* [browserl.ist](http://browserl.ist) (Browserslist query syntax validation)
* ["Browserslist is a Good Idea"](https://css-tricks.com/browserlist-good-idea/) (blog post by [@chriscoyier](https://github.com/chriscoyier))

## Browser support

The following browsers are supported:

* Browser with more than 1% usage


### Desktop browsers

* last 2 Chrome major versions
* last 2 Firefox major versions
* last 2 Edge major versions
* last 2 Safari major versions
* ie 11


### Mobile

* last 3 Android major versions
* last 3 ChromeAndroid major versions
* last 2 iOS major versions

You can review the current interpretation of this configuration at [browserl.ist](http://browserl.ist/?q=last+2+Chrome+major+versions%2C+last+2+Firefox+major+versions%2C+last+2+Safari+major+versions%2C+last+2+Edge+major+versions%2C+ie+11%2C+last+3+Android+major+versions%2C+last+3+ChromeAndroid+major+versions%2C+last+2+iOS+major+versions).


## Installation

```
$ npm install --save-dev @davidhund/browserslist-config
```

## Usage

To get started, add this to your `package.json` file:

```json
"browserslist": [
  ["extends @davidhund/browserslist-config"]
]
```

## License

[MIT License][license-url]

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://github.com/davidhund/browserslist-config/blob/master/LICENSE
[version-image]: https://img.shields.io/npm/v/@davidhund/browserslist-config.svg
[version-url]: https://www.npmjs.com/package/@davidhund/browserslist-config