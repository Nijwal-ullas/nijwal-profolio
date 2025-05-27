(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 30
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    

    // Typed Initiate
    if ($('.header h2').length == 1) {
        var typed_strings = $('.header .typed-text').text();
        var typed = new Typed('.header h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Porfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Review slider
    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);


    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form field values by ID
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        let errors = [];

        // Name validation
        const namePattern = /^[A-Za-z\s'-]+$/;
        if (name === "") {
            errors.push("⚠ Please enter your name.");
        } else if (!namePattern.test(name)) {
            errors.push("⚠ Name should not contain numbers or special characters.");
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            errors.push("⚠ Please enter your email.");
        } else if (!emailPattern.test(email)) {
            errors.push("⚠ Please enter a valid email address.");
        }

        // Subject validation
        if (subject === "") {
            errors.push("⚠ Please enter a subject.");
        }

        // Message validation
        if (message === "") {
            errors.push("⚠ Please enter a message.");
        }

      var templateParams = {
  name: document.getElementById('name').value.trim(),
  email:document.getElementById('email').value.trim(),
  subject:document.getElementById('subject').value.trim(),
  message:document.getElementById('message').value.trim(),
};

emailjs.send('service_x5egjst', 'template_f994ml6', templateParams).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);

        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            alert("✅ Form submitted successfully!");
            // Handle actual submission here (e.g., AJAX)
        }
    });




