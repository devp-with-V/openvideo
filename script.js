document.getElementById("videoInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const videoURL = URL.createObjectURL(file);
        document.getElementById("videoPlayer").src = videoURL;
    }
});