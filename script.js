function myClicker() {
  document.getElementById("changeText").innerHTML = "Goodbye World. ."; 
  document.getElementById("nameAppears").innerHTML = "Mattias Strandberg";
  document.getElementById("refreshText").innerHTML = "(site will be refreshed in 7 seconds. .)";

  setTimeout(function() { location.reload(); }, 7000 );
};