
$(".fa-times").click(function(){
    $('.modal-box').hide();
});

var delay = 5000;
setTimeout(function() {
  setInterval(function(){
    $(document).ready(function () {

        $('.modal-box').show();
    
    });
  },4000)
}, delay);
   
   
   // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
(jQuery); 