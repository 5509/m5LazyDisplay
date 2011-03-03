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
			}, options),
			_imgLine = [];
			
		// offset().topを入れていって、一番上から順番に反応するようにする
		// 常に判定するのは一番上の画像（数値）のみなので
		// 最小限になるんじゃないですかね
		for ( var i=0; i<_this.length; i++ ) {
			_imgLine.push(_this[i].offset().top);
		}
			
		$(window)
			.resize(function() {
				_clientHeight = $("html").attr("clientHeight");
			})
			.scroll(function() {
				
			});
	}

})(jQuery);