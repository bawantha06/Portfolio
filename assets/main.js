function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += "responsive";
    }else{
        menuBtn.className = "nav-menu";
    }
}


window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    }else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

    }
}

var typingEffect = new Typed(".typedText",{
    strings : ["Editor","Developer","Designer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


sr.reveal('.project-box', {interval: 200})

sr.reveal('.top-header', {})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', {delay: 100})
srLeft.reveal('.contact-info', {delay: 100})

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box', {delay: 100})
srRight.reveal('.form-control', {delay: 100})


const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }  else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

const darkModeIcon = document.getElementById('darkModeIcon');

// Toggle dark mode
darkModeIcon.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');

    // Switch icon between moon and sun
    if (document.documentElement.classList.contains('dark-mode')) {
        darkModeIcon.classList.replace('uil-moon', 'uil-sun');
    } else {
        darkModeIcon.classList.replace('uil-sun', 'uil-moon');
    }
});

document.querySelector('.blue-btn').addEventListener('click', () => {
    window.location.href = '#contact'; // Scroll to the contact section
});


document.querySelector('.form-button .btn').addEventListener('click', () => {
    const name = document.querySelector('input[placeholder="Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Email"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Message"]').value.trim();

    


    // Validate input fields
    if (!name || !email || !message) {
        alert('Please fill in all the fields!');
        return;
    }

    // Prepare email parameters
    const emailParams = {
        from_name: name,
        from_email: email,
        message: message,
    };

    // Initialize EmailJS (public key)
    emailjs.init('xs41XVyNrSDe8tZyF');

    // Send email using EmailJS
    emailjs.send('service_3oqvvr8', 'template_dphkzk7', emailParams)
        .then(() => {
            // Success alert
            alert(`Thank you ${name}, your message has been sent!`);
             // Clear input fields
             nameInput.value = '';
             emailInput.value = '';
             messageInput.value = '';
        })
        .catch((error) => {
            // Enhanced error handling
            console.error('EmailJS Error:', error.text); // Log detailed error
            alert('Failed to send your message. Please try again later.');
        });
});
 // Replace 'YOUR_USER_ID' with the EmailJS User ID









