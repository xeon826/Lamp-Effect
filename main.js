$(document).ready(function() {
  var currentMousePos = {
    x: -1,
    y: -1
  };
  var scrollTop = $(window).scrollTop(),
    top = $('.box').offset().top + $('.box').height()/2,
    $el = $('.box');
    distance = (top - scrollTop),
    offset = $('.box').offset(),
    left = offset.left + $el.width()/2,
    right = $(window).innerWidth()- left,
    bottom = $(window).innerHeight()-$el.height()/2- top;
    console.log (left + ' ' + right + ' '+ top + ' ' + bottom)
    $('.dot').css({
      // 'left': left,
      'right':right,
      // 'bottom':bottom,
      'top':top,
    })
  $(document).mousemove(function(event) {
    currentMousePos.x = event.pageX;
    currentMousePos.y = event.pageY;
    var distY = currentMousePos.y - top,
    distX = currentMousePos.x - left;
    $('.box').css({
      'box-shadow': -distX/25 + 'px ' + -distY/25+'px '+ '8px',
    })
  });

  // ELSEWHERE, your code that needs to know the mouse position without an event
  if (currentMousePos.x < 10) {
    // ....
  }
});
