// ---------- Nav Menu -----------------

function toggleMenu() {
    const navLinks = document.getElementById('navMenu');
    navLinks.classList.toggle('active');
}

// ----------- Theme Toggle Button ------------------------
function toggleTheme() {
    var body = document.body;
    // Save the theme preference
    if (body.classList.contains('dark-theme1')) {
        body.classList.remove('dark-theme1');
        body.classList.add("dark-theme2")
        localStorage.setItem('theme', "2");
    } else if (body.classList.contains('dark-theme2')) {
        body.classList.remove('dark-theme2');
        body.classList.add("dark-theme3")
        localStorage.setItem('theme', "3");
    } else if (body.classList.contains('dark-theme3')) {
        body.classList.remove('dark-theme3');
        localStorage.setItem('theme', "0");
    } else {
        body.classList.add("dark-theme1")
        localStorage.setItem('theme', "1");
    }
}

document.addEventListener('DOMContentLoaded', function() {

    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === "1") {
        document.body.classList.add('dark-theme1');
    } else if (savedTheme === "2") {
        document.body.classList.add('dark-theme2');
    } else if (savedTheme === "3") {
        document.body.classList.add('dark-theme3');
    }
});




// ----------  Contact Me From ---------------------

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname === '/contact.html') {
        document.getElementById('emailForm').addEventListener('submit', function(e) {
            e.preventDefault();

            var name = document.getElementById('name').value;
            var subject = document.getElementById('subject').value;
            var body = document.getElementById('body').value;
            var mailto_link = 'mailto:thelewishepple@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

            window.location.href = mailto_link; 
        });
    }
});



// --------  Work Fade In --------------
window.addEventListener("load", function() {
    if (window.location.pathname === '/work.html') {
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
    }
});


//* -------  Typing Effect on Landing Page -------------- */

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        fetch('files/coding.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                const files = data.split('\\EOF');
                files.forEach((fileContent, index) => {
                    startTypingEffect(fileContent.split('\n'), index);
                });
            })
            .catch(error => {
                console.error('There has been an error fetching your background text', error);
            });
    }

    function startTypingEffect(lines, iter) {
        let lineIndex = 0;
        let charIndex = 0;
        let doco;
        let currentTransform = 0;
        switch (iter) {
            case 0:
                doco = document.getElementById("typewriter0");
                break;
            case 1:
                doco = document.getElementById("typewriter1");
                break;
            case 2:
                doco = document.getElementById("typewriter2");
                break;
            case 3:
                doco = document.getElementById("typewriter3");
                break;
            case 4:
                doco = document.getElementById("typewriter4");
                break;
            case 5:
                doco = document.getElementById("typewriter5");
                break;
            default:
                console.warn(`No typewriter element found for iter ${iter}`);
                return;
        }

        let parentHeight = parseFloat(getComputedStyle(doco.parentElement).height);
        const lineHeight = parseFloat(getComputedStyle(doco).lineHeight) + parseFloat(getComputedStyle(doco).marginBlockEnd) + parseFloat(getComputedStyle(doco).marginBlockStart) + parseFloat(getComputedStyle(doco).marginBlockEnd);

        function typeWriter() {
            if (lineIndex < lines.length) {
                if (charIndex < lines[lineIndex].length) {
                    doco.innerHTML += lines[lineIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(typeWriter, randomInt(6,20));
                } else {
                    doco.innerHTML += '<p style="margin-block-end:0; margin-block-start:0">';
                    charIndex = 0;
                    lineIndex++;
                    scrollToBottom();
                    setTimeout(typeWriter, randomInt(4,20));
                }
            } else {
                lineIndex = 0;
                charIndex = 0;
                doco.innerHTML = '';
                scrollToTop();
                setTimeout(typeWriter, randomInt(6,20));
            }
        }

        function scrollToTop() {
            currentTransform = 0;
            doco.style.transform = `translateY(${currentTransform}px)`;
        }

        function scrollToBottom() {
            let currentHeight = lineHeight * lineIndex;
            if (currentHeight > parentHeight - lineHeight) {
                currentTransform -= lineHeight; // Adjust this value to sync with typing speed
                doco.style.transform = `translateY(${currentTransform}px)`;
            }
        }

        function randomInt(min, max) {
            // 1 in 169 chance to do a longer pause to simulate thinking
            if (Math.floor(Math.random() * 169) >= 168) {
                return Math.floor(Math.random() * 100) + 200;
            }
            // random number between max and min
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function handleResize() {
            parentHeight = parseFloat(getComputedStyle(doco.parentElement).height);
        }

        window.addEventListener('resize', handleResize);
        typeWriter();
    }
});


