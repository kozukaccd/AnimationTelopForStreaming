$(function () {
    var $input1 = $('#input1');
    var $input2 = $('#input2');
    var $input3 = $('#input3');

    var $output1 = $('#output1');
    $input1.on('change', function (event) {
      $output1.text($input1.val());
    });
    var $output2 = $('#output2');
    $input2.on('change', function (event) {
      $output2.text($input2.val());
    });
    var $output3 = $('#output3');
    $input3.on('change', function (event) {
      $output3.text($input3.val());
    });
  });