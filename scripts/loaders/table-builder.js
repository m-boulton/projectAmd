import getApiSpec from "../api-requests/fetch-spec.js";

function tableElements(arr) {
  console.log(arr);
}

function buttonBuilder(arr) {
  return arr
    .map((item) => {
      return `<button class="model-button" id="${item}">${item}</button>`;
    })
    .join("");
}

async function tableBuilder(objData, loc) {
  let data = null;
  if (objData.models) {
    data = await buttonBuilder(objData.models);
  }
  if (objData.items) {
    data = await tableElements(objData.items);
  }
  if (typeof objData == "undefined")
    return console.log("table Builder had an error");
  document.getElementById(objData.insertId).innerHTML = data;
  return;
}

export default tableBuilder;
