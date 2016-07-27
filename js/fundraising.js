(function($) {

  $(document).ready(function() {
    expandDonators();
  });

  //Initial loading
  expandDonators = function() {
    $('.see-donators').click(function() {
      $('.more-indicator').toggleClass('hide');
      $('.other-donators').toggleClass('hide');
      $('.see-donators span').text(function(i, text) {
        return text === "Hide" ? "View" : "Hide";
      });
      return false;
    });
  };

})(jQuery);