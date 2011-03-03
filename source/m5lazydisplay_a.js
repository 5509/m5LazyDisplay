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
			_scrollPos = {
				y: document.body.scrollTop || document.documentElement.scrollTop
				// とりあえずyのみでいいか
			},
			_clientHeight = $("html").attr("clientHeight"),
			_line = _clientHeight,
			_c = $.extend({
				posFix: 0,
				fade: true // false => show
			}, options);
			
		$(window)
			.resize(function() {
				_clientHeight = $("html").attr("clientHeight");
			})
			.scroll(function() {
				_scrollPos.y = document.body.scrollTop || document.documentElement.scrollTop;
				_line = _clientHeight + _scrollPos.y;
			});
			
		return this.each(function() {
		
			var __this = this,
				__imgOffset = __this.offset();
			
			if ( __imgOffset.top > _clientHeight ) {
				__this.css("opacity", 0);
			}			
			
			$(window).scroll(function() {
				if ( __imgOffset.top <= _line ) {
					if ( _c.fade ) __this.fadeIn();
					else __this.show();
				}
			});
		});
	}

})(jQuery);