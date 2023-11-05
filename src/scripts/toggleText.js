document.getElementById("toggleText").addEventListener("click", function () {
  var explanation = document.getElementById("detailedExplanation");
  if (explanation.style.display === "none") {
    explanation.style.display = "block";
    //explanation.scrollIntoView({ behavior: "instant", block: "start" });
  } else {
    explanation.style.display = "none";
  }
});
