window.addEventListener("load", function() {
    const amazonImage = document.getElementById('amazonImage');
    const amazonImage2 = document.getElementById('amazonImage2');
    const amazonText = document.getElementById('amazonText');
    const tallystoneImage = document.getElementById('tallystoneImage');
    const tallystoneImage2 = document.getElementById('tallystoneImage2');
    const tallystoneText = document.getElementById('tallystoneText');

    function revealOnScroll() {
        var windowHeight = window.scrollY;
        var elementTopAmazon = amazonImage.getBoundingClientRect().top;
        var elementTopTallystone = tallystoneImage.getBoundingClientRect().top;

        console.log("windowHeight: " + windowHeight + "  amazon height: " + elementTopAmazon + "  tallyheight: "+ elementTopTallystone);

        if (elementTopAmazon < 300) { 
            amazonImage.classList.add('visible');
            amazonImage2.classList.add('visible');
            amazonText.classList.add('visible');
        }

        if (elementTopTallystone < 300) {
            tallystoneImage.classList.add('visible');
            tallystoneImage2.classList.add('visible');
            tallystoneText.classList.add('visible');
        }
    }

    function handleResize() {
        revealOnScroll(); // Check if elements should be visible after a resize
    }

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('resize', handleResize);

    revealOnScroll();
});
