function expandMenu() {
  const allCollapsibles = document.querySelectorAll(".collapsible");
  allCollapsibles.forEach(element =>
    element.classList.toggle("collapsible--expanded")
  );
}
