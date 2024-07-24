//save url input to url 

document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('urlInput').value;
    if (url) {
        window.location.href = `training.html?videoUrl=${encodeURIComponent(url)}`;
    } else {
        alert('Please enter a valid URL.');
    }
});

//add the url in the frame

window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoUrl = urlParams.get('videoUrl');
    if (videoUrl) {
        const videoContainer = document.getElementById('videoContainer');
        const errorMsg = document.getElementById('errorMsg');
        const youtubeMatch = videoUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);

        if (youtubeMatch) {
            const videoId = youtubeMatch[1];
            videoContainer.innerHTML = `<iframe width="600" height="400" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        } else {
            errorMsg.textContent = 'Invalid YouTube URL.';
        }
    } else {
        document.getElementById('errorMsg').textContent = 'No video URL provided.';
    }
});




// randomise and change number

function generateRandomNumber() {
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    // Display the random number
    document.getElementById('randomNumber').innerText = randomNumber;
}

// Generate a random number immediately when the page loads
generateRandomNumber();

// Set an interval to generate a random number every minute (60000 milliseconds)
setInterval(generateRandomNumber, 60000);
