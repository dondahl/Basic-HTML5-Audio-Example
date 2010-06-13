(function($) {
  $('.play').click(function(evt) {
    var caller = evt.target;
    var soundId = $(caller).attr('id').split('-')[1];
    var soundElement = $("#sound-" + soundId);
    soundElement[0].play();
//    alert("FAG");
    //document.getElementById('sound-' + soundId).play();

  });
  $('.stop').click(function(evt) {
    var caller = evt.target;
    var soundId = $(caller).attr('id').split('-')[1];
    var soundElement = $("#sound-" + soundId);
    soundElement[0].pause();
    
  });
  
  $('#sound-6')[0].play();
  window.setTimeout(function() {
    $("#sound-4")[0].play();
  }, 2000); //mimic the first mission of C&C Tiberian Dawn with Reinforcements Have Arrived!

})($);