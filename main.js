$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');

         $('.navbar').toggleClass('nav-toggle');
    });
   

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    $('.portfolio .button-container .btn').click(function(){
  let filter = $(this).attr('data-filter');
  if(filter == 'all'){
    $('.portfolio .image-container .box').show(400);
  } else {
    $('.portfolio .image-container .box').not('.' + filter).hide(200);
    $('.portfolio .image-container .box').filter('.' + filter).show(400);
  }
});

 $('#theme-toggler').click(function(){
    $(this).toggleClass('fa-moon fa-sun');
    $('body').toggleClass('dark-theme');
 });

 $('a[href*="#"]').on('click', function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    if ($(target).length) {
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 300, 'linear');
    }
});



 $('#contact-form').on('submit', function(e){
    e.preventDefault(); // Form submit ko rok lein (agar aap AJAX ya Formspree use kar rahe hain)
    // Yahan aap apna AJAX ya Formspree code laga sakte hain

    $('#msg').text('Message sent successfully').fadeIn();

    setTimeout(function(){
        $('#msg').fadeOut();
    }, 2000);

    // Agar aap chahte hain form reset ho jaye:
    this.reset();


    // Check if body has dark-theme class
    if ($('body').hasClass('dark-theme')) {
        $('#msg').css('color', 'white');
    } else {
        $('#msg').css('color', 'green');
    }
});



});