function formBuilder() {
  // getting form input values and making them into an object
  let data = {
    name: document.getElementById("contactName").value,
    email: document.getElementById("contactEmail").value.toLowerCase(),
    phone: document.getElementById("contactPhone").value,
    topic: document.getElementById("contactTopic").value,
    message: document.getElementById("contactMessage").value,
  };
  return data;
}
export default formBuilder;
