function socialCard() {
  var cardInfo = document.getElementById("position-card");
  var btnInfo = document.getElementById("position-btn");

  if (cardInfo.style.display === "block") {
    cardInfo.style.display = "none";
    btnInfo.style.display = "block";
  } else {
    cardInfo.style.display = "block";
    btnInfo.style.display = "none";
  }
}
