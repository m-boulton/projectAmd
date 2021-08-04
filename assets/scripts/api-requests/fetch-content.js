import { apiUrl } from "../global-variables.js";

async function getApiContent(product) {
  try {
    const res = await fetch(`${apiUrl}/amd/content?p=${product}`);
    const apiRes = await res.json();
    if (apiRes.message == "ERROR")
      throw `there was an error from getting data from the server : ${apiRes.errorData}`;
    if (apiRes.message == "DATA") return apiRes;
  } catch (error) {
    console.log(
      `There was an error requesting ${product} data from mboulton.com${error}`
    );
    return apiRes;
  }
}
export default getApiContent;
