document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('homelink');
    const skillsLink = document.getElementById('skillslink');
    const projectsLink = document.getElementById('projectslink');
    const contactLink = document.getElementById('contactlink');

    homeLink.addEventListener('click', function() {
        document.querySelector('.firstsection').scrollIntoView({ behavior: 'smooth' });
    });

    skillsLink.addEventListener('click', function() {
        document.querySelector('.secondsection').scrollIntoView({ behavior: 'smooth' });
    });

    projectsLink.addEventListener('click', function() {
        document.querySelector('.thirdsection').scrollIntoView({ behavior: 'smooth' });
    });

    contactLink.addEventListener('click', function() {
        document.querySelector('.sevensection').scrollIntoView({ behavior: 'smooth' });
    });
});


document.getElementById('downloadbutton').addEventListener('click', function() {
    window.open('https://docs.google.com/document/d/1rhEwL_JuuwnnPqOTjetAQICqhyEEhrB2/edit?usp=sharing&ouid=107731211529380032496&rtpof=true&sd=true');
});

document.getElementById('openlinkbutton1').addEventListener('click', function() {
    window.open('https://github.com/vanshittyagi');
});


document.getElementById('openlinkbutton2').addEventListener('click', function() {
    window.open('https://vanshittyagi.github.io/Landing-Page-for-CODSOFT/');
});

document.getElementById('openlinkbutton3').addEventListener('click', function() {
    window.open('https://vanshittyagi.github.io/Movie-Viewer/');
});

document.getElementById('openlinkbutton4').addEventListener('click', function() {
    window.open('https://vanshittyagi.github.io/Ticket-Booking-Site/');
});

document.getElementById('openlinkbutton5').addEventListener('click', function() {
    window.open('https://www.youtube.com/youryoutubeprofile', '_blank');
});

document.getElementById('openlinkbutton6').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/vanshit-tyagi-8ab426279/');
});
