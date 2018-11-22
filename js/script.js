var priceGB = 0;
var total = 0;
var planFrequency = 1;
var priceMinutes = 0;

function calculate() {
  total = (priceGB + priceMinutes) * planFrequency;
  $("#amount").val(total);
}

$(".my-giga").click(function(event) {
  $(".my-giga:checked").each(function() {
    priceGB = parseInt($(this).val());
  });
  calculate();
});

$(".my-frequency").click(function(e){
  $(".my-frequency:checked").each(function(){
    planFrequency = parseInt($(this).val());
  });
  calculate();
});

$(".my-minutes").click(function(e){
  $(".my-minutes:checked").each(function(e){
    // priceMinutes = $(this).val();
    priceMinutes = parseInt($(this).data('price'));
  });
  calculate();
  });

$(".btn-success").click(function(e) {
  priceGB = 0;
  total = 0;
  planFrequency = 1;
  priceMinutes = 0;

  $("#amount").val("");
  $("input[type=radio]:checked").each(function(e){
    $(this).prop("checked", false);
  })
});
