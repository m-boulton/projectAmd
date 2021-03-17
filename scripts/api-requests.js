const apiUrl = "http://api.mboulton.com:3500/amd";
// #TODO build Jwt authentication
const apiPass = "boogeyboo";
const getOptions = {
  method: "GET",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
  body: JSON.stringify(reqBody),
};

// localhost fetch nav data
async function getApiNav( version = null) {
  const reqBody = {
    password: apiPass,
    auth: "",
    versionCheck: version,
  };
  try {
    const res = await fetch(`${apiUrl}/nav`, getOptions);
    const apiRes = await res.json();
    if (apiRes.body.updated) {
      return "updated";
    } else if (apiRes.body.error) {
      console.log(
        `The mboulton.com server returned an error ${apiRes.body.errorData}`
      );
      return apiRes.body.message;
    } else {
      return apiRes.body;
    }
  } catch (error) {
    console.log(`There was an error requesting  navigation data from mboulton.com${error}`);
  }
}
async function getApiContent(productId) {
  const reqBody = {
    password: apiPass,
    auth: '',
    id = productId
  }
  try {
    const res = await fetch(`${apiUrl}/content`, getOptions);
    const apiRes = await res.json()
    if (apiRes.body.error) {
      console.log(
        `The mboulton.com server returned an error ${apiRes.body.errorData}`
        );
        return apiRes.body.message;
    } else{
      return apiRes.body;
    }
  } catch (error) {
    console.log(`There was an error requesting ${productId} data from mboulton.com${error}`)
  }
}
async function getApiSpec(specId) {
  const reqBody = {
    password: apiPass,
    auth: '',
    id = specId
  }
  try {
    const res = await fetch(`${apiUrl}/spec`, getOptions);
    const apiRes = await res.json()
    if (apiRes.body.error) {
      console.log(
        `The mboulton.com server returned an error ${apiRes.body.errorData}`
        );
        return apiRes.body.message;
    } else{
      return apiRes.body;
    }
  } catch (error) {
    console.log(`There was an error requesting ${specId} data from mboulton.com${error}`)
  }
}
export { getApiNav, getApiContent, getApiSpec};
