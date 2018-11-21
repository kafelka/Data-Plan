var gb_required;
var frequency;

$(".my-activity").click(function(event) {
  var total = 0;
  $(".my-activity:checked").each(function() {
    total += parseInt($(this).val());
  });

  if (total == 0) {
    $("#amount").val("");
  } else {
    $("#amount").val(total);
  }
}
});
