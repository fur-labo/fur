var page = require('webpage').create(),
    system = require('system');

var src = system.args[1],
    dest = system.args[2],
    width = system.args[3],
    height = system.args[4];

page.viewportSize = {
    width: width || 480,
    height: height || 800
};

page.open(src, function (status) {
    if (status !== 'success') {
        console.log('FAIL to load :' + src);
        phantom.exit();
    }
    page.render(dest);
    phantom.exit();
});