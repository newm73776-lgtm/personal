// ===== AOS INIT =====
AOS.init({
    offset: 80,
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
});

// ===== MOBILE MENU =====
function hamburg() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.transform = 'translateY(0px)';
}

function cancel() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.transform = 'translateY(-100%)';
}

function closeMenu() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.transform = 'translateY(-100%)';
}

// Close menu on outside click
document.addEventListener('click', function (e) {
    const dropdown = document.getElementById('dropdown');
    const hamburg = document.getElementById('hamburgBtn');
    if (!dropdown.contains(e.target) && !hamburg.contains(e.target)) {
        dropdown.style.transform = 'translateY(-100%)';
    }
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 30px rgba(109, 67, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(109, 67, 0, 0.08)';
    }

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-container .links .link a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'rgb(109, 67, 0)';
        }
    });
});

// ===== CONTACT FORM =====
function submitForm(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const msg = document.getElementById('formMsg');

    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
        btn.disabled = false;

        msg.className = 'form-msg success';
        msg.innerHTML = '✅ Thank you! Your message has been sent successfully.';

        document.getElementById('contactForm').reset();

        setTimeout(() => {
            msg.style.display = 'none';
            msg.className = 'form-msg';
        }, 5000);
    }, 2000);
}

// ===== SKILL BARS ANIMATION (re-trigger on scroll into view) =====
const skillFills = document.querySelectorAll('.skill-fill');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.style.getPropertyValue('--width') || '70%';
        }
    });
}, { threshold: 0.3 });

skillFills.forEach(fill => observer.observe(fill));

// ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
