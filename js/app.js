$(function() {
  $("select").on("change", function() {
    $(".display").empty();

    //CSS style add
    $(".display").css("grid-template-columns:", "0px", "0px", "0px");
    $(".display").css("grid-template-rows: ", "0px", "0px", "0px", "0px");
    //grid-template-rows: 350px 350px 350px 350px;
    // CSS style end

    let $selection = $(this).val();
    $.getJSON(
      `https://api.nytimes.com/svc/topstories/v2/${$selection}.json?api-key=DfA9QaZMuWxAfR4UZ4SltsgQUr8SyMk8`
    ).done(function(data) {
      // CSSstyle chenging --
      $(".display").css("display", "grid");

      // End CSS style --
      let counter = 0;
      $.each(data.results, function(key, value) {
        if (value.multimedia.length !== 0 && counter < 12) {
          counter++;

          $(".display").append(
            `<figure><a href ="${value.url}target="_blank"><img src="${value.multimedia[4].url} "/><p>${value.abstract}</p></a></figure>`
          );
          // -- for git
          return counter !== 12;
        }
      });
    });
  });
});
