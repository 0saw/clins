(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\iamle\\Documents\\Work\\_inprogress\\clins.ru\\clins\\src\\scripts\\main.js":[function(require,module,exports){
// import View from 'views/view';

require('./views/parallax');

$(function () {
});

},{"./views/parallax":"C:\\Users\\iamle\\Documents\\Work\\_inprogress\\clins.ru\\clins\\src\\scripts\\views\\parallax.js"}],"C:\\Users\\iamle\\Documents\\Work\\_inprogress\\clins.ru\\clins\\src\\scripts\\views\\parallax.js":[function(require,module,exports){
(function () {
  var rem = parseFloat($('html').css('font-size'), 16);
  var scrollTill = ($('.nav:eq(0)').offset().top) || 171;
  var fixed = false;
  var $header = $('.header');
  var $items = $('.parallaxify');

  $(document.body).addClass('navEnabled');

  var scrollTick = function (amount) {
    $items.each(function (item, index) {
      var rev = $(this).data('reverse') ? -1 : 1;
      $(this).css('transform', "translate3d(0, " + rev * amount + "px, 0)");
    });
  }

  var scroll = function (e) {
    var scrolled = Math.min($(window).scrollTop(), scrollTill);
    var amount = (scrolled * 0.45).toFixed(2);

    if (scrolled == scrollTill) {
      if (fixed == false) {
        $header.addClass('fixed')
               .css('top', -scrollTill + (2 * rem));
        scrollTick(amount);
      }
      fixed = true;
      return false;
    } else {
      if (fixed == true) {
        $header.removeClass('fixed')
               .css('top', (2 * rem));
      }
      fixed = false;
    }

    scrollTick(amount);
  };
  $(window).on('scroll', scroll);
})();

},{}]},{},["C:\\Users\\iamle\\Documents\\Work\\_inprogress\\clins.ru\\clins\\src\\scripts\\main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIiwic3JjL3NjcmlwdHMvdmlld3MvcGFyYWxsYXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGltcG9ydCBWaWV3IGZyb20gJ3ZpZXdzL3ZpZXcnO1xuXG5yZXF1aXJlKCcuL3ZpZXdzL3BhcmFsbGF4Jyk7XG5cbiQoZnVuY3Rpb24gKCkge1xufSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICB2YXIgcmVtID0gcGFyc2VGbG9hdCgkKCdodG1sJykuY3NzKCdmb250LXNpemUnKSwgMTYpO1xuICB2YXIgc2Nyb2xsVGlsbCA9ICgkKCcubmF2OmVxKDApJykub2Zmc2V0KCkudG9wKSB8fCAxNzE7XG4gIHZhciBmaXhlZCA9IGZhbHNlO1xuICB2YXIgJGhlYWRlciA9ICQoJy5oZWFkZXInKTtcbiAgdmFyICRpdGVtcyA9ICQoJy5wYXJhbGxheGlmeScpO1xuXG4gICQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoJ25hdkVuYWJsZWQnKTtcblxuICB2YXIgc2Nyb2xsVGljayA9IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAkaXRlbXMuZWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHZhciByZXYgPSAkKHRoaXMpLmRhdGEoJ3JldmVyc2UnKSA/IC0xIDogMTtcbiAgICAgICQodGhpcykuY3NzKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNkKDAsIFwiICsgcmV2ICogYW1vdW50ICsgXCJweCwgMClcIik7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgc2Nyb2xsID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgc2Nyb2xsZWQgPSBNYXRoLm1pbigkKHdpbmRvdykuc2Nyb2xsVG9wKCksIHNjcm9sbFRpbGwpO1xuICAgIHZhciBhbW91bnQgPSAoc2Nyb2xsZWQgKiAwLjQ1KS50b0ZpeGVkKDIpO1xuXG4gICAgaWYgKHNjcm9sbGVkID09IHNjcm9sbFRpbGwpIHtcbiAgICAgIGlmIChmaXhlZCA9PSBmYWxzZSkge1xuICAgICAgICAkaGVhZGVyLmFkZENsYXNzKCdmaXhlZCcpXG4gICAgICAgICAgICAgICAuY3NzKCd0b3AnLCAtc2Nyb2xsVGlsbCArICgyICogcmVtKSk7XG4gICAgICAgIHNjcm9sbFRpY2soYW1vdW50KTtcbiAgICAgIH1cbiAgICAgIGZpeGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZpeGVkID09IHRydWUpIHtcbiAgICAgICAgJGhlYWRlci5yZW1vdmVDbGFzcygnZml4ZWQnKVxuICAgICAgICAgICAgICAgLmNzcygndG9wJywgKDIgKiByZW0pKTtcbiAgICAgIH1cbiAgICAgIGZpeGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2Nyb2xsVGljayhhbW91bnQpO1xuICB9O1xuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIHNjcm9sbCk7XG59KSgpO1xuIl19
