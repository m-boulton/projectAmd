function attributes(object) {
  let array = [];
  for (const [key, value] of Object.entries(object)) {
    array.push(`${key}="${value}"`);
  }

  return array.join(" ");
}

function iterateObject(item) {
  const innerHtml = item.hasOwnProperty("value")
    ? item.value
    : (item.children || []).map(iterateObject).join(" ");

  if (item.hasOwnProperty("attributes")) {
    if (item.tag == "img") {
      return `<img ${attributes(item.attributes)}/>`;
    }
    if (item.hasOwnProperty("name")) {
      return `<${item.tag} ${attributes(item.attributes)}>${
        item.name
      }${innerHtml}</${item.tag}>`;
    }
    return `<${item.tag} ${attributes(item.attributes)}>${innerHtml}</${
      item.tag
    }>`;
  }

  return `<${item.tag}>${innerHtml}</${item.tag}>`;
}

const domBuilder = (target, objData) => {
  let insert = null;
  if (target) {
    insert = target;
  } else {
    insert = objData.insertId;
  }
  document.getElementById(insert).innerHTML = iterateObject(objData.content);
};
export default domBuilder;
