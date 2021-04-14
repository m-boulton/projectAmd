import getApiContent from "../api-requests/fetch-content.js";
import domBuilder from "./dom-builder.js";

async function contentLoader(product) {
  // get url query
  //   console.log(product);
  // fetch from db content
  const pageContent = await getApiContent(product);
  // send url target and obj to dombiulder

  domBuilder(pageContent.insertId, pageContent);
}

export default contentLoader;
