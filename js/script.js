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
    // $("#amount").val(priceGB);
  });
  calculate();
});

$(".my-frequency").click(function(e){
  $(".my-frequency:checked").each(function(){
    planFrequency = parseInt($(this).val());
  });
  calculate();
  // if(planFrequency === "monthly") {
  //   total = priceGB;
  // } else {
  //   total = priceGB * 12;
  // }
  // $("#amount").val(total);
});

$(".my-minutes").click(function(e){
  $(".my-minutes:checked").each(function(e){
    // priceMinutes = $(this).val();
    priceMinutes = parseInt($(this).data('price'));
  });
  calculate();

  });

  // if ((planFrequency === "monthly") && (priceMinutes === "180min")) {
  //   total = priceGB + priceMinutesPrice;
  // } else if ((planFrequency === "monthly") && (priceMinutes === "300min")) {
  //   total = priceGB + priceMinutesPrice;
  // } else if ((planFrequency === "monthly") && (priceMinutes === "600min")) {
  //   total = priceGB + priceMinutesPrice;
  // } else if ((planFrequency === "monthly") && (priceMinutes === "unlimited")) {
  //   total = priceGB + priceMinutesPrice;
  // } else if ((planFrequency === "annually") && (priceMinutes === "180min")) {
  //   total = ((priceGB + priceMinutesPrice) * 12);
  // } else if ((planFrequency === "annually") && (priceMinutes === "300min")) {
  //   total = ((priceGB + priceMinutesPrice) * 12);
  // } else if ((planFrequency === "annually") && (priceMinutes === "600min")) {
  //   total = ((priceGB + priceMinutesPrice) * 12);
  // } else {
  //   total = ((priceGB + priceMinutesPrice) * 12);
  // }


// $("#amount").val(total);


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
