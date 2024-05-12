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
        var elementTopTallystone = tallystoneImage.getBoundingClientRect().top + 1;
        
        console.log("windowHeight: " + windowHeight + "  amazon height: " + elementTopAmazon);

        if (elementTopAmazon < 200) { 
            amazonImage.classList.add('visible');
            amazonImage2.classList.add('visible');
            amazonText.classList.add('visible');
        }

        if (elementTopTallystone < 200) {
            tallystoneImage.classList.add('visible');
            tallystoneImage2.classList.add('visible');
            tallystoneText.classList.add('visible');
        }
    }

    // Add the scroll event listener once everything is loaded
    window.addEventListener('scroll', revealOnScroll);

    // Optionally, execute once at load to check if elements are already in view
    revealOnScroll();
});
