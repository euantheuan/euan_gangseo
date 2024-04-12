let year = 2024

$('ul.yearly a.0 > span').text(year);
$('ul.yearly a.-4').text(year - 4);
$('ul.yearly a.-3').text(year - 3);
$('ul.yearly a.-2').text(year - 2);
$('ul.yearly a.-1').text(year - 1);
$('ul.yearly a.1').text(year + 1);
$('ul.yearly a.2').text(year + 2);
$('ul.yearly a.3').text(year + 3);
$('ul.yearly a.4').text(year + 4);

$('ul.yearly a.0 > i.minus').click(function() {
     year = year - 1;
     $('ul.yearly a.0 > span').text(year);
     $('ul.yearly a.-4').text(year - 4);
     $('ul.yearly a.-3').text(year - 3);
     $('ul.yearly a.-2').text(year - 2);
     $('ul.yearly a.-1').text(year - 1);
     $('ul.yearly a.1').text(year + 1);
     $('ul.yearly a.2').text(year + 2);
     $('ul.yearly a.3').text(year + 3);
     $('ul.yearly a.4').text(year + 4);
});
$('ul.yearly a.0 > i.plus').click(function() {
     year = year + 1;
     $('ul.yearly > li > a > span').text(year);
     $('ul.yearly a.-4').text(year - 4);
     $('ul.yearly a.-3').text(year - 3);
     $('ul.yearly a.-2').text(year - 2);
     $('ul.yearly a.-1').text(year - 1);
     $('ul.yearly a.1').text(year + 1);
     $('ul.yearly a.2').text(year + 2);
     $('ul.yearly a.3').text(year + 3);
     $('ul.yearly a.4').text(year + 4);
});