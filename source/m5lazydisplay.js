/**
 * m5LazyDisplay
 *
 * @author       nori (norimania@gmail.com)
 * @copyright    5509 (http://5509.me/)
 * @license      The MIT License
 * @link         https://github.com/5509/m5lazydisplay
 *
 */
;(function($) {

	$.fn.m5LazyDisplay = function(options) {
		var _this = this,
			_thisLen = _this.length,
			_scrollPos = document.body.scrollTop || document.documentElement.scrollTop,
			_clientHeight = document.body.clientHeight || document.documentElement.clientHeight,
			_line = _clientHeight,
			_c = $.extend({
				posFix: 0,
				duration: 400
			}, options),
			_imgObjs = [],
			_currentImg = 0;
			
		for ( var i=0; i<_this.length; i++ ) {
			_imgObjs[i] = {};
			_imgObjs[i].y = $(_this[i]).offset().top;
			_imgObjs[i].obj = $(_this[i]);
			
			if ( (_scrollPos + _clientHeight) < _imgObjs[i].y ) {
				_imgObjs[i].obj.css("opacity", 0);
			} else {
				_currentImg++;
			}
		}
		
		_imgObjs.sort(
			function(a, b) {
				return a.y - b.y;
			}
		);
		
		$(window)
			.resize(function() {
				_clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
			})
			.bind("scroll.LazyDisplayScroll", function() {
				if ( _currentImg === _thisLen ) {
					$(window).unbind("scroll.LazyDisplayScroll");
					return false;
				}
				_scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
				while ( _imgObjs[_currentImg].y <= (_scrollPos + _c.posFix + _clientHeight) ) {
					_imgObjs[_currentImg].obj.fadeTo(_c.duration, 1);
					_currentImg++;
					if ( _currentImg === _thisLen ) {
						$(window).unbind("scroll.LazyDislayscroll");
						break;
					}
				}
			});
	}

})(jQuery);