function myClicker() {
  document.getElementById("changeText").innerHTML = "Goodbye World. ."; 
  document.getElementById("nameAppears").innerHTML = "Mattias Strandberg";
  document.getElementById("refreshText").innerHTML = "Site will be refreshed in 6 seconds. .";

  setTimeout(function() { location.reload(); }, 6000 );
};