// This function closes all navigation panes
function navCloser(id) {
  if (id != "navHeaderProcessors") {
    toggleNavItem("Header", "Processors", true);
  }
  if (id != "navHeaderGraphics") {
    toggleNavItem("Header", "Graphics", true);
  }
  if (id != "navSideProcessors") {
    toggleNavItem("Side", "Processors", true);
  }
  if (id != "navSideGraphics") {
    toggleNavItem("Side", "Graphics", true);
  }
}

// This function toggles the sidbar for mobile versions
const toggleNavSideBar = () => {
  if (document.querySelector("#sideNavInsert").style.display == "block") {
    document.querySelector("#sideNavInsert").style.display = "none";
  } else {
    document.querySelector("#sideNavInsert").style.display = "block";
    navCloser();
  }
};

// This function pops out the menu for product items in the sidebar and header
const toggleNavItem = (position, product, close) => {
  if (
    document.querySelector(`#nav${position}${product}List`).style.display ==
      "block" ||
    close == true
  ) {
    document.querySelector(`#nav${position}${product}List`).style.display =
      "none";
    document.querySelector(`#nav${position}${product}Arrow`).style.transform =
      "rotate(0deg)";
  } else {
    document.querySelector(`#nav${position}${product}List`).style.display =
      "block";
    document.querySelector(`#nav${position}${product}Arrow`).style.transform =
      "rotate(180deg)";
  }
};

export { toggleNavSideBar, toggleNavItem, navCloser };
