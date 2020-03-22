//Vanilla ES6 Popup trigger - waits till all assets are loaded before firing
const popUp = document.querySelector('#popup-wrapper')
const popupHeading = document.querySelector("h4")
const closePopup = document.querySelector("#close-popup")

const paramPopup = () => {
    if (window.location.href.includes("First")) {
        //Customize popup content based of site user came from
        popupHeading.style.color = "#04C2C9"
        popupHeading.innerHTML = "Hello, you came from first parameter"
        // Activate first popup based on the first parameter
        popUp.style.display = "block"
        closePopup.onclick = function () {
            popUp.style.display = "none"
            // Remove query from url
            window.history.pushState("object or string", "Page Title", "/");
        }

    } else if (window.location.href.includes("Second")) {
        //Customize popup content based of site user came from
        popupHeading.style.color = "#E31B6D"
        popupHeading.innerHTML = "Hello, you came from second parameter"
        // Activate second popup based on our second parameter
        popUp.style.display = "block"
        closePopup.onclick = function () {
            popUp.style.display = "none"
            // Remove query 
            window.history.pushState("object or string", "Page Title", "/");
        }

    } else {
        console.log("User didn't come from either parameter")
    }
}

//this is the call you would add on your build instead of the buttons
//window.onload = paramPopup(); 








/*BELOW CODE IS FOR THIS DEMONSTRATION, YOU MOST LIKELY WILL NOT BE CHANGING THE URL FROM A BUTTON */

// Button press will change the current url parameter in order for us to grab that parameter with Javascript to trigger the popup. I am doing this for it to work on code pen, on a normal site you would pass the url query via a redirect or something. 

const firstButton = () => {
document.querySelector("#addFirstParam").addEventListener("click", function () {
  window.history.pushState({}, document.title, "/" + "?FirstParam");
  console.log(window.location.href)
  paramPopup();
})}

const secondButton = () => {
document.querySelector("#addSecondParam").addEventListener("click", function () {
  window.history.pushState({}, document.title, "/" + "?SecondParam");
  console.log(window.location.href)
  paramPopup();
})}

firstButton();
secondButton();

