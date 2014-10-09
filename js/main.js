var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper');
var $shuttle = $('shuttle');
var $shuttleSection = $('shuttleSection');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$sun.css('transform', 'rotate(' + scrollPos / 5+ 'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
});


$dipperSection.waypoint(function () {
	$dipper.addClass('js-dipper-fade');
}, {offset: '50%'});

$shuttleSection.waypoint(function () {
	$shttle.addclass('js-shuttle-fade');
