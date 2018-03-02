
$(document).ready(function () {

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  })

  $.getJSON('data.json', function (data) {
    $('.home-page .title .firstname').text(data.firstName);
    $('.home-page .title .lastname').text(data.lastName);
    $('.social-icons.facebook').attr('href', data.facebook);
    $('.social-icons.github').attr('href', data.github);
    $('.social-icons.linkedin').attr('href', data.linkedin);
  });

  $('.sidebar-menu a').click(function (ev) {
    $('.sidebar-menu a').removeClass('active');
    $(this).addClass('active');
  });

})
