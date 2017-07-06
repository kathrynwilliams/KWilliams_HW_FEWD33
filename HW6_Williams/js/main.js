$(document).ready(function() {

  var city = null;
  $("#submit-btn").click(function(){
    event.preventDefault();
    $("#city-type").val();
    var city = document.getElementById("city-type").value.toLowerCase();
    console.log(city);
    if (city === "nyc" || city === "new york" || city === "new york city") {
      $("body").addClass("nyc");
      $("body").removeClass("sf");
      $("body").removeClass("austin");
      $("body").removeClass("sydney");
      $("body").removeClass("la");
    } else if (city === "san francisco" || city === "san fran" || city === "sf" || city === "bay area") {
      $("body").addClass("sf");
      $("body").removeClass("nyc");
      $("body").removeClass("austin");
      $("body").removeClass("sydney");
      $("body").removeClass("la");
    } else if (city === "austin" || city === "atx") {
      $("body").addClass("austin");
      $("body").removeClass("sf");
      $("body").removeClass("nyc");
      $("body").removeClass("sydney");
      $("body").removeClass("la");
    } else if (city === "sydney" || city === "syd") {
      $("body").addClass("sydney");
      $("body").removeClass("austin");
      $("body").removeClass("sf");
      $("body").removeClass("nyc");
      $("body").removeClass("la");
      console.log("else if sample");
    } else if (city === "la" || city === "lax" || city === "los angeles") {
      $("body").addClass("la");
      $("body").removeClass("austin");
      $("body").removeClass("sf");
      $("body").removeClass("nyc");
      $("body").removeClass("sydney");
    } else {
      $("body").removeClass("nyc");
      $("body").removeClass("sydney");
      $("body").removeClass("austin");
      $("body").removeClass("sf");
      $("body").removeClass("la");
      console.log("is it working");
    };
  });
});
