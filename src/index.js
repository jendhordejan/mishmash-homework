// Make an HTML page that fetches starwars data from an api and displays it:

// 1. Make an HTML file
// 2. Include a script
// 3. Fetch data about Luke Skywalker from the from the following url `https://swapi.co/api/people/1`
// 4. Display it on the page
// 5. Make a button with the text `DARTH VADER` on it
// 6. When you click the button it fetches data from `https://swapi.co/api/people/4/` and displays it on the page

const fetchLukeSkyWalker = () => {
  // fetch example - works in the browser but not in node
  // (fetch is not a part of node.js by default)
  fetch("https://swapi.co/api/people/1") // make the request
  .then(response => response.json()) // convert response to json
  .then(myJson => { // display data in the browser
    const display = document.getElementById("display")
    display.innerHTML = myJson.name
  })
}

const fetchDartVader = () => {
  // fetch example - works in the browser but not in node
  // (fetch is not a part of node.js by default)
  fetch("https://swapi.co/api/people/4/") // make the request
  .then(response => response.json()) // convert response to json
  .then(myJson => { // display data in the browser
    const display = document.getElementById("display")
    

    display.innerHTML = myJson.name
  })
}

const btnClicked = document.getElementById("fetch DarthVader")
btnClicked.addEventListener("click", fetchDartVader)

fetchLukeSkyWalker()