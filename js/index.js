$(function() {
  var $btns = $('span');
  var $screen = $('#screen');
  var $equal = $('#equals');
  var $clear = $('#clear');
  var $operator = $('.operator');
  var val1;

  $btns.click(function(event) {
    if ($screen.text() === 'ERROR') {
      $screen.text('ERROR');
    } else {
      var input = $(event.target).text();
      $screen.append(input);
     }


    //dont include operation signs
      // var input = $(event.target).text();
      // if (Number.parseInt($screen.text()[0])) {
      //   $screen.append(input);
      // } else {
      //   $screen.text('');
      //   $screen.append(input);
      // }



  });

  $operator.click(function(event) {
    if ($(event.target).text() === 'C') {
      $screen.text('');
    } else if ($(event.target).text() === '='){
      calculate();
    }
  });

  function calculate() {
    var values = $screen.text().slice(0, -1);
    $screen.text('');
    var a;
    var b;
    var operators = {
      '+': function add(a, b) {
        return a + b;
      },
      '-': a,
      'x': a,
      '÷': a
    };
    var newVals = []
    for (let key in operators) {
      for (let i = 0; i < values.length; i++) {
        if (key === values[i]){
          newVals = values.split(key);
          a = newVals[0];
          b = newVals[1];
          var total = operators[key];
          console.log(a, b, total);
        }
      }
    }
    
    // console.log(newVals);
    // for (let i = 0; i < values.length; i++) {
    //   if (values[i] === 'x') {
    //       newVals.push('*');
    //   } else if (values[i] === '÷') {
    //     newVals.push('/');
    //   } else {
    //     newVals.push(values[i]);
    //   }
    // }
    // values = eval(newVals.join(''));
    // values = newVals.join('');
    //
    // console.log(values);
    //
    // $screen.text(values);
    // if(typeof values !== Number) {
    //   $screen.text('ERROR');
    // }
  }

});
