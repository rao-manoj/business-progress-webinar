// Set the date we're counting down to
var countDownDate = new Date("Jun 30, 2020 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }

}, 1000);


//couter
var oTop = $('#zero').offset().top - window.innerHeight;
var a = 0;
const counters = document.querySelectorAll('.target');
const speed = 200; // The lower the slower

$(window).scroll(function() {

    if (a == 0 && $(window).scrollTop() > oTop) {

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                // Lower inc to slow and higher to slow
                const inc = target / speed;

                // console.log(inc);
                // console.log(count);

                // Check if target is reached
                if (count < target) {
                    // Add inc to count and output in counter
                    counter.innerText = Math.ceil(count + inc);
                    // Call function every ms
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });

        a = 1;
    }

});




var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");

showSlides(slideIndex);

myTimer = setTimeout(function auto() { //for autoplay
    plusSlides(1);
    setTimeout(auto, 3000);
}, 3000);

function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    var i;

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

}