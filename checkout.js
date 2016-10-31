var casper = require('casper').create({
     clientScripts: ["jquery-1.12.4.min.js"]
});

//First step is to open site
var product_url = 'http://lotte.local/checkout/cart/';
casper.start().thenOpen(product_url, function() {
    console.log("Website opened");
    this.capture('AfterOpen.png');
});


//Now we have to populate username and password, and submit the form
// casper.then(function(){
//     console.log("Login using username and password");
//     this.evaluate(function(){
//         document.getElementsByName("txtUserName")[0].value="ducdh1";
//         document.getElementsByName("txtPassword")[0].value="micheal2107";
//         document.getElementsByName("Submit")[0].click();
//     });
// });

// Click to time tab
casper.then(function() {
    console.log('Click to continue button');
    this.click('.continue');
    this.wait(10000);
    this.capture('AfterClick.png');
});

//Wait to be redirected to the Home page, and then make a screenshot
// casper.then(function(){
//     console.log("Make a screenshot and save it as AfterLogin.png");
//     this.wait(6000);//Wait a bit so page loads (there are a lot of ajax calls and that is why we are waiting 6 seconds)
//     this.capture('AfterLogin.png');
// });

casper.run();