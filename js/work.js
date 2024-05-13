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

