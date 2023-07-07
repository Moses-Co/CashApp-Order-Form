$(document).ready(function() {
  // Submit the form data using AJAX
  $("#submit-button").click(function() {
    var data = $("#order-form").serialize();
    $.ajax({
      url: "submit.php",
      type: "POST",
      data: data,
      success: function(response) {
        console.log(response);
      },
      error: function(error) {
        console.log(error);
      }
    });
  });
});
