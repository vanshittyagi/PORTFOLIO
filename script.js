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


document.getElementById('openlinkbutton1').addEventListener('click', function() {
    window.open('https://chat.openai.com/');
});


document.getElementById('openlinkbutton2').addEventListener('click', function() {
    window.open('https://www.twitter.com/yourtwitterprofile', '_blank');
});

document.getElementById('openlinkbutton3').addEventListener('click', function() {
    window.open('https://www.instagram.com/yourinstagramprofile', '_blank');
});

document.getElementById('openlinkbutton4').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/yourlinkedinprofile', '_blank');
});

document.getElementById('openlinkbutton5').addEventListener('click', function() {
    window.open('https://www.youtube.com/youryoutubeprofile', '_blank');
});

document.getElementById('openlinkbutton6').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/vanshit-tyagi-8ab426279/');
});
