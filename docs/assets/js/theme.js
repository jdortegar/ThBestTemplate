$(document).ready(function() {
  // Get started!

  /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li')
    .on('mouseover', function() {
      var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

      // Now highlight all the stars that's not after the current hovered star
      $(this)
        .parent()
        .children('li.star')
        .each(function(e) {
          if (e < onStar) {
            $(this).addClass('hover');
          } else {
            $(this).removeClass('hover');
          }
        });
    })
    .on('mouseout', function() {
      $(this)
        .parent()
        .children('li.star')
        .each(function(e) {
          $(this).removeClass('hover');
        });
    });

  /* 2. Action to perform on click */
  $('#stars li').on('click', function(e) {
    e.stopPropagation();
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this)
      .parent()
      .children('li.star');

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
  });

  //Get the button:
  var mybutton = $('#myUpBtn');
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.show();
    } else {
      mybutton.hide();
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  mybutton.on('click', function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  // expand list
  $('.most-popular-choice-element').each(function() {
    $(this).on('click', function() {
      $(this)
        .find('.list-body')
        .toggle();
    });
  });

  // End Script
});
