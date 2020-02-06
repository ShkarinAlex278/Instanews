$(function() {
  //   $("body").css("width", "100%");
  //   $("body").css("height", "100%");
  //   $("body").css("position", "absolute");
  //   $("body").css("display", "flex");
  //   $("body").css("justify-content", "center");
  //   $("body").css("align-items", "center");

  //   $(".itunes-widget").css("width", "500px");
  //   $(".itunes-widget").css("height", "500px");
  //   $(".itunes-widget").css("text-align", "center");
  //   $(".itunes-widget").css("border", "solid", "1px", "black");
  //   $(".itunes-widget").css("padding", "10px");
  //   $(".itunes-widget").css("margin-right:", "0px");

  // $("h1").css("font-size", "30px");
  // $("p").css("font-size", "15px");

  //   $("input[type='submit']").css("font-size", "20px");
  //   $("input[type='submit']").css("background-color", "rgb(168, 168, 206)");
  //   $("input[type='submit']").css("color", "white");
  //   $("input[type='submit']").css("padding", "10px");
  //   $("input[type='submit']").css("border-radius", "10px");

  //   $("input[type='text']").css("font-size", "20px");
  //   $("input[type='text']").css("background-color", "white");
  //   $("input[type='text']").css("color", "blue");
  //   $("input[type='text']").css("padding", "10px");
  //   $("input[type='text']").css("border-radius", "10px");

  //let name = "bon jovi";
  let $name = "michael jackson";
  //let $name = $("input[type='text']").val();

  //$("button").on("click", function() {
  $(".itunes-widget").submit(function() {
    $.ajax({
      method: "GET",
      url: `https://itunes.apple.com/search?entity=album&limit=6&term=${$name}`
      //  `https://itunes.apple.com/search?entity=album&limit=6&term=PLUS+THE+ARTIST+NAME`
    })
      //   .always(function() {
      //     $(".text").append("<br> Thank you for using our API");
      //     // .css("color", "green");
      //   })

      .done(function(data) {
        // $(".results")
        let $singer = data.resultCount;
        console.log("lol");
        console.log($name);
        console.log($singer);
        console.log("Data - ", data[2]);
        //console.log("Key - ", key[1].resultCount);
        //console.log(data.artworkUrl100);
        //console.log(key);
      });
  });
});
