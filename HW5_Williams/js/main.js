//hiding the article content & Read Less links to start
$(function () {
  $('.hidden').css('display', 'none');
});

$(function () {
  $('.read_less').css('display', 'none');
})

//Read More clicks

$('.read_more_1').click( function(){
  $('.hidden1' ).show( function(){
    $('.hidden1').slideDown();
  });
  $('.read_more_1').hide();
  $('.read_less_1').show();
  });

  $('.read_more_2').click( function(){
    $( '.hidden2' ).show( function(){
    $('.hidden2').slideDown();
    });
    $('.read_more_2').hide();
    $('.read_less_2').show();
  });

//Read Less clicks
$('.read_less_1').click( function(){
  $('.hidden1' ).hide( function(){
    $('.hidden1').slideUp();
  });
  $('.read_more_1').show();
  $('.read_less_1').hide();
});

$('.read_less_2').click( function(){
  $('.hidden2').hide( function (){
    $('.hidden2').slideUp();
  });
  $('.read_more_2').show();
  $('.read_less_2').hide();
});

//learn more click
$('.learnMoreHidden').css('display', 'none');

$('.learn_more').click( function(){
  $( '.learnMoreHidden').show( function(){
    $('.learnMoreHidden').slideDown();
  });
  $('.learn_more').hide();
});
