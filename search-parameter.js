//Dynamic popup based on search parameter


const buildModal = (fromParam, style) => {
	const popUp = document.querySelector('#popup-wrapper')
	const popupHeading = document.querySelector("h4")
	const closePopup = document.querySelector("#close-popup")
  	popupHeading.style.color = style;
  	popupHeading.innerHTML = `Hello, you came from ${fromParam} parameter`
  	// Activate first popup based on the first parameter
  	popUp.style.display = "block"
  	//add listener to parent so user can dismiss by clicking anywhere on the modal - x if for clarity
	closePopup.parentNode.onclick = function() { 
  	popUp.style.display = "none"
	// Remove query from url
	window.history.pushState("object or string", "Page Title", "/");
	}
}

const paramPopup = () => {
	if (window.location.href.includes("First")) {
    	  buildModal("First","#04C2C9");
	} else if (window.location.href.includes("Second")) { 
    	  buildModal("Second","#E31B6D");	
	} else {
	  console.log("User didn't come from either parameter")
	}
}

//this is the call you would add on your build instead of the buttons
//window.onload = paramPopup(); 








/*BELOW CODE IS FOR THIS DEMONSTRATION, YOU MOST LIKELY WILL NOT BE CHANGING THE URL FROM A BUTTON */

// Button press will change the current url parameter in order for us to grab that parameter with Javascript to trigger the popup. I am doing this for it to work on code pen, on a normal site you would pass the url query via a redirect or something. 


document.querySelector("#addFirstParam").addEventListener("click", function () {
  window.history.pushState({}, document.title, "/" + "?FirstParam");
  console.log(window.location.href)
  paramPopup();
})


document.querySelector("#addSecondParam").addEventListener("click", function () {
  window.history.pushState({}, document.title, "/" + "?SecondParam");
  console.log(window.location.href)
  paramPopup();
})


