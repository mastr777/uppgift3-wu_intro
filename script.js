
// Added querySelector / EventListener, variables - New version


const changeText = document.querySelector("#changeText");
const nameAppears = document.querySelector("#nameAppears");
const refreshText = document.querySelector("#refreshText");
const happening = document.querySelector("#buttonClick");

changeText.addEventListener("click", thisClick);
nameAppears.addEventListener("click", thisClick);
refreshText.addEventListener("click", thisClick);
happening.addEventListener("click", thisClick);

function thisClick() {
  changeText.textContent = "Goodbye World. .";

  nameAppears.textContent = "Mattias Strandberg";

  refreshText.textContent = "(site will be refreshed in 7 seconds. .)";

  setTimeout(function() { location.reload(); }, 7000 );
};

// ---------------------------------------------------------------------------------------

// Old working version (test version with onClick in index.html)

/* function myClicker() {
 
  document.querySelector("#changeText").innerHTML = "Goodbye World. ."; 
  document.querySelector("#nameAppears").innerHTML = "Mattias Strandberg";
  document.querySelector("#refreshText").innerHTML = "(site will be refreshed in 7 seconds. .)";

  setTimeout(function() { location.reload(); }, 7000 );
}; */


