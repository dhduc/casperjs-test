// Configuration and some useful methods
var url = 'http://magento2.local/';
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
casper.options.waitTimeout = 15000;

/**
 * The HTTP responses
 * ----------------------------------------------------------------------------
 */
 casper.options.httpStatusHandlers = {
 	200:  function(self, resource) {
 		this.echo(url + " is OK (200)", "INFO");
 	},
 	400:  function(self, resource) {
 		this.echo(url + " is nok (400)", "INFO");
 	},
 	404: function(self, resource) {
 		this.echo("Resource at " + url + " not found (404)", "COMMENT");
 	},
 	302: function(self, resource) {
 		this.echo(url + " has been redirected (302)", "INFO");
 	}
 };

// Go to home
var homepage = 'http://magento2.local/';
casper.test.comment('Go to home');
casper.start(homepage, function() {
	this.test.pass('Homepage was loaded');
});

// Go to login page
// casper.then(function() {
// 	this.click('li.authorization-link a');
// 	this.test.pass('login page was loaded');
// });

// casper.then(function() {
// 	this.click('.action.create.primary');
// 	this.test.pass('register page was loaded');
// });


// // Fill login form and submit
// casper.then(function() {
// 	this.test.info('Current location is ' + this.getCurrentUrl());
// 	this.fill('form.form-create-account', {
// 		'firstname': 'Duc',
// 		'lastname': 'Dao',
// 		'email': 'ducdh1+3@smartosc.com',
// 		'password': 'Admin!123',
// 		'password_confirmation': 'Admin!123'
// 	}, true);
// 	this.test.pass('form populated');	
// });

// // Registration goes well
// casper.then(function() {
// 	this.test.info('Current location is ' + this.getCurrentUrl());
// 	this.test.pass('Registered');
// });

// // Account dashboard welcome
// casper.then(function() {
// 	this.test.info('Current location is ' + this.getCurrentUrl());
// 	this.test.pass('Dashboard in');
// 	this.capture('dashboard.png');
// });

// Fill login form and submit
casper.then(function() {
	this.test.info('Current location is ' + this.getCurrentUrl());
	this.fill('#search_mini_form', {
		'q': 'bag'
	}, true);
	this.test.pass('form populated');
});
casper.then(function() {
	this.click('#search_mini_form button');
	this.test.pass('Search query hited');
});
casper.then(function() {
	this.test.info('Current location is ' + this.getCurrentUrl());
	this.test.pass('Search results page');
});
casper.then(function() {
	this.click('ol.product-items li:first-child a');
	this.test.info('Current location is ' + this.getCurrentUrl());
	this.test.pass('First results product opened');
});
casper.then(function() {
	this.test.info('Current location is ' + this.getCurrentUrl());
	this.test.pass('Product page');
});
casper.then(function() {
	this.click('button#product-addtocart-button');
	this.test.pass('Add to cart');
});
casper.then(function() {
	this.test.info('Current location is ' + this.getCurrentUrl());
	this.capture('magento.png', {
		top: 0,
		left: 0,
		width: 1680,
		height: 1050
	});
	this.test.pass('Checkout Cart with image');
});

casper.run(function() {
	this.test.done();
});