$.fn.preload = function() {
  this.each(function(){
      $('<img/>')[0].src = this;
  });
}

// Usage:

$(['p1.jpg','p2.jpg','p3.jpg', 'p4.jpg','p5.jpg','p6.jpg']).preload();