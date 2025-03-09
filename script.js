function showDownloadMessage() {
    var message = document.getElementById("download-message");
    message.style.display = "block";

    // Hide the message after 3 seconds
    setTimeout(function () {
        message.style.display = "none";
    }, 3000);
}