// Configuration and some usefull methods

/**
 * Debug/Verbose
 * ----------------------------------------------------------------------------
 */
var debug_mode = !!casper.cli.get('verbose');
if (debug_mode) {
    debug_mode = true;
    casper.options.verbose = true;
    casper.options.logLevel = 'debug';
}

var colorizer = require('colorizer').create('Colorizer');

/**
 * The view
 * ----------------------------------------------------------------------------
 */

// The viewport size
casper.options.viewportSize = {
    width: 1200,
    height: 900
};