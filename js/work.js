window.addEventListener("load", function() {
    const amazonImage = document.getElementById('amazonImage');
    const amazonImage2 = document.getElementById('amazonImage2');
    const amazonText = document.getElementById('amazonText');
    const tallystoneImage = document.getElementById('tallystoneImage');
    const tallystoneImage2 = document.getElementById('tallystoneImage2');
    const tallystoneText = document.getElementById('tallystoneText');

    function revealOnScroll() {
        var windowHeight = window.innerHeight; // Use innerHeight to get the viewable height
        var scrollY = window.scrollY || window.pageYOffset; // Compatibility with all browsers

        var elementTopAmazon = amazonImage.getBoundingClientRect().top + scrollY;
        var elementTopTallystone = tallystoneImage.getBoundingClientRect().top + scrollY;
        
        console.log("scrollY: " + scrollY + " amazon height: " + elementTopAmazon);

        if (elementTopAmazon < windowHeight + 200) {
            amazonImage.classList.add('visible');
            amazonImage2.classList.add('visible');
            amazonText.classList.add('visible');
        }

        if (elementTopTallystone < windowHeight + 200) {
            tallystoneImage.classList.add('visible');
            tallystoneImage2.classList.add('visible');
            tallystoneText.classList.add('visible');
        }
    }

    // Listen for both scroll and resize events
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('resize', revealOnScroll); // Handle resize to adjust to new window sizes

    // Optionally, execute once at load to check if elements are already in view
    revealOnScroll();
});
