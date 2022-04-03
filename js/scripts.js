$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const shoutInput = $("input#shout").val();

  
    $(".shout").text(shoutInput.toUpperCase());
  

    $("#story").show();
  });
});