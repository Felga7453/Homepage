window.setInterval(function () {
  $('#clock').html(moment().format('H:mm:ss - MM/DD/y'))
}, 1000);