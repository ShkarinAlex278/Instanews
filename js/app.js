$(function() {
  $("select").on("change", function() {
    $(".myList").empty();

    let $selection = $(this).val();
    $.getJSON(
      `https://api.nytimes.com/svc/topstories/v2/${$selection}.json?api-key=DfA9QaZMuWxAfR4UZ4SltsgQUr8SyMk8`
    ).done(function(data) {
      let counter = 0;
      $.each(data.results, function(key, value) {
        if (value.multimedia.length !== 0 && counter < 12) {
          counter++;

          $(".myList").append(
            `<figure><a href ="${value.url}target="_blank"><img src="${value.multimedia[0].url} "/><p>${value.abstract}</p></a></figure>`
          );
          // -- for git
          return counter !== 12;
        }
      });
    });
  });
});
