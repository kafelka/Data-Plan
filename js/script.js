var priceGB = 0;
var total = 0;
var planFrequency = 1;
var priceMinutes = 0;
var familyTotal = 0;
var numberOfSims = 0;

var family = [
  [14.00, 21.20, 28.40, 35.60, 42.80],
  [20.00, 32.00, 44.00, 56.00, 68.00],
  [30.00, 50.00, 70.00, 90.00, 110.00],
  [40.00, 68.00, 96.00, 124.00, 152.00]
]

function calculate() {
  // if #summary.length == 1 it means that the element exists, if 0, does not exist
  if ($("#summary").length){
    familyTotal = family[priceGB][numberOfSims] * planFrequency;
    $("#summary").val(familyTotal);
  } else {
    total = (priceGB + priceMinutes) * planFrequency;
    $("#amount").val(total);
  }
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
