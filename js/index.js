$(function() {
  var $btns = $('span');
  var $screen = $('#screen');
  var $equal = $('#equals');
  var $clear = $('#clear');
  var $operator = $('.operator');
  var total = 0;

  $btns.click(function(event) {
    if ($screen.text() === 'ERROR') {
      $screen.text('ERROR');
    } else {
      var input = $(event.target).text();
      $screen.append(input);
    }
  });
  $operator.click(function(event) {
    if ($(event.target).text() === 'C') {
      $screen.text('');
    } else if ($(event.target).text() === '=') {
      calculate();
    }
  });

  function calculate() {
    var values = $screen.text().slice(0, -1);
    $screen.text('');
    var newVals = []

    if (!Number.isInteger(Number(values[values.length - 1]))) {
      $screen.text('ERROR');
      return;
    }

    for (let i = 0; i < values.length; i++) {
      switch (values[i]) {
        case '+':
          newVals = values.split('+');
          total = Number(newVals[0]) + Number(newVals[1]);
          break;
        case '-':
          newVals = values.split('-');
          total = Number(newVals[0]) - Number(newVals[1]);
          break;
        case 'x':
          newVals = values.split('x');
          total = newVals[0] * newVals[1];
          break;
        case '÷':
          newVals = values.split('÷');
          total = newVals[0] / newVals[1];
          break;
      }
    }
    if (Number(total)) {
      $screen.text(total);
    } else if (Number(total) === 0){
      $screen.text(total);
    } else {
      $screen.text('ERROR');
    }
  }

  $('input[type="text"]').keypress(function() {
  console.log('A key was pressed and inserted into a focusable control.');
});

});
