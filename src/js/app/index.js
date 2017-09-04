var $ = require('../lib/jquery.min.js');

var Carousel = require('../com/carousel.js');
var GoTop = require('../com/gotop.js');
var WaterFall = require('../com/waterfall.js');

Carousel.init($('.wrapper'));
new GoTop();
new WaterFall();