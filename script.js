function myClicker() {
 
  document.querySelector("#changeText").innerHTML = "Goodbye World. ."; 
  document.querySelector("#nameAppears").innerHTML = "Mattias Strandberg";
  document.querySelector("#refreshText").innerHTML = "(site will be refreshed in 7 seconds. .)";

  setTimeout(function() { location.reload(); }, 7000 );
};