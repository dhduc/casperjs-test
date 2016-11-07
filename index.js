var casper = require('casper').create({
     clientScripts: ["jquery-1.12.4.min.js"]
});

casper.start();

var url1 = 'http://magento2.local/';
casper.thenOpen(url1, function() {
    console.log("Step 1");
    this.capture('step1.png');
});

var url2 = 'http://magento2.local/tui-xach-gucci.html';
casper.thenOpen(url2, function() {
	console.log("Step 2");
	this.capture('step2.png');
});

casper.then(function () {
	console.log("Step 3");
	this.click('#product-addtocart-button');
	this.wait(10000);
	this.capture('step3.png');
});

var url3 = 'http://magento2.local/checkout/cart/';
casper.thenOpen(url3, function () {
	console.log("Step 4");
	this.capture('step4.png');
});

casper.then(function () {
	console.log("Step 5");
	this.click('.login-link-checkout');
	this.wait(10000);
	this.capture('step5.png');
	this.wait(10000);
	this.click('.tabs-menu li:last-child');
	console.log("Step 6");
	this.capture('step6.png');
	this.wait(10000);
	this.fill('form.form-validate-email-ajax', {
		'email': 'test@yopmail.com'
	}, true);
	console.log("Step 7");
	this.capture('step7.png');
	this.wait(10000);
	this.click('#send-validate');
	this.wait(10000);
	console.log("Step 8");
	this.capture('step8.png');
});

var url4 = 'http://magento2.local/checkout/';
casper.thenOpen(url3, function () {
	console.log("Step 9");
	this.capture('step9.png');
});

casper.run(function() {
	this.echo('Finish').exit();
});