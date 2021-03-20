import { getApiNav, getApiContent, getApiSpec } from "./api-requests.js";

async function documentLoader() {
  console.log("the document has loaded");
}
async function navLoader() {
  console.log("this is the nav Loading");
}
async function contentLoader() {
  console.log("this is the content loading");
}
async function specLoader() {
  console.log("this is the specs loading");
}

export { documentLoader, navLoader, contentLoader, specLoader };
