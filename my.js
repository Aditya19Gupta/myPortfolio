// Enhanced Portfolio JavaScript with Modern Animations

$(document).ready(function(){
    
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Initialize Particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#00d4ff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00d4ff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });

    // Enhanced Navigation
    $('.navbarex a').on('click', function() {
        $('.navbarex a').removeClass('active');
        $(this).addClass('active');
        
        // Smooth scroll to section
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 1000);
    });

    // Header scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.headerex').addClass('scrolled');
        } else {
            $('.headerex').removeClass('scrolled');
        }
    });

    // Mobile menu toggle
    $('#menu-icon').click(function() {
        $('.navbarex').toggleClass('active');
        $(this).toggleClass('bx-x');
    });

    // Close mobile menu when clicking on a link
    $('.navbarex a').click(function() {
        $('.navbarex').removeClass('active');
        $('#menu-icon').removeClass('bx-x');
    });

    // Enhanced Typing Animation
    const typed = new Typed('.multiple-text', {
        strings: ['Java Developer', 'Full Stack Developer', 'Spring Boot Expert', 'Web Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
    });

    // Progress bar animation
    function animateProgressBars() {
        $('.progress-fill').each(function() {
            const width = $(this).data('width');
            $(this).css('width', '0%');
            
            setTimeout(() => {
                $(this).animate({
                    width: width + '%'
                }, 2000, 'easeOutQuart');
            }, 500);
        });
    }

    // Trigger progress animation when skills section is visible
    const skillsSection = document.querySelector('#mskills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }

    // Enhanced Carousel
    var slider = $(".owl-carousel");
    slider.owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        items: 1,
        stagePadding: 50,
        center: true,
        nav: false,
        margin: 30,
        dots: true,
        loop: true,
        responsive: {
            0: { 
                items: 1,
                stagePadding: 20
            },
            768: { 
                items: 2,
                stagePadding: 30
            },
            1200: { 
                items: 3,
                stagePadding: 50
            }
        }
    });

    // Scroll to top functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Enhanced hover effects for skill cards
    $('.skill-card').hover(
        function() {
            $(this).find('.skill-icon').addClass('animate__animated animate__pulse');
        },
        function() {
            $(this).find('.skill-icon').removeClass('animate__animated animate__pulse');
        }
    );

    // Enhanced contact card effects
    $('.contact-card').hover(
        function() {
            $(this).find('.contact-icon-wrapper').addClass('animate__animated animate__bounceIn');
        },
        function() {
            $(this).find('.contact-icon-wrapper').removeClass('animate__animated animate__bounceIn');
        }
    );

    // Parallax effect for floating elements
    $(window).scroll(function() {
        const scrolled = $(window).scrollTop();
        $('.floating-element').each(function() {
            const speed = $(this).data('speed');
            const yPos = -(scrolled * speed);
            $(this).css('transform', `translateY(${yPos}px)`);
        });
    });

    // Enhanced project card interactions
    $('.project-card').hover(
        function() {
            $(this).find('.project-tech .tech-tag').each(function(index) {
                $(this).css({
                    'animation-delay': (index * 0.1) + 's',
                    'animation': 'slideInUp 0.5s ease forwards'
                });
            });
        },
        function() {
            $(this).find('.project-tech .tech-tag').css('animation', 'none');
        }
    );

    // Smooth reveal animation for sections
    function revealOnScroll() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('revealed');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Enhanced button click effects
    $('.btn').click(function(e) {
        // Create ripple effect
        const button = $(this);
        const ripple = $('<span class="ripple"></span>');
        
        const rect = button[0].getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.css({
            width: size + 'px',
            height: size + 'px',
            left: x + 'px',
            top: y + 'px'
        });
        
        button.append(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    // Enhanced social media hover effects
    $('.social-link').hover(
        function() {
            $(this).addClass('animate__animated animate__rubberBand');
        },
        function() {
            $(this).removeClass('animate__animated animate__rubberBand');
        }
    );

    // Loading screen
    $(window).on('load', function() {
        $('.loading').addClass('hidden');
        setTimeout(() => {
            $('.loading').remove();
        }, 500);
    });

    // Enhanced scroll animations for timeline
    function animateTimeline() {
        const timelineItems = document.querySelectorAll('.roadmap-item');
        timelineItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight * 0.8) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }

    window.addEventListener('scroll', animateTimeline);
    animateTimeline(); // Initial check

    // Enhanced image hover effects
    $('.profile-image, .about-image').hover(
        function() {
            $(this).addClass('animate__animated animate__pulse');
        },
        function() {
            $(this).removeClass('animate__animated animate__pulse');
        }
    );

    // Keyboard navigation
    $(document).keydown(function(e) {
        if (e.keyCode === 38) { // Up arrow
            e.preventDefault();
            $('html, body').animate({
                scrollTop: '-=100'
            }, 300);
        }
        if (e.keyCode === 40) { // Down arrow
            e.preventDefault();
            $('html, body').animate({
                scrollTop: '+=100'
            }, 300);
        }
    });

    // Enhanced section transitions
    $('section').each(function() {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(50px)',
            'transition': 'all 0.8s ease'
        });
    });

    function checkSectionVisibility() {
        $('section').each(function() {
            const sectionTop = $(this).offset().top;
            const sectionHeight = $(this).height();
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();
            
            if (scrollTop + windowHeight > sectionTop + 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    }

    $(window).scroll(checkSectionVisibility);
    checkSectionVisibility(); // Initial check

    // Enhanced logo animation
    $('#main-logo').hover(
        function() {
            $(this).addClass('animate__animated animate__rotateIn');
        },
        function() {
            $(this).removeClass('animate__animated animate__rotateIn');
        }
    );

    // Performance optimization: Throttle scroll events
    let ticking = false;
    function updateOnScroll() {
        if (!ticking) {
            requestAnimationFrame(function() {
                checkSectionVisibility();
                animateTimeline();
                ticking = false;
            });
            ticking = true;
        }
    }

    $(window).scroll(updateOnScroll);

    // Enhanced mobile experience
    if (window.innerWidth <= 768) {
        // Reduce animations on mobile for better performance
        $('*').css('animation-duration', '0.5s');
        
        // Add touch feedback
        $('.btn, .contact-card, .skill-card').on('touchstart', function() {
            $(this).css('transform', 'scale(0.95)');
        }).on('touchend', function() {
            $(this).css('transform', '');
        });
    }

    // Console welcome message
    console.log('%c🚀 Welcome to Aditya Gupta\'s Portfolio!', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
    console.log('%c💻 Java Developer | Full Stack Developer | Spring Boot Expert', 'color: #ff6b6b; font-size: 14px;');
    console.log('%c📧 Contact: adityacse207@gmail.com', 'color: #fff; font-size: 12px;');
});

// Additional CSS animations
const additionalStyles = `
<style>
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

    .roadmap-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }

    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-color);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    }

    .loading.hidden {
        opacity: 0;
        pointer-events: none;
    }

    .loading-spinner {
        width: 50px;
        height: 50px;
        border: 3px solid rgba(0, 212, 255, 0.3);
        border-top: 3px solid var(--main-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
`;

// Inject additional styles
document.head.insertAdjacentHTML('beforeend', additionalStyles);

// Add loading screen to HTML
document.body.insertAdjacentHTML('afterbegin', `
<div class="loading">
    <div class="loading-spinner"></div>
</div>
`);
