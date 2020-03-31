$(document).ready(function () {
  $("#user-info").submit(function (event) {
    event.preventDefault();

    var stringArray = ($("#word").val()).split("");
    var vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];

    var newString = [];

    stringArray.forEach(function (letter) {
      if (vowels.includes(letter)) {
        letter = "-";
        newString.push(letter);
      } else {
        newString.push(letter);
      }
    })

    var finalString = newString.join("");

    $("#user-info")[0].reset();
    $("#newPhrase").html("<p>" + finalString + "</p>");
    $("#result").show();
  })
})