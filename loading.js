var loader = document.getElementById("preloading");

// Set a duration in milliseconds (e.g., 2000 milliseconds = 2 seconds)
var duration = 250;

// Use setTimeout to delay hiding the loader
setTimeout(function () {
    loader.style.display = "none";
}, duration);
