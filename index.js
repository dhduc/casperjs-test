var casper = require('casper').create({
     clientScripts: ["jquery-1.12.4.min.js"]
});

var product_url = 'magento2.local/checkout/cart';
casper.start().thenOpen(product_url, function() {
    console.log("Step 1");
    this.capture('step1.png');
});

casper.run();