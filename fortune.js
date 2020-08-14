function getFortune() {
  console.log('trying to get fortune');
  $.ajax({
    url: 'https://api.adviceslip.com/advice',
    type: 'GET',
    success: function(result) {
      var adviceResult = jQuery.parseJSON(result);
      console.log(adviceResult);
      $('#fortune-text').text(adviceResult.slip.advice);
    },
    error: function(error) {
      alert(error);
    }
  })
}

$('#fortune-button').on('click', function() {
  console.log('button has been clicked');
  getFortune();
})
