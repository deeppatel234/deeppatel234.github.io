
$(document).ready(function () {

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  })

  function getUrlParameter (sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  };

  var url = getUrlParameter('url');
  $.getJSON(url, function (data) {
    replaceData(data);
  });

  function replaceData (data) {
    $('.home-page .title .firstname').text(data.firstName);
    $('.home-page .title .lastname').text(data.lastName);
    $('.social-icons.facebook').attr('href', data.facebook);
    $('.social-icons.github').attr('href', data.github);
    $('.social-icons.linkedin').attr('href', data.linkedin);
    $('.contacts-contant span.address').text(data.address);
    $('.contacts-contant span.mobile').text(data.mobile);
    $('.contacts-contant span.email').text(data.email);
    $('.contacts-contant a.email-mailto').attr(`mailto:${data.email}`);
    $('.about-contant span.about-descrition').text(data.aboutdescription);

    data.work.forEach(element => {
      $('.work-timeline').append(timelineTemplate(element));
    });

    data.education.forEach(element => {
      $('.education-timeline').append(timelineTemplate(element));
    });
  }

  $('.sidebar-menu a').click(function (ev) {
    $('.sidebar-menu a').removeClass('active');
    $(this).addClass('active');
  });

  function timelineTemplate (param) {
    return `<div class="timeline card">
        <div class="card-body">
          <h6 class="card-title">
            <span class="badge badge-pill badge-light main-color-border">${param.time}</span>
          </h6>
          <h5 class="card-title">${param.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${param.subtitle}</h6>
          <p class="card-text">${param.description}</p>
        </div>
      </div>`
  }

  let currentPage = window.location.hash

  if (currentPage) {
    let $ele = $(`.sidebar-menu a[href="${currentPage}"]`)
    if ($ele) {
      $('.sidebar-menu a').removeClass('active');
      $($ele).addClass('active');
    }
  }
})
