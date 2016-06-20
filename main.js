$(document).ready(function() {
  $('.ig-include').each(function(index, value){
    $(this).load($(this).attr('ig-include'), function(){
      // CODE FOR INDIVIDUAL TEMPLATES
      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });

      $(this).foundation();

      // COLOR PREVIEW
      $('.color-preview').each(function(index, value) {
        var color = $(this).attr('ig-color');
        $(this).css('background-color', color);
      })
      // COLOR CLIPBOARD
      new Clipboard('.color-preview')
    });
  });

  // HIGHLIGHT JS

  // SerSCROLL LINK
  // $(document).on('event', 'reference', callback) :
  //// -- Required for loaded html pages to work. Must use format to use main.js consistantly on event bindings
	$(document).on('click', 'a[href^="#"]', function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});
