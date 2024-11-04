function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function expandText() {
  var text = document.getElementById("expand");
  if (text.clientHeight) {
    text.style.height = 0;
  } else {
    var wrapper = document.querySelector(".wrapper");
    text.style.height = wrapper.clientHeight + "px";
  }

  document.getElementById("expand-button").value =
    document.getElementById("expand-button").value === "Read more"
      ? "Read less"
      : "Read more";
}
