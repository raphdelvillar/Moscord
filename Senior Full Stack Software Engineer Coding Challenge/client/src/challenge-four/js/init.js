function init() {
  display("calculate-validation-number-444444", 444444);
  display("calculate-validation-number-1234", 1234);
  display("calculate-validation-number-23478998", 23478998);
}

function display(id, input) {
  document.getElementById(id).innerHTML = JSON.stringify(
    calculateValidationNumber(input),
    null,
    2
  );
  clearLogger();
}

function manual() {
  let input = document.getElementById("manual-input-box").value;
  display("manual-input", input);
}
