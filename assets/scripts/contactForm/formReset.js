function formReset() {
  document.getElementById("contactName").value = "";
  document.getElementById("contactEmail").value = "";
  document.getElementById("contactPhone").value = "";
  document.getElementById("contactTopic").value = "";
  document.getElementById("contactMessage").value = "";
  document.getElementById("contactPopupMessage").textContent = "";
}
export default formReset;
