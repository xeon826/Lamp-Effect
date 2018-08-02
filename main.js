$(document).ready(function() {
  $('.has__lighting').each(function(i, obj) {
    $(this).addClass('has__lighting' + i);
    lamp($('.has__lighting' + i));
  })

  $(window).on('resize', function() {
    $('.has__lighting').off();
    // lamp($('.has__lighting'));
    $('.has__lighting').each(function(i, obj) {
      $(this).addClass('has__lighting' + i);
      lamp($('.has__lighting' + i));
    })
  })

});

function lamp($obj) {
  var currentMousePos = {
    x: -1,
    y: -1
  };
  var scrollTop = $(window).scrollTop(),
    top = $obj.offset().top + $obj.height() / 2,
    // $el = $obj;
  distance = (top - scrollTop),
    offset = $obj.offset(),
    left = offset.left + $obj.width() / 2,
    right = $(window).innerWidth() - left,
    bottom = $(window).innerHeight() - $obj.height() / 2 - top;
  console.log(left + ' ' + right + ' ' + top + ' ' + bottom)
  $('.dot').css({
    // 'left': left,
    'right': right,
    // 'bottom':bottom,
    'top': top,
  })
  $(document).mousemove(function(event) {
    currentMousePos.x = event.pageX;
    currentMousePos.y = event.pageY;
    var distY = currentMousePos.y - top,
      distX = currentMousePos.x - left;
      console.log(distX + ' ' + distY);
    $obj.css({
      'box-shadow': -distX / 25 + 'px ' + -distY / 25 + 'px ' + '5px',
    })
  });

}
