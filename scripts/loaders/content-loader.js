import getApiContent from "../api-requests/fetch-content.js";
import domBuilder from "./dom-builder.js";

async function contentLoader(product) {
  // get url query
  //   console.log(product);
  // fetch from db content
  const pageContent = await getApiContent(product);
  // send url target and obj to dombiulder
  if (pageContent == null) {
    console.log(
      `There isn't any content for this page on the database : ${product}`
    );
  } else {
    domBuilder(pageContent.insertId, pageContent);
  }
}

export default contentLoader;
