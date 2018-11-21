var priceSelected;
var total;
var planFrequency;

$(".my-activity").click(function(event) {
  $(".my-activity:checked").each(function() {
    priceSelected = parseInt($(this).val());
    $("#amount").val(priceSelected);
  })
});

$(".my-frequency").click(function(e){
  $(".my-frequency:checked").each(function(){
    planFrequency = $(this).val();
  });

  if(planFrequency === "monthly") {
    total = priceSelected;
  } else {
    total = priceSelected * 12;
  }
  $("#amount").val(total);
});

$(".btn-success").click(function(e) {
    $("#amount").val("");
})




// parseInt($(this).val());
