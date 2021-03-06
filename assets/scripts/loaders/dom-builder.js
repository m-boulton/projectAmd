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
    if (
      item.tag === "img" ||
      item.tag === "input" ||
      item.tag === "br" ||
      item.tag === "hr"
    ) {
      return `<${item.tag} ${attributes(item.attributes)} />`;
    }
    if (item.tag === "video") {
      return `<video ${attributes(item.attributes)}>${innerHtml}</video>`;
    }
    if (item.tag === "source") {
      return `<source ${attributes(item.attributes)}>`;
    }
    if (item.hasOwnProperty("text")) {
      return `<${item.tag} ${attributes(item.attributes)}>${
        item.text
      }${innerHtml}</${item.tag}>`;
    }
    return `<${item.tag} ${attributes(item.attributes)}>${innerHtml}</${
      item.tag
    }>`;
  }

  return `<${item.tag}>${innerHtml}</${item.tag}>`;
}

const domBuilder = (targetInsert, objData) => {
  let insert = null;
  if (targetInsert) {
    insert = targetInsert;
  } else {
    insert = objData.insertId;
  }
  if (objData.background) {
    document.getElementById("main").style.backgroundImage = objData.background;
  }
  document.getElementById(insert).innerHTML = iterateObject(objData.content);
};
export default domBuilder;
