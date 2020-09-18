jQuery(document).ready(function ($) {
  // custom code
  const limit = 60
  const maxLengtResult = 6

  function random() {
    return Math.floor(Math.random() * limit + 1)
  }

  function addListOfExcludedNumbers(number) {
    if (number > 0 && number <= limit && (limit - excludedNumbers.length) > maxLengtResult) {
      excludedNumbers.push(number)
    }
  }

  $("#generator").on("click", function () {

    let result = []
    let excludedNumbers = []

    while (result.length < maxLengtResult) {
      const number = random()
  
      if (number > 0 &&
        number <= limit &&
        !excludedNumbers.includes(number) &&
        !result.includes(number)
      ) {
        result.push(number)
      }
    }

    $(".dot").remove()

    result.sort(function(a, b){return a-b}).forEach(element => {
      $("#game").append('<span class="dot">' + element + '</span>');
    });

  });
});
