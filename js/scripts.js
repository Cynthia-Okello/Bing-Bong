$(document).ready(function() {
    $("form#bing-bong").submit(function(event) {
      event.preventDefault();
      var year = parseInt($("input#number").val());
      var result = bingBong(number);
      $("#result").text(result);
    });
  });

  var bingBong = function(number) {
    return false;
  };

  // jQuery user interface logic here.
