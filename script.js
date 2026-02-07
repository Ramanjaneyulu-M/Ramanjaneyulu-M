// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animations
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const animateOnScroll = () => {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Call on init to animate elements already in view

// Counter Animations for Achievements
const counters = document.querySelectorAll('.counter');
const updateCount = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const speed = 200; // Change transition speed
    const increment = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => updateCount(counter), 1);
    } else {
        counter.innerText = target;
    }
};

const startCountAnimation = () => {
    counters.forEach(counter => {
        if (!counter.classList.contains('counted')) {
            counter.classList.add('counted');
            updateCount(counter);
        }
    });
};

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        startCountAnimation();
    }
});

// Professional Interactions (optional)
const interactionButtons = document.querySelectorAll('.interaction-button');
interactionButtons.forEach(button => {
    button.addEventListener('hover', () => {
        button.classList.add('hover-effect');
    });
});