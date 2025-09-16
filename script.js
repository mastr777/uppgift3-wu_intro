// Old version (works)

function myClicker() {
 
  document.querySelector("#changeText").innerHTML = "Goodbye World. ."; 
  document.querySelector("#nameAppears").innerHTML = "Mattias Strandberg";
  document.querySelector("#refreshText").innerHTML = "(site will be refreshed in 7 seconds. .)";

  setTimeout(function() { location.reload(); }, 7000 );
};

// ---------------------------------------------------------------------------------------


// Added querySelector / EventListener, variables - New version


/* const changeText = document.querySelector("#changeText");
const nameAppears = document.querySelector("#nameAppears");
const refreshText = document.querySelector("#refreshText");

changeText.addEventListener("click", myClicker);
nameAppears.addEventListener("click", myClicker);
refreshText.addEventListener("click", myClicker);

function myClicker() {
  changeText.textContent = "Goodbye World. .";

  nameAppears.textContent = "Mattias Strandberg";

  refreshText.textContent = "(site will be refreshed in 7 seconds. .)";

  setTimeout(function() { location.reload(); }, 7000 );
}; */