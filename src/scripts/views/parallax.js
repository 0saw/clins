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
