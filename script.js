// Simplified Navigation functionality - CSS animations only
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Project modal functionality
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const closeModal = document.getElementById('closeModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalTechnologies = document.getElementById('modalTechnologies');

    // Check if modal elements exist before adding event listeners
    if (!modal || !closeModal || !modalImage || !modalTitle || !modalDescription || !modalTechnologies) {
        console.log('Some modal elements not found, skipping modal functionality');
        return;
    }

    // Project data
    const projectData = {
        'ecommerce': {
            title: 'E-Commerce Platform',
            description: 'A modern e-commerce platform built with cutting-edge technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard. The platform is fully responsive and optimized for performance with server-side rendering and progressive web app capabilities.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express'],
            demoLink: 'https://my-test2.42web.io/'
        },
        'portfolio': {
            title: 'Portfolio Website',
            description: 'A creative portfolio website showcasing modern web development techniques. Built with performance and accessibility in mind, featuring smooth animations, responsive design, and optimized loading times. Includes dark mode toggle, contact forms, and blog functionality.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Webpack', 'Sass'],
            demoLink: 'https://qodifies.github.io/Qodifies-food/'
        },
        'mobile-ui': {
            title: 'Mobile App UI',
            description: 'Intuitive mobile application user interface design and development. Features include gesture-based navigation, custom animations, offline functionality, and seamless user experience across different devices and screen sizes.',
            technologies: ['React Native', 'TypeScript', 'Redux', 'Expo', 'Firebase', 'Jest'],
            demoLink: 'https://mobile-ui-demo.mywebsite.com'
        },
        'dashboard': {
            title: 'Dashboard Design',
            description: 'A comprehensive data visualization dashboard for business analytics. Includes real-time data updates, interactive charts, filtering capabilities, export functions, and role-based access control. Built with scalability and performance in mind.',
            technologies: ['Vue.js', 'D3.js', 'Chart.js', 'Node.js', 'PostgreSQL', 'Socket.io'],
            demoLink: 'https://dashboard-demo.mywebsite.com'
        },
        'landing': {
            title: 'Landing Page',
            description: 'High-converting landing page optimized for lead generation and conversions. Features A/B testing capabilities, analytics integration, form validation, and performance optimization. Designed with modern UX principles and conversion rate optimization.',
            technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Google Analytics', 'Mailchimp', 'Vercel'],
            demoLink: 'https://landing-demo.mywebsite.com'
        },
        'webapp': {
            title: 'Web Application',
            description: 'Full-stack web application with comprehensive functionality including user management, real-time features, API integrations, and scalable architecture. Built following best practices for security, performance, and maintainability.',
            technologies: ['Angular', 'Python', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
            demoLink: 'https://webapp-demo.mywebsite.com'
        }
    };

    // Add click event to project cards
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectKey = this.getAttribute('data-project');
            const project = projectData[projectKey];
            const imageSrc = this.querySelector('img').src;

            if (project) {
                modalImage.src = imageSrc;
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;
                
                // Update the live demo link
                const modalLiveDemo = document.getElementById('modalLiveDemo');
                if (modalLiveDemo && project.demoLink) {
                    modalLiveDemo.href = project.demoLink;
                }
                
                // Clear and populate technologies
                modalTechnologies.innerHTML = '';
                project.technologies.forEach(tech => {
                    const techTag = document.createElement('span');
                    techTag.className = 'tech-tag';
                    techTag.textContent = tech;
                    modalTechnologies.appendChild(techTag);
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal functionality
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Scroll animations using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            } else {
                // Remove animation class when element leaves viewport for re-animation
                entry.target.classList.remove('animate-in');
            }
        });
    }, observerOptions);

    // Add animation classes and observe elements
    const elementsToAnimate = [
        { selector: '.section-title', className: 'animate-element' },
        { selector: '.skill-card:nth-child(odd)', className: 'animate-left' },
        { selector: '.skill-card:nth-child(even)', className: 'animate-right' },
        { selector: '.project-card', className: 'animate-scale' },
        { selector: '.stat-card', className: 'animate-element' },
        { selector: '.about-text', className: 'animate-left' },
        { selector: '.about-image', className: 'animate-right' },
        { selector: '.stack-card', className: 'animate-element' },
        { selector: '.social-card', className: 'animate-scale' },
        { selector: '.skill-bar', className: 'animate-left' },
        { selector: '.feature', className: 'animate-element' },
        { selector: '.fullstack-section', className: 'animate-element' }
    ];

    elementsToAnimate.forEach(({ selector, className }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.classList.add(className);
            // Add staggered delay
            element.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(element);
        });
    });

    // Add image loading functionality
    function handleImageLoad() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', function() {
                    this.classList.add('loaded');
                });
                img.addEventListener('error', function() {
                    this.style.opacity = '0.5';
                    console.log('Image failed to load:', this.src);
                });
            }
        });
    }

    // Initialize image loading
    handleImageLoad();

    // Observer for dynamically loaded images
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (!img.classList.contains('loaded')) {
                    img.addEventListener('load', function() {
                        this.classList.add('loaded');
                    });
                }
            }
        });
    });

    // Observe all images
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
});


//vibration
document.querySelectorAll("a,i").forEach(link => {
  link.addEventListener("click", () => {
    if (navigator.vibrate) {
      navigator.vibrate([50, 30, 50]); // pattern for links
    }
  });
});
