// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP timeline
    const tl = gsap.timeline();
    
    // Header animation
    tl.fromTo('.header', 
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
    
    // Section titles animation
    tl.fromTo('.section-title', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.3, ease: 'back.out(1.7)' },
        '-=0.5'
    );
    
    // Gallery animation
    tl.fromTo('.gallery', 
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }
    );
    
    tl.fromTo('.photo-frame', 
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)' },
        '-=0.3'
    );
    
    // Messages section animation
    tl.fromTo('.messages-section', 
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }
    );
    
    tl.fromTo('.message-card, .wish-card', 
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.3, ease: 'power2.out' },
        '-=0.3'
    );

    // Hover animations for interactive elements
    gsap.utils.toArray('.photo-frame, .message-card, .wish-card').forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(element, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Back button animation
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('mouseenter', () => {
        gsap.to(backButton, {
            scale: 1.05,
            duration: 0.2
        });
    });
    
    backButton.addEventListener('mouseleave', () => {
        gsap.to(backButton, {
            scale: 1,
            duration: 0.2
        });
    });

    // Continuous subtle animations
    gsap.to('.main-title', {
        y: 5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    // Photo frame continuous subtle animation
    gsap.to('.photo-frame', {
        y: -5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.5
    });

    // Message textarea auto-resize and typing effect
    const messageText = document.querySelector('.message-text');
    if (messageText) {
        // Auto-resize
        messageText.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });

        // Initial resize
        setTimeout(() => {
            messageText.style.height = (messageText.scrollHeight) + 'px';
        }, 100);

        // Typing effect for initial text
        const originalText = messageText.value;
        messageText.value = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                messageText.value += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 20);
            }
        }
        
        // Start typing after a delay
        setTimeout(typeWriter, 2000);
    }
});

// Add some interactive sparkle effect
document.addEventListener('click', function(e) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    document.body.appendChild(sparkle);

    gsap.fromTo(sparkle, 
        { scale: 0, opacity: 1 },
        { 
            scale: 2, 
            opacity: 0, 
            duration: 1, 
            ease: 'power2.out',
            onComplete: () => sparkle.remove()
        }
    );
});

// Parallax effect for background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    gsap.to('body', {
        backgroundPosition: `50% ${rate}px`,
        duration: 0.1,
        ease: 'none'
    });
});

// music
// Background Music Control
const music = document.getElementById('bgMusic');
const musicControl = document.getElementById('musicControl');
let musicPlaying = false;

// Try to auto play after animations
setTimeout(() => {
  music.play().then(() => {
    musicPlaying = true;
    musicControl.innerHTML = '<i class="fa fa-pause"></i>';
  }).catch(() => {
    console.log("Autoplay blocked, waiting for user interaction.");
  });
}, 2000); // 2 seconds after animations start

// Toggle play/pause
musicControl.addEventListener('click', () => {
  if (musicPlaying) {
    music.pause();
    musicPlaying = false;
    musicControl.innerHTML = '<i class="fa fa-music"></i>';
  } else {
    music.play();
    musicPlaying = true;
    musicControl.innerHTML = '<i class="fa fa-pause"></i>';
  }
});
