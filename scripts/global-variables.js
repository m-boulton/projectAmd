// const apiUrl = "http://api.mboulton.com:3500/amd";
const apiUrl = "http://localhost:3500/amd";

const currentPage = window.location.search;
const currentPagePath = window.location.pathname.split(";")[0].split("/").pop();
const page = new URLSearchParams(currentPage);
let pageContent = null;

export { apiUrl, currentPage, currentPagePath, pageContent };
