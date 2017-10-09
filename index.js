'use strict';

/**
 * David Hund's (@valuedstandards) Browserslist Shared Config
 * https://github.com/ai/browserslist#shareable-configs
 *
 * Instead of using a `.browserslistrc` or `browserslist`
 * config file, you can reference a shared config file.
 *
 * Use in your package.json as:
 * 
 *  "browserslist": [
 *    "extends @davidhund/browserslist-config"
 *  ]
 *  
 */


// Note: this mimics Google's browser support (for now)
// https://github.com/awkaiser/browserslist-config-google/
module.exports = [
	'> 1%',
	'last 2 Chrome major versions',
	'last 2 Firefox major versions',
	'last 2 Edge major versions',
	'last 2 Safari major versions',
	'ie 11',
	'last 3 Android major versions',
	'last 3 ChromeAndroid major versions',
	'last 2 iOS major versions'
];