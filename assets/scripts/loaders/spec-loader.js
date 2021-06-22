import getApiSpec from "../api-requests/fetch-spec.js";
import titleSetter from "../title-setter.js";
import tableBuilder from "./table-builder.js";

async function specLoader(query, location) {
  const loc = location ? location : "list";
  const targetQuery = query ? query : titleSetter();
  const objData = await getApiSpec(targetQuery, loc);
  if (objData.target) {
    return tableBuilder(objData, loc);
  }
}

export default specLoader;
