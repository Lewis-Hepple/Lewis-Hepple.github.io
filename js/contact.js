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
