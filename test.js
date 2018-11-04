var casper = require("casper").create();
var mouse = require("mouse").create(casper);
casper.start("http://adf.ly/1mPxxi", function() {
	this.echo(this.getTitle());
	this.capture('before.png');
});
casper.then(function() {
	this.echo("waiting for done");
	this.wait(60000, function() {
		this.echo("test done!");
		this.capture('after.png');
	});
        this.mouse.click(400, 300);
});
casper.run();
