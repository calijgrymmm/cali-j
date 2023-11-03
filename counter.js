document.addEventListener('DOMContentLoaded', function() {
    fetch('https://calijgrymmm.github.io/cali-j/')
        .then(response => response.text())
        .then(data => {
            const visitCount = data.split('\n').length - 1;
            document.getElementById('visitCount').textContent = visitCount;
        });
});
