import getApiSpec from "../api-requests/fetch-spec.js";
import titleSetter from "../title-setter.js";
import tableBuilder from "./table-builder.js";

async function specLoader(query = titleSetter(), location = "list") {
  // Gets the current product data from the server
  const objData = await getApiSpec(query, location);
  // Sends the currently selected model to be inserted to the DOM
  if (objData.target) {
    return tableBuilder(objData, location);
  }
}

export default specLoader;
