var casper = require("casper").create(),
    viewportSizes = [
    [1366,768]
],
    url = 'http://magento2.local/tui-xach-gucci.html',
    saveDir = '.';
 
casper.start();
 
casper.each(viewportSizes, function(self, viewportSize, i) {
 
    // set two vars for the viewport height and width as we loop through each item in the viewport array
    var width = viewportSize[0],
        height = viewportSize[1];
 
    //give some time for the page to load
    casper.wait(3000, function() {
 
        //set the viewport to the desired height and width
        this.viewport(width, height);
 
        casper.thenOpen(url, function() {
            this.echo('Opening at ' + width);
            //this.mouse.move(".header-cart");
 
            //Set up two vars, one for the fullpage save, one for the actual viewport save
            var ACfilename = saveDir + '/' + width + '-' + height + ".png";
  
            //capture snaps a defined selection of the page
            this.capture(ACfilename,{top: 0,left: 0,width: width, height: height});
            this.echo('snapshot taken');
        });
    });
});
 
casper.run(function() {
    this.echo('Finished captures for ' + url).exit();
});