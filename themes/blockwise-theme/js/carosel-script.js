/*
 */
(function($) {
  buildCarosel($('.mentors-list'));
  buildCarosel($('.corporate-partners-list'));

  function buildCarosel(carosel) {
    carosel.css('position', 'relative');
    carosel.find('>div').addClass('carosel-item');
    const item = $('.carosel-item');
    item
      .find('p')
      .parent('div')
      .addClass('carosel-content');
    item
      .find('img')
      .parent('div')
      .addClass('carosel-thumbnail');
    const viewPort =
      '<div class="carosel"><div class="carosel-viewport">' +
      carosel.html() +
      '</div></div><a class="carosel-nav left">&#10094;</a><a class="carosel-nav right">&#10095;</a>';
    carosel.html(viewPort);
  }

  $('.carosel-nav').on('click', function() {
    event.preventDefault();
    const viewPort = $(this)
      .siblings('.carosel')
      .children('.carosel-viewport');
    const direction = $(this).attr('class');
    if (direction.includes('right')) {
      caroselSlideRight(viewPort);
    } else if (direction.includes('left')) {
      caroselSlideLeft(viewPort);
    }
  });

  function caroselSlideRight(viewPort) {
    const item = viewPort.children('.carosel-item:first-child');
    item.remove();
    viewPort.append(item);
  }
  function caroselSlideLeft(viewPort) {
    const item = viewPort.children('.carosel-item:last-child');
    item.remove();
    viewPort.prepend(item);
  }
})(jQuery);
