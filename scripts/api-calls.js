//#TODO
// api fetch
// async function > await promise resolve or reject) .then function (resolve) => { resolve.map("do something")}

// async function apiCall() {
//   try {
//     const response = await fetch(apiUrl);
//     if (response.ok) {
//       const data = await response.json();
//       data.map();
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// apiCall();


let apiUrlNav = "http://localhost:3500/amdRoutes/nav";
// let apiUrl = "api.mboulton.com";

let navContent = null;

// localhost fetch nav data
async function getApiNav() {
  const options = {};
  const res = await fetch(apiUrlNav);
  const data = await res.json()
}

// fetching navigation content from api source
async function navContentLoad() {
  console.log('retrieving nav content');
  try {
    if (sessionStorage.amdNavLoaded){
      navContent = sessionStorage.amdNavContent;
    } else if (localStorage.amdNavLoaded) {
      async function () {
        try {
          const response = await fetch(apiUrl + "/nav", {
            method : 'GET'
          })
          .then(function (response) {
            return response.json().then(function(nav){
              if (localStorage.amdBuild == nav.amdBuild) {
                navContent = nav;
              } else {
              
              }
            })
          })
        } catch (error) {
          console.log(error);
        }
        
      }
      navContent = localStorage.amdNavContent;
    } else {
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
    }}
  } catch (error) {
    
  }
  console.log('nav content loaded');
}

window.onload = function productContentLoad() {
  console.log('window has loaded');
  async function () {
    const result = await navContentLoad();

  }
  
}