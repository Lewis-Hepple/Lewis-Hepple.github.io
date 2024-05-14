// ----------- Theme Toggle Button ------------------------
function toggleTheme() {
    var body = document.body;
    
    
    // Save the theme preference
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add("dark-theme2")
        localStorage.setItem('theme', "2");
    } else if (body.classList.contains('dark-theme2')) {
        body.classList.remove('dark-theme2');
        body.classList.add("dark-theme3")
        localStorage.setItem('theme', "3");
    } else if (body.classList.contains('dark-theme3')) {
        body.classList.remove('dark-theme3');
        body.classList.add("dark-theme4")  
        localStorage.setItem('theme', "4");
    } else if (body.classList.contains('dark-theme4')) {
        body.classList.remove('dark-theme4');
        body.classList.add("dark-theme5")
        localStorage.setItem('theme', "5");
    } else if (body.classList.contains('dark-theme5')) {
        body.classList.remove('dark-theme5');
        localStorage.setItem('theme', "0");
    } else {
        body.classList.add("dark-theme")
        localStorage.setItem('theme', "1");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === "1") {
        document.body.classList.add('dark-theme');
    } else if (savedTheme === "2") {
        document.body.classList.add('dark-theme2');
    } else if (savedTheme === "3") {
        document.body.classList.add('dark-theme3');
    } else if (savedTheme === "4") {
        document.body.classList.add('dark-theme4');
    } else if (savedTheme === "5") {
        document.body.classList.add('dark-theme5');
    } 

});




// ----------  Contact Me From ---------------------

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('emailForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var name = document.getElementById('name').value;
        var subject = document.getElementById('subject').value;
        var body = document.getElementById('body').value;
        var mailto_link = 'mailto:thelewishepple@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

        window.location.href = mailto_link; 
    });
});



// --------  Work Fade In --------------
window.addEventListener("load", function() {
    const amazonImage = document.getElementById('amazonImage');
    const amazonImage2 = document.getElementById('amazonImage2');
    const amazonText = document.getElementById('amazonText');
    const tallystoneImage = document.getElementById('tallystoneImage');
    const tallystoneImage2 = document.getElementById('tallystoneImage2');
    const tallystoneText = document.getElementById('tallystoneText');

    function revealOnScroll() {
        var windowHeight = window.innerHeight / 1.5 + window.scrollY;
        var elementTopAmazon = $('#amazonImage').offset().top;
        var elementTopTallystone = $('#tallystoneImage').offset().top;

        if (elementTopAmazon < windowHeight) { 
            amazonImage.classList.add('visible');
            amazonImage2.classList.add('visible');
            amazonText.classList.add('visible');
        } else if (elementTopAmazon > windowHeight + 200) {
            amazonImage.classList.remove('visible');
            amazonImage2.classList.remove('visible');
            amazonText.classList.remove('visible');
        }

        if (elementTopTallystone < windowHeight) {
            tallystoneImage.classList.add('visible');
            tallystoneImage2.classList.add('visible');
            tallystoneText.classList.add('visible');
        } else if (elementTopTallystone > windowHeight + 200) {
            tallystoneImage.classList.remove('visible');
            tallystoneImage2.classList.remove('visible');
            tallystoneText.classList.remove('visible');
        }
    }
    

    function handleResize() {
        revealOnScroll();
    }

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('resize', handleResize);

    revealOnScroll();
});


