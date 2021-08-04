import getApiSpec from "../api-requests/fetch-spec.js";

function tableElements(arr) {
  // builds the table contents with the current data
  let data = null;
  return arr
    .map((item) => {
      return `<tr><th>${item.header}</th><td>${item.description}</td></tr>`;
    })
    .join("");
}

function buttonBuilder(arr) {
  // builds buttons for all the product models
  return arr
    .map((item) => {
      return `<button class="model-button" id="${item}">${item}</button>`;
    })
    .join("");
}

async function tableBuilder(objData) {
  let data = null;
  // handles falsy errors
  if (typeof objData == "undefined")
    return console.log("table Builder had an error");
  // Builds buttons for all the models
  if (objData.models) {
    data = await buttonBuilder(objData.models);
  }
  // Fills the tabel with specification contents
  if (objData.items) {
    data = await tableElements(objData.items);
  }
  // Inserts the built HTML to the DOM
  document.getElementById(objData.insertId).innerHTML = data;
  // Returns the first Model on the initial page load so that it can be sent for rendering
  if (objData.models) {
    return objData.models[0];
  }
  return;
}

export default tableBuilder;
