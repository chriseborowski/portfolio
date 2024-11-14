function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let currentlyExpanded = null;

function expandText(id) {
  const text = document.getElementById("expand-" + id);
  const button = document.getElementById("expand-button-" + id);

  if (text.style.height && text.style.height !== "0px") {
    text.style.height = "0px";
    button.value = "Read more";
    currentlyExpanded = null;
  } else {
    if (currentlyExpanded && currentlyExpanded !== id) {
      const prevText = document.getElementById("expand-" + currentlyExpanded);
      const prevButton = document.getElementById(
        "expand-button-" + currentlyExpanded
      );
      prevText.style.height = "0px";
      prevButton.value = "Read more";
    }

    const wrapper = document.querySelector(".wrapper-" + id);
    text.style.height = wrapper.clientHeight + "px";
    button.value = "Read less";
    currentlyExpanded = id;
  }
}
