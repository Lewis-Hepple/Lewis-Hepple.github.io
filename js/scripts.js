//---------- Logo Hovers ------
document.addEventListener('DOMContentLoaded', function() {

});

// ---------- Nav Menu -----------------

function toggleMenu() {
    const navLinks = document.getElementById('navMenu');
    navLinks.classList.toggle('active');
}


// ----------- Theme Toggle Button ------------------------
function toggleTheme() {
    var body = document.body;
    // Save the theme preference and cycle on click
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

document.addEventListener("DOMContentLoaded", function() {
    //
    // ------------ Load Saved Theme ---------------
    //
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === "1") {
        document.body.classList.add('dark-theme1');
    } else if (savedTheme === "2") {
        document.body.classList.add('dark-theme2');
    } else if (savedTheme === "3") {
        document.body.classList.add('dark-theme3');
    }

    //
    // ----------------- Logo Tooltip Hovers -------------
    //
    document.querySelectorAll('.icon-group img, .work-icon-group img').forEach(img => {
        img.addEventListener('mouseover', () => {
            // Get tooltip content
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = img.getAttribute('data-label');
            document.body.appendChild(tooltip);
            // get tooltip location
            const rect = img.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX + img.clientWidth / 2 - tooltip.clientWidth / 2}px`;
            tooltip.style.top = `${rect.top + window.scrollY - tooltip.clientHeight - 10}px`;
        });

        img.addEventListener('mouseout', () => {
            document.querySelector('.tooltip').remove();
        });
    });


    window.addEventListener("load", function() {
        //
        // ---------- Contact Me Form --------------------
        //
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


        // 
        // --------  Work Fade In --------------
        //
        if (window.location.pathname === '/work.html') {
            const amazonImage = document.getElementById('amazonImage');
            const amazonImage2 = document.getElementById('amazonImage2');
            const amazonText = document.getElementById('amazonText');
            const tallystoneImage = document.getElementById('tallystoneImage');
            const tallystoneImage2 = document.getElementById('tallystoneImage2');
            const tallystoneText = document.getElementById('tallystoneText');

            function revealOnScroll() {
                // Get current heights + offsets 
                var windowHeight = window.innerHeight / 1.5 + window.scrollY;
                var elementTopAmazon = $('#amazonImage').offset().top;
                var elementTopTallystone = $('#tallystoneImage').offset().top;

                // Animate divs to enter screen at correct heights
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



        //* 
        //* -------  Typing Effect on Landing Page -------------- 
        //*
        if ('/index.html' === window.location.pathname) {
            // Get Text from file and parse
            fetch('files/coding.txt')
                .then(
                    response => response.ok ? response.text() : Promise.reject(response.statusText))
                .then(
                    data => data.split('\\EOF').forEach(
                    (fileContent, index) => startTypingEffect(fileContent.split('\n'), index)))
                .catch(
                    error => console.error('Error fetching background text:', error));

            function startTypingEffect(lines, iter) {
                let [lineIndex, charIndex, currentTransform] = [0, 0, 0];
                const doco = document.getElementById(`typewriter${iter}`);
                const parentHeight = parseFloat(getComputedStyle(doco.parentElement).height);
                const lineHeight = parseFloat(getComputedStyle(doco).lineHeight) + parseFloat(getComputedStyle(doco).marginBlockEnd) + parseFloat(getComputedStyle(doco).marginBlockStart);

                function typeWriter() {
                    // If we have reached EOF of our text then scroll back to top, and remove all our text,
                    // Otherwise we either add a char to end of our <p> or
                    // or we create a newline and check if we have reached bottom of our section, scroll if needed
                    if (lineIndex < lines.length) {
                        if (charIndex < lines[lineIndex].length) {
                            doco.innerHTML += lines[lineIndex][charIndex++];
                            setTimeout(typeWriter, randomInt(6, 20));
                        } else {
                            doco.innerHTML += '<p style="margin:0">';
                            charIndex = 0;
                            lineIndex++;
                            scrollToBottom();
                            setTimeout(typeWriter, randomInt(4, 20));
                        }
                    } else {
                        [lineIndex, charIndex] = [0, 0];
                        doco.innerHTML = '';
                        scrollToTop();
                        setTimeout(typeWriter, randomInt(6, 20));
                    }
                }

                function scrollToTop() {
                    currentTransform = 0;
                    doco.style.transform = `translateY(${currentTransform}px)`;
                }

                function scrollToBottom() {
                    const currentHeight = lineHeight * lineIndex;
                    if (currentHeight > parentHeight - lineHeight) {
                        currentTransform -= lineHeight;
                        doco.style.transform = `translateY(${currentTransform}px)`;
                    }
                }

                function randomInt(min, max) {
                    // 1/169 chance to do a long pause between 200-300ms. otherwise do a short pause based on bounds
                    return Math.random() < 1 / 169 ? Math.floor(Math.random() * 100) + 200 : Math.floor(Math.random() * (max - min + 1)) + min;
                }
                // Resize our divs for correct scrolling if window size changes (only works when making it bigger)
                window.addEventListener('resize', () => parentHeight = parseFloat(getComputedStyle(doco.parentElement).height));
                typeWriter();
            }
        }
    });
});
