import { apiUrl } from "../global-variables.js";

async function getApiContent(product) {
  try {
    const res = await fetch(`${apiUrl}/amd/content?p=${product}`);
    const apiRes = await res.json();
    if (apiRes.message == "Data") {
      return apiRes.data;
    }
    if (apiRes.message == "error") {
      console.log(
        `there was an error from getting data from the server : ${apiRes.errorData}`
      );
      return apiRes.errorData;
    }
  } catch (error) {
    console.log(
      `There was an error requesting ${product} data from mboulton.com${error}`
    );
  }
}
export default getApiContent;
