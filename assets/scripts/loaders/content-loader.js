import getApiContent from "../api-requests/fetch-content.js";
import domBuilder from "./dom-builder.js";

async function contentLoader(product) {
  // fetch from db content
  const pageContent = await getApiContent(product);
  // send url target and obj to dombiulder
  if (pageContent.message === "ERROR") {
    return console.log(
      `There isn't any content for this page on the database : ${product}`
    );
  } else {
    domBuilder(pageContent.data.insertId, pageContent.data);
  }
}

export default contentLoader;
