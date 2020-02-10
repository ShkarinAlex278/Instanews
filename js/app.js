$(function() {
  // let $name = "michael jackson";
  $.ajax({
    method: "GET",
    url:
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=DfA9QaZMuWxAfR4UZ4SltsgQUr8SyMk8"
    // "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=books"
    //DfA9QaZMuWxAfR4UZ4SltsgQUr8SyMk8
  }).done(function(data) {
    //  Start check Array
    var startIndex = 0,
      section = data.results[startIndex].section,
      selectArray = [];

    while (startIndex < data.results.length) {
      selectArray.push(data.results[startIndex].section);
      startIndex++;
    }
    // My new loop
    var newArray = [];
    $.each(selectArray, function(i, name) {
      if ($.inArray(name, newArray) === -1) newArray.push(name);
    });

    $.each(newArray, function(i, name) {
      $("#myList").append(`<option>${name}</option>`);
    });
    // End check array
  });

  let myCatecory;

  $(".choose").change(function() {
    myCatecory = $("#myList option:selected").text();
    console.log("1 - ", myCatecory);

    $("#box").append(myCatecory);
    //return myCatecory;
  });
});
