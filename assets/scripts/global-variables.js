const apiUrl =
  window.location.hostname === "localhost"
    ? "http://localhost:3500"
    : "https://api.mboulton.com";

// sets productQuery to the ?p= value in the url
const urlQuery = new URLSearchParams(window.location.search);
const productQuery = urlQuery.get("p");

export { apiUrl, productQuery };
