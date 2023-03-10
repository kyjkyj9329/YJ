$(document).ready(function() {
    $('#main_navigation a').click(function() {
      let target = $(this).attr('data-target');
      $(':not([data-name=' + target + '])').removeClass('active');
      $('[data-name=' + target + ']').addClass('active');
    });