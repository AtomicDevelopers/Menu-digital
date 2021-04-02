window.addEventListener("load", (event) => {
  var image = document.querySelector("img.menu");
  var isLoaded = image.complete && image.naturalHeight !== 0;
  if (isLoaded) {
    document.getElementById("loading").style.display = "none";
  }
});
